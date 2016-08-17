/**
 * Created by myc on 8/17/16.
 */
import { connect } from 'react-redux';
import Doctor from '../components/user_board/DoctorInfo';

const mapStateToProps = (state)=> (state);

const DoctorInfo = connect(mapStateToProps)(Doctor);

export default DoctorInfo;