import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mapStateToProps = state => {
  const loggedIn = Boolean(state.session.currentUser);
  return { loggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
