import { connect } from 'react-redux';

import { signup, login } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => {
  const status = (session.currentUser) ? "logged_in" : "logged_out";
  return { currentUser: session.currentUser, status };
};

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
