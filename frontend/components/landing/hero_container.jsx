import { connect } from 'react-redux';
import { toggleSessionModal } from '../../actions/ui_actions';
import Hero from './hero';

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.currentUser) }
);

const mapDispatchToProps = dispatch => {
  return {
    toggleSessionModal: (formType) => dispatch(toggleSessionModal(formType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero);
