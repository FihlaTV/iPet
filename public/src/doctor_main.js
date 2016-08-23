import React, {Component} from 'react';   // eslint-disable-line no-unused-vars
import {render} from 'react-dom';   // eslint-disable-line no-unused-vars
import DoctorWorkspace from './container/DoctorWorkspace';
import workspaceItems from './reducers/workspaceItems';
import createLogger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import workMiddleware from './middlewares/workMiddleware';

const store = createStore(
    workspaceItems,
    applyMiddleware(createLogger(),workMiddleware)
);

// store.dispatch({
//   type: 'WORK_INIT'
// });

render(
    <Provider store={store}>
      <DoctorWorkspace/>
    </Provider>,
    document.getElementById('app')
);