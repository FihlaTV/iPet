import React, {Component} from "react";

class DoctorInfo extends Component {

  componentWillMount(props) {
    let doctor = this.props.doctors.find((doctor)=> {
      return doctor._id === this.props.params.doctor_id;
    });
    console.log(doctor);
    this.setState({
      doctor: doctor
    });
  }

  render() {

    return (
        <div classID="doctor_info">
          <ul>
            <label>医生信息</label>
            <li>
              <img className="doctor_img" src={'/' + this.state.doctor.image} alt="医生图片"/>
            </li>
            <li>姓名:{this.state.doctor.doctor_name}</li>
            <li>e-mail:{this.state.doctor.email}</li>
            <li>科室:{this.state.doctor.type}</li>
            <li>所在医院:{this.state.doctor.hospital}</li>
            <li>级别:{this.state.doctor.certificates}</li>
          </ul>
        </div>)
  }
}

export default DoctorInfo;