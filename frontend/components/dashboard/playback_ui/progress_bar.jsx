import React from 'react';
import { FormattedTime } from 'react-player-controls';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      seeking: false,
    };
  }

  componentWillReceiveProps({playbackData}) {
    if (!this.state.seeking) {
      this.setState({ progress: playbackData.progress.played});
    }
  }

  onSeekEnd() {
    this.props.updateProgress(this.state.progress);
    this.setState({seeking: false });
  }

  seeking(value) {
    this.setState({ progress: value, seeking: true });
  }

  render() {
    const { playbackData, song } = this.props;
    if (playbackData.currentlyPlayingId === song.id) {
      return (
        <div className="progress-bar">

          <div className="slider-background">
            <input
              className="pg-slider"
              type="range"
              min="0"
              max="1"
              step="0.0001"
              value={this.state.progress}
              onInput={e => this.seeking(parseFloat(e.target.value))}
              onMouseUp={() => this.onSeekEnd()}
              />
            <div className="slider-progress" style={{ width: `${this.state.progress * 100}%` }}>
            </div>
          </div>

          <div className="time-holder">
            <FormattedTime numSeconds={playbackData.progress.playedSeconds}
              className="elapsed"/>
            <FormattedTime numSeconds={playbackData.duration}
              className="duration" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="progress-bar">
          <div className="slider-background">
          </div>
        </div>
      );
    }
  }
}


export default ProgressBar;
