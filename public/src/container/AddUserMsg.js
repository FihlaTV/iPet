import {connect} from 'react-redux';
import UserMessageBoard from '../components/user_board/UserMessageBoard';
import {addUserMsg} from '../actions/addUserMsgAction';

const mapStateToProps = (state)=>(state);
const mapDispatchToProps = (dispatch)=>({
  addUserMsg: (text)=> {
    dispatch(addUserMsg(text));
  }
});

const AddUserMsg = connect(mapStateToProps, mapDispatchToProps)(UserMessageBoard);

export default AddUserMsg;

