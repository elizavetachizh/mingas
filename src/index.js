import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import GlobalStyle, { FontStyles } from "./components/header/styles";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle/>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
