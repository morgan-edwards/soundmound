import { connect } from 'react-redux';

import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, { location }) => {
  const loggedIn = Boolean(state.session.currentUser);
  const formType = location.pathname.slice(1);
  return { loggedIn, formType, errors: state.errors.session };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const action = (location.pathname.slice(1) === 'signup') ? signup : login;
  return {
    action: (user) => dispatch(action(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
