import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
// import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain='dev-7101fprh.us.auth0.com'
      clientID='4ZW45S9NAyH1a1BCQrrwENWBzwbiUNFT'
      redirectURI={window.location.origin}
    > */}
      <Router>
    	  <App />
      </Router>
    {/* </Auth0Provider> */}
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
