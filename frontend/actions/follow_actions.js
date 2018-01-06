import * as FollowAPI from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveFollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  };
};

export const removeFollow = follow => {
  return {
    type: REMOVE_FOLLOW,
    follow
  };
};

export const follow = (follower_id, followee_id) => dispatch => {
  const follow = {follower_id, followee_id};
  return (
    FollowAPI.follow(follow).then(() => (
      dispatch(receiveFollow(follow))))
  );
};

export const unfollow = (follower_id, followee_id) => dispatch => {
  const follow = {follower_id, followee_id};
  return (
    FollowAPI.unfollow(follow).then(() => (
      dispatch(removeFollow(follow))))
  );
};
