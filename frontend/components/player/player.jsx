import React from 'react';
import ReactPlayer from 'react-player';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curentSong: props.currentSong,
      playbackData: props.playbackData,
      seeking: false,
    };
    this.setVolume = this.setVolume.bind(this);
    this.ref = this.ref.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currentSong: nextProps.currentSong,
                  playbackData: nextProps.playbackData});
  }

  setVolume(e) {
    return this.props.setVolume(parseFloat(e.target.value));
  }

  onSeekMouseDown(e) {
    this.setState({ seeking: true })
  }

  onSeekChange(e) {
    return this.props.setProgress(parseFloat(e.target.value))
  }

  onSeekMouseUp(e) {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  onProgress(state) {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  }

  ref(player) {
    this.player = player
  }

  render() {
    const { playing, volume, progress, duration } = this.state.playbackData;
    const { playSong, togglePause, setVolume, updateProgress, setDuration } = this.props
    const currentSong = this.state.currentSong;
    const playButton = (this.props.playbackData.playing) ?
                        <i className="fa fa-pause" aria-hidden="true"></i> :
                        <i className="fa fa-play" aria-hidden="true"></i>;

    if (this.props.currentSong) {
      return (
        <div className="player-container animated slideInUp">
          <div className="player app-content">
            {currentSong.title}
            <button onClick={togglePause}>
              {playButton}
            </button>

            <label>Volume
              <input type='range'
                min={0}
                max={1}
                step='any'
                value={volume}
                onChange={this.setVolume}/>
            </label>

            <label>Progress
              <input type="range"
                min={0}
                max={1}
                value={progress}
                className="progress" />
            </label>

            <ReactPlayer url={currentSong.trackUrl}
              ref={this.ref}
              playing={playing}
              volume={volume} />
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}



export default Player;
