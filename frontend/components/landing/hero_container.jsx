import { connect } from 'react-redux';
import { toggleSessionModal } from '../../actions/ui_actions';
import { login } from '../../actions/session_actions';
import Hero from './hero';

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.currentUser) }
);

const mapDispatchToProps = dispatch => {
  return {
    toggleSessionModal: (formType) => dispatch(toggleSessionModal(formType)),
    login: (user) => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero);
