import { connect } from 'react-redux';
import FormModal from './form_modal';
import { toggleSessionModal } from '../../actions/ui_actions';

const mapStateToProps = state => {
  return {
            modalIsOpen: state.ui.modals.modalOpen,
            modalType: state.ui.modals.formType
          };

};

const mapDispatchToProps = dispatch => {
  return {
    toggleSessionModal: () => dispatch(toggleSessionModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormModal);
