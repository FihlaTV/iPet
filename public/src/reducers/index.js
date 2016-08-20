import {combineReducers} from 'redux';
import doctors from './doctors';
import doctor from './doctor';
import user_login from './login';
import messages from './messages';

const resultList = combineReducers({
  doctors,
  doctor,
  user_login,
  messages
});
export default resultList;
