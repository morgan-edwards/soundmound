import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_SONG } from '../actions/song_actions';

const _nullSongs = Object.freeze({});

const formatSongs = (user, songsArray) => {
  if (songsArray) {
    songsArray.map(obj => obj['artist'] = user.username);
    let songsHash = songsArray.reduce((acc, song) => {
      acc[song.id] = song;
      return acc;
    }, {});
    return songsHash;
  } else {
    return {};
  }
};

const songsReducer = (state = _nullSongs, action) => {
  let songs = {};
  let newState;
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
    case RECEIVE_SONG:
      newState = merge({}, state);
      newState[action.song.id] = action.song;
      return newState;
    default:
      return state;
  }
};

export default songsReducer;
