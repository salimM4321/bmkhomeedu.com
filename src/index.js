// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import './index.css'; // Your global styles

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Single Router wrapping the entire app */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
