import React from 'react';
import { Link } from 'react-router-dom';
import PlayButtonContainer from '../buttons/play_button_container';

class SongListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playbackData;
    this.handlePlay = this.handlePlay.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("updating");
    this.setState(nextProps.playbackData);
  }

  handlePlay() {
    if (this.props.playbackData.currentlyPlayingId === this.props.song.id) {
      return this.props.togglePause();
    } else {
      return this.props.playSong(this.props.song.id);
    }
  }

  openEditModal() {
    return this.props.toggleModal('edit', this.props.song.id);
  }

  render() {
    const song = this.props.song;
    const currentUserPage = this.props.currentUser.id === song.userId;
    const playButton = (this.state.currentlyPlayingId === song.id &&
                        this.state.playing) ?
                        <i className="fa fa-pause" aria-hidden="true"></i> :
                        <i className="fa fa-play" aria-hidden="true"></i>;

    const footerControls = (currentUserPage) ?
      <div className="self-controls">
        <button onClick={this.openEditModal}>
          Edit
        </button>
      </div>
            :
      <div>LIKE</div> ;

    const progressWidth = Math.ceil(this.state.progress.played).toString() + "%";


    return (
      <li key={song.id}
        className="song-list-item">

        <img className="song-list-artwork" src={song.imageUrl} />

        <div className="song-list-details">

          <div className="details-header">
            <div className="list-play">
              <PlayButtonContainer song={song} />
            </div>
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
            <div className="waveform-progress"
                  style={{width: progressWidth}}>
            </div>
          </div>

          <div className="details-footer">
            {footerControls}
          </div>

        </div>
      </li>
    );
  }
}

export default SongListItem;
