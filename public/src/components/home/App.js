import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import DoctorList from '../../container/DoctorList';
import Head from '../Head';
import Foot from '../Foot';

class App extends Component {
  render() {
    return (
        <div>
          <Head/>
          <div className="row mainer">
            <div className="doctor_head">
              <h3 className="text-center">Doctor List</h3>
            </div>
            <DoctorList/>
          </div>
          <Foot/>
        </div>
    );
  }
}

export default App;
