import { connect } from 'react-redux';
import Stream from './stream';
import { fetchUser, fetchFollows } from '../../../actions/user_actions';

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  return {currentUser};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream);
