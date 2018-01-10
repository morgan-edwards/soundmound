import * as SongAPI from '../util/song_api_util'

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';



export const receiveSong = (song) => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

export const removeSong = (song) => {
  return {
    type: REMOVE_SONG,
    song
  };
};

export const receiveSongErrors = (errors) => {
  return {
    type: RECEIVE_SONG,
    errors
  };
};

export const uploadSong = formData => dispatch => {
  return (
    SongAPI.uploadSong(formData).then((song) => (
      dispatch(receiveSong(song))), err => (
        dispatch(receiveSongErrors(err.responseJSON))
    ))
  );
};

export const updateSong = formData => dispatch => {
  return (
    SongAPI.updateSong(formData).then((song) => (
      dispatch(receiveSong(song))), err => (
        dispatch(receiveSongErrors(err.responseJSON))
    ))
  );
};

export const deleteSong = song => dispatch => {
  return (
    SongAPI.deleteSong(song).then((song) => (
      dispatch(removeSong(song))), err => (
        dispatch(receiveSongErrors(err.responseJSON))
    ))
  );
};
