import {combineReducers} from 'redux';
import doctors from './doctors';
import doctor from './doctor';
import messages from './messages';

const resultList = combineReducers({
  doctors,
  doctor,
  messages

});
export default resultList;
