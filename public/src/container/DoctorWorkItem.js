/**
 * Created by ritter on 16-8-23.
 */
import {connect} from 'react-redux';
import WorkItem from '../components/workspace/WorkItem';
import {addDoctorMsg} from '../actions/addDoctorMsgAction';
import {workMsgInit} from '../actions/';

const mapStateToProps = (state)=> ( state);

const mapDispatchToProps = (dispatch)=>({
  addDoctorMsg:(text, msg_id)=> {
    dispatch(addDoctorMsg(text, msg_id));
  },
  workMsgInit:(msg_id)=>{
    dispatch(workMsgInit(msg_id));
  }
});

const DoctorWorkItem = connect(mapStateToProps,mapDispatchToProps)(WorkItem);
export default DoctorWorkItem;
