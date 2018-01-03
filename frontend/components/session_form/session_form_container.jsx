import { connect } from 'react-redux';

import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Boolean(state.session.currentUser);
  const formType = ownProps.formType;
  return { loggedIn, formType, errors: state.errors.session };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.formType === 'signup') ? signup : login;
  return {
    action: (user) => dispatch(action(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
