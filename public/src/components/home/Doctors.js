import  React, {Component} from 'react';// eslint-disable-line no-unused-vars
import DoctorItem from './DoctorItem';

class Doctors extends Component {
  render() {
    let doctors = this.props.doctors;
    return (
      <div className="scrol">
          {
            doctors.map((v, k)=> (
              <DoctorItem key={k + 1} _id={v._id} doctor_name={v.doctor_name} image={v.image} type={v.type}
                            hospital={v.hospital}/>
            ))
          }
        </div>
    );
  }
}



export default Doctors;