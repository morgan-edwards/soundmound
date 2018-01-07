import React from 'react';
import { Link } from 'react-router-dom';

class SongListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.state = this.props.playbackData;
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.playbackData);
  }

  handlePlay(e) {
    if (this.props.playbackData.currentlyPlayingId === this.props.song.id) {
      return this.props.togglePause();
    } else {
      return this.props.playSong(this.props.song.id);
    }
  }

  render() {
    const song = this.props.song;
    const playButton = (this.state.currentlyPlayingId === song.id &&
                        this.state.playing) ?
                        <i className="fa fa-pause" aria-hidden="true"></i> :
                        <i className="fa fa-play" aria-hidden="true"></i>;

    return (
      <li key={song.id}
        className="song-list-item">

        <img className="song-list-artwork" src={song.imageUrl} />

        <div className="song-list-details">

          <div className="details-header">
            <button className="list-play"
              onClick={this.handlePlay}>
              {playButton}
            </button>
            <div className="detail-text">
              <div className="light-row">
                {song.artist}
              </div>
              <div className="dark-row">
                {song.title}
              </div>
            </div>
          </div>

          <div className="waveform">
          </div>

          <div className="details-footer">
          </div>

        </div>
      </li>
    );
  }
}

export default SongListItem;
