import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

import {
  RECEIVE_USER,
  RECEIVE_USERS
} from '../actions/user_actions';

const _nullUser = Object.freeze({});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  debugger
  let currentUser;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;
      return merge({}, { currentUser });
    case RECEIVE_USER:
      if (currentUser && state.currentUser.id === action.user.id) {
        currentUser = action.user;
        return merge({}, { currentUser });
      } else {
        return state;
      }
    case RECEIVE_USERS:
      if (action.users[state.currentUser.id]) {
        currentUser = action.users[state.currentUser.id];
        return merge({}, { currentUser });
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default sessionReducer;
