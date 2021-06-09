import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import './main.css'

ReactDOM.render(
  <StrictMode>    
    <App />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
reportWebVitals();