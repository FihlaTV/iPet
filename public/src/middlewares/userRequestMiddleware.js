/**
 * Created by zhangyiru on 16-8-17.
 */
/**
 * Created by zhangyiru on 16-8-16.
 */

import request from 'superagent';

const userRequestMiddleware = store => next => action=> { // eslint-disable-line no-unused-vars

  switch (action.type) {
    case 'ADD_USER_MSG':
      request.put('/api/messages')
          .type('form')
          .query({id: '57b56c9319320bac4c28e5cc'})
          .send(action.data)
          .end((err, res)=> {
            next({
              type: 'SHOW_MSG',
              data: res.body
            });
          });
      break;
    case 'INIT':
      request.get('/api/messages')
          .end((err, res)=> {
            next({
              type: 'USER_MSG_LOADED',
              data: res.body
            });
          });
      break;
  }
  next(action);
};

export default  userRequestMiddleware;
