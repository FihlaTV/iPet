/**
 * Created by qiyanzi on 16-8-22.
 */
const workspceItems = (state = {}, action)=> {
  switch (action.type) {
    case 'LOAD_WORK':
      console.log(action.data[0]);
       return {data : action.data};
      /*return {
        test: action.data[0]
      };*/
  }
  return state;
};

export default workspceItems;