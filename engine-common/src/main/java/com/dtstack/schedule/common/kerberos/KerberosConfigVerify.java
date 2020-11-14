package com.dtstack.schedule.common.kerberos;

import com.alibaba.fastjson.JSONObject;
import com.dtstack.engine.common.exception.RdosDefineException;
import com.dtstack.engine.common.sftp.SftpConfig;
import com.dtstack.engine.common.sftp.SftpFileManage;
import com.dtstack.schedule.common.util.Xml2JsonUtil;
import com.dtstack.schedule.common.util.ZipUtil;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.SftpException;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;
import java.util.stream.Collectors;

/**
 * @author sanyue
 * @date 2019/8/26
 */
public class KerberosConfigVerify {

    private static final Logger logger = LoggerFactory.getLogger(KerberosConfigVerify.class);

    private static final String LOCK_SUFFIX = ".lock";

    private static final String SEPARATE = File.separator;

    private static final String DOT = ".";

    private static final String XML_SUFFIX = ".xml";

    private static final String _HOST = "_HOST";

    public static Map<String, Map<String, String>> parseConfMap(List<File> unzipFileList, String unZipLocation) throws Exception {
        Map<String, File> confFileMap = new HashMap<>();
        List<File> xmlFileList = new ArrayList<>();
        String pathSuf = unZipLocation;
        filterXml(unzipFileList, pathSuf, xmlFileList, confFileMap);
        Map<String, Map<String, String>> confMap = null;
        if (CollectionUtils.isNotEmpty(xmlFileList)) {
            try {
                confMap = parseAndRead(xmlFileList);
            } catch (Exception e) {
                logger.error("{}", e);
                throw new RdosDefineException("配置文件解析失败");
            }
        } else {
            throw new RdosDefineException("当前节点配置文件不存在");
        }
        return confMap;
    }

    /**
     * 解析并读取配置文件内容
     */
    private static Map<String, Map<String, String>> parseAndRead(List<File> xmlFiles) throws Exception {
        Map<String, Map<String, String>> xmlMaps = new HashMap<>();
        for (File file : xmlFiles) {
            Map<String, Object> xmlMap = Xml2JsonUtil.xml2map(file);
            xmlMaps.put(file.getName(), mapToString(xmlMap));
        }

        return xmlMaps;
    }

    private static Map<String, String> mapToString(Map<String, Object> xmlMaps) {
        //toString
        Map<String, String> result = new HashMap<>();
        for (String key : xmlMaps.keySet()) {
            result.put(key, xmlMaps.get(key).toString());
        }
        return result;
    }

    public static List<File> getFilesFromZip(String zipLocation, String unzipLocation) {
        try {
            List<File> xmlFiles = ZipUtil.upzipFile(zipLocation, unzipLocation);
            return xmlFiles;
        } catch (Exception e) {
            logger.error("{}", e);
            throw new RdosDefineException("压缩包解压失败");
        }
    }

    private static void filterXml(List<File> unzipFileList, String pathSuf, List<File> xmlFiles, Map<String, File> confMap) {
        if (unzipFileList == null) {
            throw new RdosDefineException("缺少必要配置文件");
        }
        for (File file : unzipFileList) {
            if (file.getPath().startsWith(pathSuf)) {
                if (!file.getName().startsWith(DOT)) {
                    if (file.getName().endsWith(XML_SUFFIX)) {
                        xmlFiles.add(file);
                    } else {
                        confMap.put(file.getName(), file);
                    }
                }
            }
        }
    }

    /**
     * 从sftp中下载获取已有的配置文件
     *
     * @param sourceKey         数据源的key
     * @param localKerberosConf kerberos存储的本地路径
     * @param sftpMap           sftp配置
     * @return
     * @throws SftpException
     */
    public static void downloadKerberosFromSftp(String sourceKey, String localKerberosConf, SftpConfig sftpConfig) throws SftpException {
        //需要读取配置文件
        //本地kerberos文件
        String localTimeLock = getLocalTimeLock(localKerberosConf);
        SftpFileManage sftpFileManage = SftpFileManage.getSftpManager(sftpConfig);
        try {
            String sourceSftpPath = sftpConfig.getPath() + SEPARATE + sourceKey;
            //sftp服务器kerberos文件
            String timeLock = getSftpTimeLock(sftpFileManage, sourceSftpPath, localTimeLock);

            if (localTimeLock == null || timeLock == null || !timeLock.equals(localTimeLock)) {
                //需要下载替换当时的配置
                delFile(new File(localKerberosConf));
                sftpFileManage.downloadDir(sourceSftpPath, localKerberosConf);
            }
        } catch (Exception e) {
            throw new RdosDefineException("下载kerberos配置失败");
        }
    }

    /**
     * 删除本地文件 及文件夹
     * @param file
     * @return
     */
    public static boolean delFile(File file) {
        if (!file.exists()) {
            return false;
        }

        if (file.isDirectory()) {
            File[] files = file.listFiles();
            for (File f : files) {
                delFile(f);
            }
        }
        return file.delete();
    }

    /**
     * 替换kerberosConfig中的 principalFile 参数为本地目录
     */
    public static Map<String, String> replaceFilePath(JSONObject kerberosConfig, String currentConfDir) {
        Map<String, String> finalConfMap = new HashMap<>();
        if (kerberosConfig != null && currentConfDir != null) {
            //替换 principalFile为本地
            String principalFile = (String) kerberosConfig.get("principalFile");
            if (StringUtils.isNotBlank(principalFile) && principalFile.contains(File.separator)) {
                String fileName = principalFile.substring(principalFile.lastIndexOf(File.separator) + 1);
                kerberosConfig.put("principalFile", currentConfDir + File.separator + fileName);
            }
            kerberosConfig.keySet().forEach(key -> finalConfMap.put(key, kerberosConfig.getString(key)));
        }
        return finalConfMap;
    }

    private static String getSftpTimeLock(SftpFileManage sftpFileManage, String sourceSftpPath, String localTimeLock) throws SftpException {
        // 获得远程sftp下的路径sourceSftpPath下文件列表
        Vector vector = sftpFileManage.listFile(sourceSftpPath);
        for (Object obj : vector) {
            // 判断是否有后缀名.lock的文件
            ChannelSftp.LsEntry lsEntry = (ChannelSftp.LsEntry) obj;
            if (lsEntry.getFilename().endsWith(LOCK_SUFFIX)) {
                return lsEntry.getFilename();
            }
        }
        return null;
    }

    private static String getLocalTimeLock(String localKerberosConf) {
        File localKerberosConfFile = new File(localKerberosConf);
        if (localKerberosConfFile.exists() && localKerberosConfFile.isDirectory()) {
            String[] list = localKerberosConfFile.list();
            List<String> lockList = Arrays.stream(list).filter(str -> {
                if (str.endsWith(LOCK_SUFFIX)) return true;
                else return false;
            }).collect(Collectors.toList());
            if (CollectionUtils.isNotEmpty(lockList)) {
                return lockList.get(0);
            }
        }
        return null;
    }
}
