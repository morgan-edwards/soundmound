import React from 'react';
import { Link } from 'react-router-dom';
import PlayButtonContainer from '../playback_ui/play_button_container';
import ProgressBarContainer from '../playback_ui/progress_bar_container';

class SongListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
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
    const playbackData = this.props.playbackData;
    const song = this.props.song;
    const currentUserPage = this.props.currentUser.id === song.userId;

    const footerButtons = (currentUserPage) ?
        <button onClick={this.openEditModal}>
          Edit
        </button> :
        <button>LIKE</button> ;

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
                <Link to={`/artists/${song.userId}`}>
                  {song.artist}
                </Link>
                <span>{song.fromNow}</span>
              </div>
              <div className="dark-row">
                {song.title}
              </div>
            </div>
          </div>

          <ProgressBarContainer song={song} />

          <div className="details-footer">
            <div className="self-controls">
              {footerButtons}
            </div>
          </div>

        </div>
      </li>
    );
  }
}

export default SongListItem;
