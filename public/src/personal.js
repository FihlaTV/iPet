/**
 * Created by myc on 8/18/16.
 */
import React, {Component} from "react";
import {render} from "react-dom";
import User from "./container/User";
import user from "./reducers/user";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import userInfoMiddleware from "./middlewares/userInfoMiddleware";

const store = createStore(
    user,
    applyMiddleware(userInfoMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <User/>
    </Provider>,
    document.getElementById('app')
);