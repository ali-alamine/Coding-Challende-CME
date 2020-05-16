import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header_menu from './components/Header_menu/Header_menu';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(
  <React.StrictMode>
    <Header_menu />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
