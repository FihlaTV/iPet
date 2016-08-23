/**
 * Created by qiyanzi on 16-8-22.
 */
const workspceItems = (state = {}, action)=> {
  switch (action.type) {
    case 'LOAD_WORK':
       return {data : action.data};

  }
  return state;
};

export default workspceItems;