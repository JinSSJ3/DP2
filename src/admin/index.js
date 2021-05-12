import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


// boostrap

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import "react-datepicker/dist/react-datepicker.css";
import './assets/css/fontawesome.min.css';
import './assets/css/feathericon.min.css';
import './assets/js/script.js';
//style

import {$,jQuery} from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

