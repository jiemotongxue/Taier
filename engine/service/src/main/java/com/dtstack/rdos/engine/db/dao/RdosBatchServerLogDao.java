package com.dtstack.rdos.engine.db.dao;

import com.dtstack.rdos.engine.db.callback.MybatisSessionCallback;
import com.dtstack.rdos.engine.db.callback.MybatisSessionCallbackMethod;
import com.dtstack.rdos.engine.db.mapper.RdosBatchServerLogMapper;
import org.apache.ibatis.session.SqlSession;

/**
 * Reason:
 * Date: 2017/3/7
 * Company: www.dtstack.com
 * @ahthor xuchao
 */

public class RdosBatchServerLogDao {

    public void insertLog(final String taskId, final String engineTaskId, final Long actionLogId, final String logInfo){

        MybatisSessionCallbackMethod.doCallback(new MybatisSessionCallback(){

            @Override
            public Object execute(SqlSession sqlSession) throws Exception {
                RdosBatchServerLogMapper mapper = sqlSession.getMapper(RdosBatchServerLogMapper.class);
                mapper.insertSvrLog(taskId, engineTaskId, actionLogId, logInfo);
                return null;
            }
        });
    }
}
