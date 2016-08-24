/**
 * Created by qiyanzi on 16-8-24.
 */
import {combineReducers} from 'redux';
import workItem from './workItem';
import workspaceItems from './workspaceItems';

const workResult = combineReducers({
  workItem,
  workspaceItems
});
export default workResult;
