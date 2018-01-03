import { connect } from 'react-redux';
import FormModal from './form_modal';

const mapStateToProps = (state, ownProps) => {
  return {modalIsOpen: state.session.modalOpen, modalType: ownProps.formType};
};

export default connect(
  mapStateToProps,
  null
)(FormModal);
