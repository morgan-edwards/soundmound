import * as UserAPI from '../util/user_api_util';
import { merge } from 'lodash';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const formatUserSongs = (user, songsArray) => {
  if (songsArray) {
    songsArray.map(song => Object.assign(song, { artist: user.username }));
    let songsHash = songsArray.reduce((acc, song) => {
      acc[song.id] = song;
      return acc;
    }, {});
    return songsHash;
  } else {
    return {};
  }
};

export const receiveUser = payload => {
  const user = payload.user;
  const songs = formatUserSongs(user, payload.songs);
  return {
    type: RECEIVE_USER,
    user,
    songs
  };
};


export const receiveUsers = payload => {
  let users = {};
  let songs = {};

  payload.forEach((userAndSongs) => {
    const user = userAndSongs.user;
    users[user.id] = user;
    songs = merge({}, songs, formatUserSongs(user, userAndSongs.songs));
    }
  );

  return {
    type: RECEIVE_USERS,
    users,
    songs
  };
};

export const receiveUserErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

export const fetchUser = userId => dispatch => {
  return (
    UserAPI.fetchUser(userId).then((payload) => (
      dispatch(receiveUser(payload))), err => (
        dispatch(receiveUserErrors(err.responseJSON))
    ))
  );
};

export const fetchFollowees = followerId => dispatch => {
  return (
    UserAPI.fetchFollowees(followerId).then((payload) => (
      dispatch(receiveUsers(payload))), err => (
        dispatch(receiveUserErrors(err.responseJSON))
    ))
  );
};
