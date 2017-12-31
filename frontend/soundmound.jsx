import React from 'react';
import ReactDOM from 'react-dom';
// Testing imports
import * as API from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  //Testing assignments
  window.login = API.login;
  window.logout = API.logout;
  window.signup = API.signup;
  window.testboy = {username: 'testboy', password: 'testboy'};
  //End of testing assignments
  ReactDOM.render(<h1>Soundmound</h1>, root);
});
