import merge from 'lodash/merge';
const moment = require('moment');

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_USER,
        RECEIVE_USERS,
        formatUserSongs } from '../actions/user_actions';

import { RECEIVE_SONG,
          REMOVE_SONG,
          RECEIVE_SONGS
        } from '../actions/song_actions';

const formatSongs = (songsArray) => {
  songsArray.map(song => (
    Object.assign(song, { fromNow: moment(song.createdAt).fromNow() }
  )));
  let songsHash = songsArray.reduce((acc, song) => {
    acc[song.id] = song;
    return acc;
  }, {});
    return songsHash;
};

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
    case RECEIVE_SONGS:
      newState = merge({}, state);
      if (action.songs) {
        newState = merge(newState, formatSongs(action.songs));
      }
      return newState;
    case REMOVE_SONG:
      newState = merge({}, state);
      delete newState[action.song.id];
      return newState;
    default:
      return state;
  }
};

export default songsReducer;
