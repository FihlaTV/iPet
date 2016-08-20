import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import {Link} from 'react-router';

class DoctorItem extends Component {

  render() {
    let {_id, doctor_name, image, type, hospital} = this.props;// eslint-disable-line no-unused-vars
    return (
        <div key={_id} className="doctorList">
          <div className='text-center col-xs-2 doctor  thumbnail'>
            <Link className='text-center' to={`user_board/${this.props._id}`} >
              <img src={image} alt='医生照片'/>
            </Link>
            <div>{doctor_name}<br/>{type}<br/>{hospital}</div>
          </div>
        </div>

    );
  }
}

export default DoctorItem;