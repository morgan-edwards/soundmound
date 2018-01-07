import React from 'react';
import { Link } from 'react-router-dom';

const SongListItem = ({song}) => {
  return (
    <li key={song.id}
      className="song-list-item">

      <img className="song-list-artwork" src={song.imageUrl} />

      <div className="song-list-details">

        <div className="details-header">
          <button className="list-play">
            <i className="fa fa-play" aria-hidden="true"></i>
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
};

export default SongListItem;
