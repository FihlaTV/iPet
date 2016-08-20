import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import Head from './components/index_components/index_head';
import Content from './components/index_components/index_content';
import userLoginMiddleware from './middlewares/userLoginMiddleware';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import user_login from './reducers/index';
import LoginView from './container/login';

const store = createStore(
    user_login,
    applyMiddleware(userLoginMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <div>
        <Head />
        <LoginView />
        {/*<Content />*/}
      </div>
    </Provider>,
document.getElementById('app')
)
;
