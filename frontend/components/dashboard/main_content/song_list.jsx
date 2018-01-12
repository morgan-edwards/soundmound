import React from 'react';
import SongListItemContainer from './song_list_item_container';

class SongList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const songs = this.props.songs.map(song => {
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
  }
}

export default SongList;
