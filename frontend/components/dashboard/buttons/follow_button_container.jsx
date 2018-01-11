import { connect } from 'react-redux';
import FollowButton from './follow_button';
import { follow, unfollow } from '../../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.userId;
  const currentUser = state.session.currentUser;
  const followees = (currentUser) ? state.session.currentUser.followeeIds : [];
  return { followees,
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
