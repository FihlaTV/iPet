/**
 * Created by hxc on 16-8-23.
 */
const user_sign_in = (state = '', action)=> {
  switch (action.type) {
    case 'SIGN_IN_RESULT':
      /*console.log('+++++++++++++++++++++');
      console.log(action.isSuccess);*/
      return action.isSuccess;
    case 'CLEAR_STATUS':
      console.log(action.type);
      return 'loading';
  }
  return state;
};
export default user_sign_in;
