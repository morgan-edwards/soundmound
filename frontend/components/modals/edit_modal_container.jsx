import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import EditModal from './edit_modal';
import { updateSong } from '../../actions/song_actions';
import { toggleModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = state.ui.modals.formType;
  const errors = state.errors.songs;
  const currentUser = state.session.currentUser;
  const song = state.entities.songs[state.ui.modals.entityId];
  const animation = ownProps.props.animation;
  const closeModal = ownProps.props.closeModal;
  return { formType,
            errors,
            currentUser,
            song,
            animation,
            closeModal,
          };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSong: (formData) => dispatch(updateSong(formData)),
    toggleModal: (formType) => dispatch(toggleModal(formType)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModal));
