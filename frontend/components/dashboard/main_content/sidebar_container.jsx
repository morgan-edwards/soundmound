import { connect } from 'react-redux';
import { mapUsers } from '../../../reducers/selectors';
import Sidebar from './sidebar';

const mapStateToProps = (state, ownProps) => {
  const user = ownProps.user;
  const followeeIds = ownProps.user.followeeIds;
  const followerIds = ownProps.user.followerIds;
  const followers = mapUsers(state, followerIds);
  const followees = mapUsers(state, followeeIds);
  return { user, followers, followees };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
