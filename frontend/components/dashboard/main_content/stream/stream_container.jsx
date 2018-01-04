import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Main from './main';

const mapStateToProps = (state, ownProps) => {
  return {currentUser: state.currentUser};
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
