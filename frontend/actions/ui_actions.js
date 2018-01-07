export const TOGGLE_SESSION_MODAL = 'TOGGLE_SESSION_MODAL';
export const PLAY_SONG = 'PLAY_SONG';

export const toggleSessionModal = (formType) => {
  return {
    type: TOGGLE_SESSION_MODAL,
    formType
  };
};

export const playSong = songId => {
  return {
    type: PLAY_SONG,
    songId
  };
};
