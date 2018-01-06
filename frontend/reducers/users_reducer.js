import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import {
  RECEIVE_USER,
} from '../actions/user_actions';
import {
  RECEIVE_FOLLOW,
} from '../actions/follow_actions';
import {
  REMOVE_FOLLOW,
} from '../actions/follow_actions';


const _nullUsers = Object.freeze({});

const addFollower = (state, followerId) => {
};

const addFollowee = (state, followeeId) => {

};

const removeFollower = (state, followerId) => {

};


const removeFollowee = (sate, followeeId) => {

};

const usersReducer = (state = _nullUsers, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_CURRENT_USER:
      if (action.currentUser) {
        return merge({}, { [action.currentUser.id]: action.currentUser });
      } else {
        return state;
      }
    case RECEIVE_FOLLOW:
      newState = merge({}, state);
      newState[action.follower_id].followee_ids.push(action.followee_id);
      newState[action.followee_id].follower_ids.push(action.follower_id);
      return newState;
    case REMOVE_FOLLOW:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;
