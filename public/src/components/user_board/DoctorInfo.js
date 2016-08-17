import React, {Component} from "react";

class DoctorInfo extends Component {
  render() {
    console.log(this.props);
    let {doctor_name, image, email, type, hospital, certificates}=this.props.doctor;

    return (
        <div classID="doctor_info">
          <ul>
            <label>医生信息</label>
            <li>
              <img className="doctor_img" src={image} alt="医生图片"/>
            </li>
            <li>姓名:{doctor_name}</li>
            <li>e-mail:{email}</li>
            <li>科室:{type}</li>
            <li>所在医院:{hospital}</li>
            <li>级别:{certificates}</li>
          </ul>
        </div>)
  }
}

export default DoctorInfo;