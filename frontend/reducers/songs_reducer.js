import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

import {
  RECEIVE_USER,
} from '../actions/user_actions';


const _nullSongs = Object.freeze({});

const songsReducer = (state = _nullSongs, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.songs);
    case RECEIVE_CURRENT_USER:
      if (action.currentUser) {
        return merge({}, state, action.songs);
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default songsReducer;
