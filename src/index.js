import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main';
import GlobalStyles from './styles/global';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Main />
  </>,
  document.getElementById('root')
);
