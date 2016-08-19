/**
 * Created by ritter on 16-8-18.
 */
import {Router, Route, browserHistory} from 'react-router';
import React from 'react';  // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import createLogger from 'redux-logger';//打印日志

import App from './components/home/App';
import DoctorInfo from './container/Doctor';
import doctorList from './reducers';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import doctorsRequestMiddleware from './middlewares/doctorsRequestMiddleware';
import doctorRequestMiddleware from './middlewares/doctorRequestMiddleware';

const store = createStore(
    doctorList,
    applyMiddleware(createLogger(), doctorsRequestMiddleware, doctorRequestMiddleware)
);

store.dispatch({
  type: 'DOCTORS_INIT'
});

render(
    <Provider store={store}>

      <Router history={browserHistory}>

        <Route path='/home' component={App}/>
        <Route path='/user_board/:doctor_id' component={DoctorInfo}/>

      </Router>

    </Provider>,
    document.getElementById('app')
);
