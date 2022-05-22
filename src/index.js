import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tw-elements';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const logo = require('./images/logo.png');
export const banner1 = require('./images/banner1.jpg');
export const banner2 = require('./images/banner2.jpg');
export const retails = require('./images/icons/retail.png');
export const factory = require('./images/icons/factorySpace.png');
export const units = require('./images/icons/units.png');
export const workers = require('./images/icons/workers.png');
export const whatsapp = require('./images/icons/whatsapp.png');
export const phone = require('./images/icons/phone.jpg');
