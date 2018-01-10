import { connect } from 'react-redux';
import FollowButton from './follow_button';
import { follow, unfollow } from '../../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.userId;
  const followees = state.session.currentUser.followeeIds;
  const loggedIn = Boolean(state.session.currentUser);
  const currentUser = state.session.currentUser;
  return { followees,
            loggedIn,
            userId,
            currentUser,
          };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (currentUserId, userId) => dispatch(follow(currentUserId, userId)),
    unfollow: (currentUserId, userId) => dispatch(unfollow(currentUserId, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
