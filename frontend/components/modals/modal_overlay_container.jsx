import { connect } from 'react-redux';
import ModalOverlay from './modal_overlay';
import { toggleSessionModal } from '../../actions/ui_actions';

const mapStateToProps = state => {
  return {
            modalIsOpen: state.ui.modals.modalOpen,
            modalType: state.ui.modals.formType
          };

};

const mapDispatchToProps = dispatch => {
  return {
    toggleSessionModal: (formType) => dispatch(toggleSessionModal(formType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalOverlay);
