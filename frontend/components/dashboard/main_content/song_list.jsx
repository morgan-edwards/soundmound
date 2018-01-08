import React from 'react';
import SongListItemContainer from './song_list_item_container';

const SongList = (props) => {
  const songs = Object.values(props.songs).map(song => {
    if (song) return <SongListItemContainer key={song.id} song={song} />;
    }
  );

  return (
    <div className="song-list">
      <ul>
        {songs}
      </ul>
    </div>
  );
};

export default SongList;
