import React, {Component} from 'react';  // eslint-disable-line no-unused-vars

class DoctorInfo extends Component {

  componentWillMount() {
    this.props.doctorInit(this.props.params.doctor_id);
  }

  render() {
    return (
        <div classID='doctor_info'>
          <ul>
            <label>医生信息</label>
            <li>
              <img className='doctor_img' src={'/' + this.props.doctor.image} alt='医生图片'/>
            </li>
            <li>姓名:{this.props.doctor.doctor_name}</li>
            <li>e-mail:{this.props.doctor.email}</li>
            <li>科室:{this.props.doctor.type}</li>
            <li>所在医院:{this.props.doctor.hospital}</li>
            <li>级别:{this.props.doctor.certificates}</li>
          </ul>
        </div>);
  }
}

export default DoctorInfo;