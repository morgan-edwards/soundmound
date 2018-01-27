import React from 'react';
import SongListItemContainer from './song_list_item_container';

class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.props.setQueue(this.props.songs);
  }

  componentWillReceiveProps(nextProps) {
    if (`${this.props.songs}` !== `${nextProps.songs}`) {
      this.props.setQueue(nextProps.songs);
    }
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
