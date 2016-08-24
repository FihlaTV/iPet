import React, {Component} from 'react';   // eslint-disable-line no-unused-vars
import {render} from 'react-dom';   // eslint-disable-line no-unused-vars
import DoctorWorkspace from './components/workspace/DctorWorkspace';
// import workspaceItems from './reducers/workspaceItems';
import work_index from './reducers/work_index';
import createLogger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import workMiddleware from './middlewares/workMiddleware';

const store = createStore(
    work_index,
    applyMiddleware(createLogger(), workMiddleware)
);

render(
    <Provider store={store}>
      <DoctorWorkspace/>
    </Provider>,
    document.getElementById('app')
);