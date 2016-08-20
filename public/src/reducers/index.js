import {combineReducers} from 'redux';
import doctors from './doctors';
import doctor from './doctor';
import user_login from './login';

const resultList = combineReducers({
  doctors,
  doctor,
  user_login
});

export default resultList;
