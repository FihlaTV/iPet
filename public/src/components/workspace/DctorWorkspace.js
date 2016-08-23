/**
 * Created by zhangyiru on 16-8-17.
 */
import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import DoctorWorkspace from '../../container/DoctorWorkspace';

class DoctorWorkspaceApp extends Component {
  render() {
    return (
        <div>
          <div className="userMsg">
            <DoctorWorkspace/>
          </div>
        </div>
    );
  }
}

export default DoctorWorkspaceApp;
