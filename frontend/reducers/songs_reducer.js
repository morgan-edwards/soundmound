import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

import {
  RECEIVE_USER,
} from '../actions/user_actions';

const _nullSongs = Object.freeze({});

const formatSongs = (user, songsArray) => {
  songsArray.map(obj => obj['artist'] = user.username);
  let songsHash = songsArray.reduce((acc, song) => {
    acc[song.id] = song;
    return acc;
  }, {});
  return songsHash;
};

const songsReducer = (state = _nullSongs, action) => {
  let songs;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      songs = formatSongs(action.user, action.songs);
      return merge({}, state, songs);
    case RECEIVE_CURRENT_USER:
      if (action.currentUser) {
        songs = formatSongs(action.currentUser, action.songs);
        return merge({}, state, songs);
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default songsReducer;
