import { connect } from 'react-redux';

import {
  playSong,
  togglePause,
  setVolume,
  updateProgress,
  setDuration,
} from '../../actions/playback_actions';

import PlayButton from './play_button';


const mapStateToProps = (state, ownProps) => {
  const playbackData = state.ui.playback;
  const song = ownProps.song
  return {
    currentSong,
    playbackData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    playSong: (songId) => dispatch(playSong(songId)),
    togglePause: () => dispatch(togglePause()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
