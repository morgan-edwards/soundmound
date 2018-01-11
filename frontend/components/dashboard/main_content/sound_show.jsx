import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SongList from './song_list';
import FollowButtonContainer from '../buttons/follow_button_container';
import PlayButtonContainer from '../playback_ui/play_button_container';
import ProgressBarContainer from '../playback_ui/progress_bar_container';


class SoundShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.song) {
      this.props.fetchSong(this.props.songId);
    }
  }

  render() {
    if (!this.props.song) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="song-show-header">
          <div className="song-header-contents">

            <div className="title-controls">
              <div className="top-row">
                <div className="play-n-details">
                  <PlayButtonContainer song={this.props.song} />
                  <div className="song-artist-title">
                    <span className="artist">{this.props.song.artist}</span>
                    <span className="title">{this.props.song.title}</span>
                  </div>
                </div>
                <div className="song-date">
                  {this.props.song.fromNow}
                </div>
              </div>

              <ProgressBarContainer song={this.props.song} />

            </div>

            <div className="song-art-box">
              <img src={this.props.song.imageUrl} />
            </div>

          </div>
        </div>

      );
    }
  }
}


export default SoundShow;
