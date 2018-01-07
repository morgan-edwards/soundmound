export const PLAY_SONG = 'PLAY_SONG';
export const TOGGLE_PAUSE = 'TOGGLE_PAUSE';
export const SET_VOLUME = 'SET_VOLUME';
export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';
export const SET_DURATION = 'SET_DURATION';

export const playSong = songId => {
  return {
    type: PLAY_SONG,
    songId
  };
};

export const togglePause = () => {
  return {
    type: TOGGLE_PAUSE,
  };
};

export const setVolume = (volume) => {
  return {
    type: SET_VOLUME,
    volume
  };
};

export const updateProgress = (progress) => {
  return {
    type: UPDATE_PROGRESS,
    progress
  };
};

export const setDuration = (duration) => {
  return {
    type: SET_DURATION,
    duration
  };
};
