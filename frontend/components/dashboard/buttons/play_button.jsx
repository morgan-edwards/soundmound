import React from 'react';

const PlayButton = (props) => {
  const playButton = (this.props.playbackData.playing) ?
                      <i className="fa fa-pause" aria-hidden="true"></i> :
                      <i className="fa fa-play" aria-hidden="true"></i>;
  const action = (props.playbackData.currentlyPlayingId === props.song.id) ?
                  this.props.togglePause() : this.props.playSong(props.song.id);

  return (
    <button onClick={action}
      className="play-btn">
      {playButton}
    </button>
  );
};

export default PlayButton;
