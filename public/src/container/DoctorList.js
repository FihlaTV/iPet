import { connect } from 'react-redux';
import Doctors from '../components/home/Doctors';
import { doctorInit } from '../actions/doctorInit';

const mapStateToProps = (state)=> (state);

const mapDispatchToProps = (dispacth) => ({
  doctorInit: (doctor_id) => {
    dispacth(doctorInit(doctor_id));
  }
});

const DoctorList = connect(mapStateToProps, mapDispatchToProps)(Doctors);

export default DoctorList;
