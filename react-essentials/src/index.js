import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom"
ReactDOM.render(
  <Router> // gives the app access to the properties of the router (location...history)
    <App />
  </Router>,
  document.getElementById('root')
);
