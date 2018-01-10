import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_USER,
        RECEIVE_USERS,
        formatUserSongs } from '../actions/user_actions';

import { RECEIVE_SONG } from '../actions/song_actions';

const _nullSongs = Object.freeze({});

const songsReducer = (state = _nullSongs, action) => {
  let songs = {};
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.songs);
    case RECEIVE_USERS:
      return merge({}, state, action.songs);
    case RECEIVE_CURRENT_USER:
      if (action.currentUser) {
        songs = formatUserSongs(action.currentUser, action.songs);
        return merge({}, state, songs);
      } else {
        return state;
      }
    case RECEIVE_SONG:
      newState = merge({}, state);
      if (action.song) {
        newState[action.song.id] = action.song;
      }
      return newState;
    default:
      return state;
  }
};

export default songsReducer;
