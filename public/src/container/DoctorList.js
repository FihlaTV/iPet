import { connect } from 'react-redux';
import Doctors from '../components/index/Doctors';

const mapStateToProps = (state)=> (state);

const DoctorList = connect(mapStateToProps)(Doctors);

export default DoctorList;
