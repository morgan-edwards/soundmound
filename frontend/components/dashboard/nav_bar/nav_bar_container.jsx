import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup, login, logout } from '../../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => {
  const status = (session.currentUser) ? "logged_in" : "logged_out";
  return { currentUser: session.currentUser, status };
};

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));
