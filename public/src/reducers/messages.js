/**
 * Created by zhangyiru on 16-8-16.
 */
const messages = (state = [], action)=> {
  switch (action.type) {
  case 'USER_MSG_LOADED':
    return action.data;
  case 'SHOW_MSG':
    return action.data.data;
  }
  return state;
};

export default messages;