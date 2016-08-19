import request from 'superagent';
const userLoginMiddleware = store=>next=>action=>{  // eslint-disable-line no-unused-vars
  switch (action.type){
  case 'INIT':
    request.get('/api/doctors')
        .end((err, res)=> {
          next({
            type: 'SUCCESS',
            data: res.body
          });
        });
    break;
  }
  next(action);
};
export default userLoginMiddleware;