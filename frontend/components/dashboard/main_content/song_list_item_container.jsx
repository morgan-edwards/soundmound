import { connect } from 'react-redux';
import SongListItem from './song_list_item';
import { playSong, togglePause } from '../../../actions/playback_actions';

const mapStateToProps = (state, ownProps) => {
  const song = ownProps.song;
  const playbackData = state.ui.playback;
  return { song, playbackData };
};

const mapDispatchToProps = dispatch => {
  return {
    playSong: (id) => dispatch(playSong(id)),
    togglePause: () => dispatch(togglePause()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongListItem);
