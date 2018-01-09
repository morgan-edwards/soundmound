import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import EditModal from './edit_modal';

const mapStateToProps = state => {
  const formType = state.ui.modals.formType;
  return { formType };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModal));
