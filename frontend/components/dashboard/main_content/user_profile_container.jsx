import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserProfile from './user_profile';
import { fetchUser } from '../../../actions/user_actions';
import { userSongs } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = state.entities.users[userId];
  const songs = userSongs(state, user);
  return { user, userId, songs };

};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile));
