import React from 'react';
import ReactPlayer from 'react-player';
import { ProgressBar, VolumeSlider, FormattedTime } from 'react-player-controls';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curentSong: props.currentSong,
      playbackData: props.playbackData,
      lastSeekStart: 0,
      lastSeekEnd: 0,
      lastIntent: 0,
    };
    this.setVolume = this.setVolume.bind(this);
    this.ref = this.ref.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currentSong: nextProps.currentSong,
                  playbackData: nextProps.playbackData});
  }

  setVolume(volume) {
    this.props.setVolume(parseFloat(volume));
  }

  ref(player) {
    this.player = player;
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
          <div className="player">

            <div className="playback-controls">
              <button onClick={togglePause}
                className="play-btn">
                {playButton}
              </button>
            </div>


            <FormattedTime numSeconds={progress.playedSeconds}
              className="elapsed"/>

            <div className="progress-bar-container">
              <ProgressBar
                totalTime={duration}
                currentTime={progress.playedSeconds}
                isSeekable={true}
                onSeek={time => updateProgress(time)}
                onSeekStart={time => this.setState(() => ({ lastSeekStart: time }))}
                onSeekEnd={time => this.player.seekTo(time)}
                onIntent={time => this.setState(() => ({ lastIntent: time }))} />
            </div>

            <FormattedTime numSeconds={duration}
              className="duration" />


            <div className="volume-nav">
              <div className="volume-popup">
                <VolumeSlider
                  volume={volume}
                  onVolumeChange={v => this.setVolume(v)}
                  isEnabled={true} />
              </div>

              <button className="volume-btn">
                <i className="fa fa-volume-down" aria-hidden="true"></i>
              </button>
            </div>

            <ReactPlayer url={currentSong.trackUrl}
              ref={this.ref}
              progressFrequency={50}
              playing={playing}
              onDuration={(d) => setDuration(d)}
              onProgress={(p) => updateProgress(p)}
              volume={volume}
              height={0}
              width={0}/>

          <div className="player-song-details">
            <img className="player-art" src={currentSong.imageUrl} />
            <div className="player-info">
              <div className="artist-name">{currentSong.artist}</div>
              <div className="song-name">{currentSong.title.slice(0,35)}</div>
            </div>
          </div>
        </div>
      </div>
      );
    } else {
      return <div></div>;
    }
  }
}



export default Player;
