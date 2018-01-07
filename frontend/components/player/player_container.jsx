import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = state => {
  const currentSong = state.entities.songs[state.ui.currentlyPlayingId];
  return {
    currentSong
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
