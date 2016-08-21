import {connect} from 'react-redux';
import UserMessageBoard from '../components/user_board/UserMessageBoard';
import {addUserMsg} from '../actions/addUserMsgAction';
import {messageInit} from '../actions/messageInit';

const mapStateToProps = (state)=>(state);
const mapDispatchToProps = (dispatch)=>({
  addUserMsg: (text,msg_id)=> {
    dispatch(addUserMsg(text,msg_id));
  },
  messageInit:(userId,doctorId)=>{
    dispatch(messageInit(userId,doctorId));
  }
});

const AddUserMsg = connect(mapStateToProps, mapDispatchToProps)(UserMessageBoard);

export default AddUserMsg;

