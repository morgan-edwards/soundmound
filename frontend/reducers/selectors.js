const moment = require('moment');

const momentify = (songArray) => {
  return songArray.map(song =>
    Object.assign(song, { fromNow: moment(song.createdAt).fromNow() })
  );
};

const sortSongs = (songs) => {
  return songs.sort((a,b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
};

export const userSongs = (state, user) => {
  let songs = (user) ? user.songIds.map(id => state.entities.songs[id]) : [];
  return sortSongs(songs);
};

export const followeeSongs = (state, user) => {
  let songs = [];
  user.followeeIds.forEach(id => {
    const followee = state.entities.users[id];
    const followeeSongs = userSongs(state, followee);
    songs = songs.concat(followeeSongs);
  });
  songs = momentify(songs);
  return sortSongs(songs);
};

export const mapUsers = (state, ids) => {
  return ids.map(id => state.entities.users[id]);
};
