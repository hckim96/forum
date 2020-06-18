import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';


import * as serviceWorker from './serviceWorker';




// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
// import history from "./utils/history";
import {browserHistory as history} from 'react-router';

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};


ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}

  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();