/**
 * Created by zhangyiru on 16-8-17.
 */
import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

import AddUserMsg from '../../container/AddUserMsg';
import Head from '../Head';
import Foot from '../Foot';

class UserMsgBoardApp extends Component {
  render() {
    return (
        <div>
          <Head/>
          <div className="mainer">
            <AddUserMsg/>
          </div>
          <Foot/>
        </div>
    );
  }
}

export default UserMsgBoardApp;
