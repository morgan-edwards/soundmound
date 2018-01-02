import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Logout from './logout';

const mapStateToProps = (state, { location }) => {
  const loggedIn = Boolean(state.session.currentUser);
  const formType = location.pathname.slice(1);
  return { loggedIn, formType, errors: state.errors.session };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: (user) => dispatch(logout(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
