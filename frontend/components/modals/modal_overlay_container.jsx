import { connect } from 'react-redux';
import ModalOverlay from './modal_overlay';
import { toggleModal } from '../../actions/ui_actions';

const mapStateToProps = state => {
  return {
            modalIsOpen: state.ui.modals.modalOpen,
            modalType: state.ui.modals.formType
          };

};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: (formType) => dispatch(toggleModal(formType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalOverlay);
