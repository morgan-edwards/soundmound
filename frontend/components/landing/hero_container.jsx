import { connect } from 'react-redux';
import { toggleSessionModal } from '../../actions/ui_actions';
import Hero from './hero';

const mapDispatchToProps = dispatch => {
  return {
    toggleSessionModal: () => dispatch(toggleSessionModal())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Hero);
