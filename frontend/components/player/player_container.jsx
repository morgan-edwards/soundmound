import { connect } from 'react-redux';
import {
  playSong,
  togglePause,
  setVolume,
  updateProgress,
  setDuration,
} from '../../actions/playback_actions';
import Player from './player';

const mapStateToProps = state => {
  const currentSong = state.entities.songs[state.ui.playback.currentlyPlayingId];
  const playbackData = state.ui.playback;
  return {
    currentSong,
    playbackData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    playSong: (songId) => dispatch(playSong(songId)),
    togglePause: () => dispatch(togglePause()),
    setVolume: (vol) => dispatch(setVolume(vol)),
    updateProgress: (prog) => dispatch(updateProgress(prog)),
    setDuration: (dur) => dispatch(setDuration(dur)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
