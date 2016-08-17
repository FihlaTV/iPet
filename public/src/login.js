import React, {Component} from 'react';
import {render} from 'react-dom';
import Head from './components/index_components/index_head';
import Content from './components/index_components/index_content';

render (
    <div>
      <Head />
      <Content />
    </div>,
      document.getElementById('app')
);
