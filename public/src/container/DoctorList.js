import { connect } from 'react-redux';
import Doctors from '../components/home/Doctors';

const mapStateToProps = (state)=> (state);

const mapDispatchToProps = (dispacth) => ({
  doctorInit: (doctor_id) => {
    dispacth(doctorInit(doctor_id));
  }
});

const DoctorList = connect(mapStateToProps, mapDispatchToProps)(Doctors);

export default DoctorList;
