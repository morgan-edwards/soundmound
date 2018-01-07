import React from 'react';
import SongListItemContainer from './song_list_item_container';

const SongList = (props) => {
  const songs = props.songs.map(song => (
    <SongListItemContainer key={song.id} song={song} />
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
