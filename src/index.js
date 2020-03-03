import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';

import Main from './components/main';
import GlobalStyles from './styles/global';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Main />
    <ToastContainer autoClose={3000} />
  </>,
  document.getElementById('root')
);
