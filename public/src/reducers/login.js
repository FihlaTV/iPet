const user_login = (state = {}, action)=> {
  switch (action.type) {
  case 'LOGIN_RESULT':
    return {loginSuccess: action.statusCode === 200 ? true : false};
  }
  return state;
};
export default user_login;