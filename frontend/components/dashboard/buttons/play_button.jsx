import React from 'react';

const PlayButton = ({ playbackData, song, togglePause, playSong }) => {
  const playButton = (playbackData.playing && playbackData.currentlyPlayingId === song.id) ?
                      <i className="fa fa-pause" aria-hidden="true"></i> :
                      <i className="fa fa-play" aria-hidden="true"></i>;
  const action = (playbackData.currentlyPlayingId === song.id) ?
                  togglePause : playSong;

  return (
    <button onClick={() => action(song.id)}
      className="global-play-btn">
      {playButton}
    </button>
  );
};

export default PlayButton;
