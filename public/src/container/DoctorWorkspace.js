/**
 * Created by ritter on 16-8-23.
 */
import {connect} from 'react-redux';
import WorkList from '../components/workspace/WorkList';
import {workInit} from '../actions/workInit';

const mapStateToProps = (state)=> ( state);

const mapDispatchToProps = (dispatch)=>({
  workInit: ()=> {
    dispatch(workInit());
  }
});

const DoctorWorkspace = connect(mapStateToProps,mapDispatchToProps)(WorkList);
export default DoctorWorkspace;
