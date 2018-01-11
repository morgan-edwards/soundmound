import { connect } from 'react-redux';
import SongListItem from './song_list_item';
import { playSong, togglePause } from '../../../actions/playback_actions';
import { toggleModal } from '../../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser || {id: null};
  const song = ownProps.song;
  const playbackData = state.ui.playback;
  return { currentUser, song, playbackData };
};

const mapDispatchToProps = dispatch => {
  return {
    playSong: (id) => dispatch(playSong(id)),
    toggleModal: (formType, entityId) => dispatch(toggleModal(formType, entityId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongListItem);
