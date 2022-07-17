import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
//first run "npm i react-router-dom" for BrowserRouter
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //Wrap the whole WebApp with BrowserRouter
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// * import reportWebVitals from './reportWebVitals';
// * and call it with:
// * reportWebVitals();