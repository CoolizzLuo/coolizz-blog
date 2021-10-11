import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react'
import GlobalStyle from './styles/GlobalStyle'
import App from './components/App';


ReactDOM.render(
  <React.StrictMode>
    <Global styles={css`${GlobalStyle}`} />
    <App />
  </React.StrictMode>
  , document.getElementById('root'));
