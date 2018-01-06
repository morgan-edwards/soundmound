import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

import {
  RECEIVE_USER,
} from '../actions/user_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let currentUser;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;
      return merge({}, { currentUser });
    case RECEIVE_USER:
      if (state.currentUser.id === action.user.id) {
        currentUser = action.user;
        return merge({}, { currentUser });
      }
      break;
    default:
      return state;
  }
};

export default sessionReducer;
