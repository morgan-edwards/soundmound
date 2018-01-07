import React from 'react';
import { Link } from 'react-router-dom';

const SongListItem = ({song}) => {
  debugger
  return (
    <li key={song.id}
      className="song-list-item">
      <h1>{song.title}</h1>
      <img src={song.imageUrl} />
    </li>
  );
};

export default SongListItem;
