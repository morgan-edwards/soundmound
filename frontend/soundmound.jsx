import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root'
import configureStore from './store/store.js';
// Testing imports
import * as API from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  //Testing assignments
  window.login = API.login;
  window.logout = API.logout;
  window.signup = API.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.testboy = {username: 'testboy', password: 'testboy'};
  //End of testing assignments
  ReactDOM.render(<Root store={store} />, root);
});
