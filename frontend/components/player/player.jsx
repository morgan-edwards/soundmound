import React from 'react';
import ReactPlayer from 'react-player';

const Player = ({ currentSong }) => {
  if (currentSong) {
    return (
      <div className="player-container animated slideInUp">
        <div className="player app-content">
          {currentSong.title}
          <ReactPlayer url={currentSong.trackUrl} playing/>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};


export default Player;
