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
export const Google = require('./images/icons/google.png');
export const facebook = require('./images/icons/facebook.png');
export const google1 = require('./images/icons/google.png');
export const youtube = require('./images/icons/youtube.png');
export const deleteBtn = require('./images/icons/delete.png');
export const rightArrow = require('./images/icons/chevron.png');
export const downArrow = require('./images/icons/down-arrow.png');
export const portfolio = require('./images/user.jpg');
export const projectI1 = require('./images/projects/Project-I-1.png');
export const projectI2 = require('./images/projects/Project-I-2.png');
export const projectI3 = require('./images/projects/Project-I-3.png');
export const projectII1 = require('./images/projects/Project-II-1.png');
export const projectII2 = require('./images/projects/Project-II-2.png');
export const projectII3 = require('./images/projects/Project-II-3.png');
export const projectIII1 = require('./images/projects/Project-III-1.png');
export const projectIII2 = require('./images/projects/Project-III-2.png');
export const projectIII3 = require('./images/projects/Project-III-3.png');
