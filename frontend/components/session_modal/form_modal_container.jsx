import { connect } from 'react-redux';
import FormModal from './form_modal';
import { toggleSessionModal } from '../../actions/ui_actions';

const mapStateToProps = state => {
  return {
            modalIsOpen: state.ui.modalOpen,
            modalType: state.ui.formType
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
