//https://medium.com/wasd/%EA%B8%B0%EC%B4%88%EB%B6%80%ED%84%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-react-js-1531b18f7bb2

import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import Example from './blog_example'
import Navbar from './components/navbar'
/*
ReactDOM.render(
  <React.StrictMode>
    <App message="Hello Message" />
  </React.StrictMode>,document.getElementById('root'),
);

ReactDOM.render(
  <Example />, document.getElementById('example')
)

 */
ReactDOM.render(
  <Navbar />, document.getElementById('root')
)