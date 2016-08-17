import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import Head from './components/index_components/index_head';
import Content from './components/index_components/index_content';
render(
    <div>
      <Head />
      <Content />
    </div>,
    document.getElementById('app')
);
