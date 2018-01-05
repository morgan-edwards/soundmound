import * as UserAPI from '../util/user_api_util'

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    user: payload.user,
    songs: payload.songs
  };
};

export const receiveUsers = payload => {
  return {
    type: RECEIVE_USERS,
    users: payload.users,
    songs: payload.songs
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

export const fetchFollows = followerId => dispatch => {
  return (
    UserAPI.fetchFollows(followerId).then((payload) => (
      dispatch(receiveUsers(payload))), err => (
        dispatch(receiveUserErrors(err.responseJSON))
    ))
  );
};
