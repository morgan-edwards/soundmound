import * as SongAPI from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_USER_SONGS';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS'

export const receiveSongs = songs => {
  return {
    type: RECEIVE_SONGS,
    songs
  };
};

export const receiveSongErrors = errors => {
  return {
    type: RECEIVE_SONGS,
    errors
  };
};

export const getUserSongs = userId => dispatch => {
  return (
    SongAPI.fetchUserSongs(userId).then((songs) => (
      dispatch(receiveSongs(songs))), err => (
        dispatch(receiveSongErrors(err.responseJSON))
    ))
  );
};
