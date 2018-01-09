import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup, login, logout } from '../../../actions/session_actions';
import { fetchUser } from '../../../actions/user_actions';
import { toggleModal } from '../../../actions/ui_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => {
  const status = (session.currentUser) ? "logged_in" : "logged_out";
  return { currentUser: session.currentUser, status };
};

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  toggleModal: (formType) => dispatch(toggleModal(formType)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));
