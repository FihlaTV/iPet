/**
 * Created by qiyanzi on 16-8-22.
 */
import request from 'superagent';
const workMiddleware = store=>next=>action=> {// eslint-disable-line no-unused-vars

  switch (action.type) {
    case 'WORK_INIT':
      request
          .get('/api/messages/load_work')
          .query({
            doctorId : '57b2c7b9d8e1ecbf54300000'
          })
          .end((err,res)=>{
            store.dispatch({
              type:'LOAD_WORK',
              data:res.body
            });
          });
      break;
  }
  next(action);
};
export default workMiddleware;