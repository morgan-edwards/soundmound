import * as UserAPI from '../util/user_api_util'

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUser = userId => dispatch => {
  return (
    UserAPI.fetchUser(userId).then((user) => (
      dispatch(receiveUser(user))), err => (
        dispatch(receiveSongErrors(err.responseJSON))
    ))
  );
};
