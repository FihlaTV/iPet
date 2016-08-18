/**
 * Created by myc on 8/17/16.
 */
import request from 'superagent';

const doctorRequestMiddleware = store =>next =>action=> {
  switch (action.type) {
    case 'INIT':
      request.get('/api/doctors/57b2c7b9d8e1ecbf54300000')
          .end((err, res)=> {
            next({
              type: 'DOCTOR_LOADED',
              data: res.body
            });
          });
      break;
  }
  next(action);
};

export default doctorRequestMiddleware;
