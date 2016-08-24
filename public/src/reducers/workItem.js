/**
 * Created by qiyanzi on 16-8-22.
 */
const workItem = (state = {}, action)=> {
  switch (action.type) {
  case 'LOAD_WORK_MSG':
    return {
      id:action.data._id,
      talk:action.data.talk
    };

  }
  return state;
};

export default workItem;