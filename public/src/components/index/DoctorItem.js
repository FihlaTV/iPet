import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

class DoctorItem extends Component {
  render() {
    let {_id, doctor_name, image, type, hospital} = this.props;// eslint-disable-line no-unused-vars
    return (
        <div key={_id} className="doctorList">
          <div className="text-center col-xs-2 doctor  thumbnail">
            <a className="text-center" href="#">
              <img src={image} alt="..."/>
            </a>
            <div>{doctor_name}<br/>{type}<br/>{hospital}</div>
          </div>
        </div>

    );
  }
}

export default DoctorItem;