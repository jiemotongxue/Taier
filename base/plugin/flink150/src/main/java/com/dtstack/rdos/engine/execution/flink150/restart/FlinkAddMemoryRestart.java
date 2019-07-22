package com.dtstack.rdos.engine.execution.flink150.restart;

import com.dtstack.rdos.common.util.MathUtil;
import com.dtstack.rdos.common.util.PublicUtil;
import com.dtstack.rdos.engine.execution.base.restart.IJobRestartStrategy;
import com.dtstack.rdos.engine.execution.flink150.FlinkPerJobResourceInfo;
import com.google.common.collect.Maps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Map;

/**
 * @description:
 * @author: maqi
 * @create: 2019/07/17 17:36
 */
public class FlinkAddMemoryRestart implements IJobRestartStrategy {

    private static Logger logger = LoggerFactory.getLogger(FlinkAddMemoryRestart.class);

    private static String TASK_PARAMS_KEY = "taskParams";

    private static String SEPARATOR = "=";

    private static String RUN_MODE_KEY = "flinkTaskRunMode";

    private static String PER_JOB_MODE = "perJob";

    private static int DEFAULT_TASKMANAGER_MEMORY = 1024;


    @Override
        public String restart(String taskParams, int retryNum) {
        try {
            Map<String, Object> pluginInfoMap = PublicUtil.jsonStrToObject(taskParams, Map.class);
            String tps = String.valueOf(pluginInfoMap.getOrDefault(TASK_PARAMS_KEY, ""));
            Map<String, Object> params = splitStr(tps, SEPARATOR);
            // change run mode
            params.put(RUN_MODE_KEY, PER_JOB_MODE);

            params.put(FlinkPerJobResourceInfo.TASKMANAGER_MEMORY_MB, (retryNum + 1) * DEFAULT_TASKMANAGER_MEMORY );

            pluginInfoMap.putAll(params);

            return PublicUtil.mapToObject(pluginInfoMap, String.class);
        } catch (IOException e) {
            logger.error("", e);
        }
        return taskParams;
    }

    public Map<String, Object> splitStr(String str, String Separator) {
        Map<String, Object> res = Maps.newHashMap();

        for (String s : str.split("\n")) {
            String[] keyAndVal = str.split(Separator);
            if (keyAndVal.length > 1) {
                res.put(keyAndVal[0], keyAndVal[1]);
            }
        }

        return res;
    }

}