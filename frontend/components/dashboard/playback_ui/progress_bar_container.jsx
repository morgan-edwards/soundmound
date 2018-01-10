import { connect } from 'react-redux';

import {
  updateProgress,
} from '../../../actions/playback_actions';

import ProgressBar from './progress_bar';


const mapStateToProps = (state, ownProps) => {
  const song = ownProps.song;
  const currentlyPlayingId = state.ui.playback.currentlyPlayingId;
  const progress = (state.ui.playback.progress.played) ?
                    (state.ui.playback.progress.played * 100).toString() + "%" :
                    "0%";
  return { progress, currentlyPlayingId };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressBar);
