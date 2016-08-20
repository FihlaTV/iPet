import request from 'superagent';
const userLoginMiddleware = store=>next=>action=> {
  switch (action.type) {
    case 'LOGIN':
      request.post('/api/login')
          .type('form')
          .send({ username: action.data.username,
                password: action.data.password})
          .end((err, res)=> {
            next({
              type: 'LOGIN_RESULT',
              statusCode: res.statusCode
            });
        });
    break;
  }
  next(action);
};
export default userLoginMiddleware;