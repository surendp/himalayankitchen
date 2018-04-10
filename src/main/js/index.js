/*
* Render the App to the root id
* Add router functionality
* Add scroll to top functionality to the application
*/

// global components
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// local components
import App from './App.jsx';
import ScrollToTop from './scrollToTop.jsx';

// css styling
import './css/root.css';

// render the app
ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
  , document.getElementById('root'));
