import {combineReducers} from 'redux';
import doctors from './doctors';
// import doctor from './doctor';
import messages from './messages';

const resultList = combineReducers({
  doctors,
  messages
  // doctor
}
const resultList = combineReducers({
  doctors
});

export default resultList;
