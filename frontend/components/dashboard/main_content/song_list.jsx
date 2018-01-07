import React from 'react';
import SongListItem from './song_list_item';

const SongList = (props) => {
  const songs = props.songs.map(song => (
    <SongListItem key={song.id} song={song} />
  ));

  return (
    <div className="song-list">
      <ul>
        {songs}
      </ul>
    </div>
  );
};

export default SongList;
