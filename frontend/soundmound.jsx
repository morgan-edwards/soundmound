import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root'
import configureStore from './store/store.js';
// Testing imports
import * as SessionAPI from './util/session_api_util';
import * as UserAPI from './util/user_api_util';
import * as FollowAPI from './util/follow_api_util';
import * as FollowAction from './actions/follow_actions';
import * as UserAction from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //Testing assignments
  window.login = SessionAPI.login;
  window.logout = SessionAPI.logout;
  window.signup = SessionAPI.signup;
  window.fetchUser = UserAction.fetchUser;
  window.apiFetchUser = UserAPI.fetchUser;
  window.follow = FollowAPI.follow;
  window.unfollow = FollowAPI.unfollow;
  window.follow = FollowAction.follow;
  window.unfollow = FollowAction.unfollow;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //End of testing assignments
  ReactDOM.render(<Root store={store} />, root);
});
