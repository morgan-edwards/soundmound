import React from 'react';
import SongListItemContainer from './song_list_item_container';

class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentWillReceiveProps(nextProps) {
    console.log("updating");
    this.setState(nextProps);
  }

  render() {
    const songs =this.state.songs.map(song => {
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
