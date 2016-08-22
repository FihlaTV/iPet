/**
 * Created by sun on 8/21/16.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import DoctorInfo from '../../container/Doctor';
import UserMsgBoard from '../../container/AddUserMsg';
import Head from '../Head';
import Foot from '../Foot';

class UserBoard extends Component {

  render() {
    return (
        <div>
          <Head/>
          <div>
            <DoctorInfo doctor_id={this.props.params.doctor_id}/>
            <UserMsgBoard/>
          </div>
          <Foot/>
        </div>
    );
  }
}

export default UserBoard;