import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Boolean(state.session.currentUser);
  const formType = ownProps.formType;
  const animation = ownProps.props.animation;
  const closeModal = ownProps.props.closeModal;
  return { loggedIn,
            formType,
            animation,
            closeModal,
            errors: state.errors.session };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.formType === 'signup') ? signup : login;
  return {
    action: (user) => dispatch(action(user)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
