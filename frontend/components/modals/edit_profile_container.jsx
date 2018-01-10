import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import EditProfile from './edit_profile';
import { updateUser } from '../../actions/user_actions';
import { toggleModal } from '../../actions/ui_actions';
const mapStateToProps = (state, ownProps) => {
  const formType = state.ui.modals.formType;
  const errors = state.errors.songs;
  const currentUser = state.session.currentUser;
  const animation = ownProps.props.animation;
  const closeModal = ownProps.props.closeModal;
  return { formType,
            errors,
            currentUser,
            animation,
            closeModal,
          };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (formData) => dispatch(updateUser(formData)),
    toggleModal: (formType) => dispatch(toggleModal(formType)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile));
