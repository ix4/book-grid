import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import * as d3 from 'd3';

d3.csv('./books.csv').then(bookList => {
  ReactDOM.render(
    <App bookList={bookList} />,
    document.getElementById('root')
  );
});
