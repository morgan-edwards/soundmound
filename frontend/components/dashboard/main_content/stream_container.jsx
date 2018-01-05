import { connect } from 'react-redux';
import Stream from './stream';
import { fetchUser, fetchFollows } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const indexType = ownProps.indexType;
  const loggedIn = Boolean(state.session.currentUser);

  return {loggedIn, indexType};
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream);
