import React from 'react';

const ProgressBar = (props) => {
  if (props.currentlyPlayingId === props.song.id) {
    return (
      <div className="waveform">
        <div className="waveform-progress" style={{ width: props.progress }}>
        </div>
      </div>
    );
  } else {
    return (
      <div className="waveform">
      </div>
    );
  }
};

export default ProgressBar;
