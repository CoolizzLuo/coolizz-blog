import React from 'react'
import ReactDOM from 'react-dom'
import { Global, css } from '@emotion/react'
import GlobalStyle from './styles/GlobalStyle'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <Global styles={css`${GlobalStyle}`} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  , document.getElementById('root'));
