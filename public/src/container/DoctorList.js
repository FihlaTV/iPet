import { connect } from 'react-redux';
import Doctors from '../components/home/Doctors';
import { doctorInit } from '../actions/doctorInit';

const mapStateToProps = (state)=> (state);

const DoctorList = connect(mapStateToProps)(Doctors);

export default DoctorList;
