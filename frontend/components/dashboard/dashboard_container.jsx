import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state, ownProps) => {
  const content = ownProps.location.pathname.slice(1);
  const loggedIn = Boolean(state.session.currentUser);
  return { loggedIn,
            content,
            modalOpen: state.ui.modals.modalOpen,
          };
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
