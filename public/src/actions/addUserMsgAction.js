/**
 * Created by zhangyiru on 16-8-16.
 */
export const addUserMsg = (text)=>({
  type: 'ADD_USER_MSG',
  data: {
    isQuestion: true,
    msg: text
  }
});