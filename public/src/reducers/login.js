const user_login = (state = {}, action)=> {
  switch (action.type) {
  case 'LOGIN_RESULT':
    return {statusCode: action.statusCode};
  }
  return state;
};
export default user_login;