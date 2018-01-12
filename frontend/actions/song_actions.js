import * as SongAPI from '../util/song_api_util'
import { receiveUser } from './user_actions'

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
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

export const receiveSongSearch = (songs, query) => {
  const searchResults = songs.map(song => song.id);
  return {
    type: RECEIVE_SONGS,
    searchResults,
    songs,
    query,
  };
};

export const receiveSuggestedSongs = (songs) => {
  const suggestions = songs.map(song => song.id);
  return {
    type: RECEIVE_SONGS,
    suggestions,
    songs,
  };
};

export const receiveSongErrors = (errors) => {
  return {
    type: RECEIVE_SONG,
    errors
  };
};

export const fetchSong = (songId) => dispatch => {
  return (
    SongAPI.fetchSong(songId).then((user) => (
      dispatch(receiveUser(user))), err => (
        dispatch(receiveSongErrors(err.responseJSON))
    ))
  );
};


export const uploadSong = formData => dispatch => {
  return (
    SongAPI.uploadSong(formData).then((user) => (
      dispatch(receiveUser(user))), err => (
        dispatch(receiveSongErrors(err.responseJSON))
    ))
  );
};

export const updateSong = formData => dispatch => {
  return (
    SongAPI.updateSong(formData).then((user) => (
      dispatch(receiveUser(user))), err => (
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

export const searchSongs = (query) => dispatch => {
  return (
    SongAPI.searchSongs(query).then((songs) => (
      dispatch(receiveSongSearch(songs, query))), err => (
        dispatch(receiveSongErrors(err.responseJSON))
    ))
  );
};

export const fetchSuggested = () => dispatch => {
  return (
    SongAPI.suggestedSongs().then((songs) => (
      dispatch(receiveSuggestedSongs(songs))), err => (
        dispatch(receiveSongErrors(err.responseJSON))
    ))
  );
};
