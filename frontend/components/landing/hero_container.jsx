import { connect } from 'react-redux';
import { toggleSessionModal } from '../../actions/ui_actions';
import Hero from './hero';

const mapDispatchToProps = dispatch => {
  return {
    toggleSessionModal: (formType) => dispatch(toggleSessionModal(formType))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Hero);
