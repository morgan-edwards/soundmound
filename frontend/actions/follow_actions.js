import * as FollowAPI from '../util/follow_api_util';
import { receiveUsers } from './user_actions';;

export const follow = (follower_id, followee_id) => dispatch => {
  const follow = {follower_id, followee_id};
  return (
    FollowAPI.follow(follow).then((users) => (
      dispatch(receiveUsers(users))))
  );
};

export const unfollow = (follower_id, followee_id) => dispatch => {
  const follow = {follower_id, followee_id};
  return (
    FollowAPI.unfollow(follow).then((users) => (
      dispatch(receiveUsers(users))))
  );
};
