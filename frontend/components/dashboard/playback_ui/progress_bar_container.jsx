import { connect } from 'react-redux';
import {
  updateProgress,
  seeking,
  seekEnd,
} from '../../../actions/playback_actions';
import ProgressBar from './progress_bar';


const mapStateToProps = (state) => {
  const playbackData = state.ui.playback;
  return {playbackData };
};

const mapDispatchToProps = dispatch => {
  return {
    seeking: (prog) => dispatch(seeking(prog)),
    seekEnd: (prog) => dispatch(seekEnd(prog)),
    updateProgress: (prog) => dispatch(updateProgress(prog)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressBar);
