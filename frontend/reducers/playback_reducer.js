import merge from 'lodash/merge';

import { PLAY_SONG,
  TOGGLE_PAUSE,
  SET_VOLUME,
  UPDATE_PROGRESS,
  SET_DURATION,
  SET_QUEUE,
 } from '../actions/playback_actions';

const _defaultPlayback = Object.freeze({
  currentlyPlayingId: null,
  playing: true,
  loop: false,
  volume: 0.8,
  muted: false,
  progress: 0,
  duration: 0,
  songQueue: [],
});

const playbackReducer = (state = _defaultPlayback, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case PLAY_SONG:
      newState = merge({}, state);
      newState.currentlyPlayingId = action.songId;
      newState.progress = 0;
      newState.playing = true;
      return newState;
    case TOGGLE_PAUSE:
      newState = merge({}, state);
      newState.playing = !newState.playing;
      return newState;
    case SET_VOLUME:
      newState = merge({}, state);
      newState.volume = action.volume;
      return newState;
    case UPDATE_PROGRESS:
      newState = merge({}, state);
      newState.progress = action.progress;
      return newState;
    case SET_DURATION:
      newState = merge({}, state);
      newState.duration = action.duration;
      newState.seeking = false;
      return newState;
    case SET_QUEUE:
      newState = merge({}, state);
      newState.songQueue = action.queue;
      return newState;
    default:
      return state;
  }
};

export default playbackReducer;
