/**
 * Created by hxc on 16-8-22.
 */
const switchLoginAndSignIn = (state = false, action)=> {
  switch (action.type) {
  case 'SHOW_LOGIN_BOARD':
    return action.text === 'login' ? false : true;
  }
  return state;
};

export default switchLoginAndSignIn;