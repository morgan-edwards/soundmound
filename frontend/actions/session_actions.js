import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = payload => {
  if (payload) {
    return {
      type: RECEIVE_CURRENT_USER,
      currentUser: payload.user,
      songs: payload.songs
    };
  } else {
    return {
      type: RECEIVE_CURRENT_USER,
      currentUser: payload
    };
  }
};

export const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const signup = user => dispatch => {
  return (
    SessionAPI.signup(user).then(payload => (
      dispatch(receiveCurrentUser(payload))), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
  );
};

export const login = user => dispatch => {
  return (
    SessionAPI.login(user).then(payload => (
      dispatch(receiveCurrentUser(payload))), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
  );
};


export const logout = () => dispatch => {
  return (
    SessionAPI.logout().then(() => (
      dispatch(receiveCurrentUser(null))), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
  );
};
