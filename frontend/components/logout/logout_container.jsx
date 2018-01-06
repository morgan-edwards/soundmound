import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Logout from './logout';

const mapStateToProps = state => {
  return {
    logged_in: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
