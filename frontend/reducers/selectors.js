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
  return sortSongs(songs);
};



// Turn your strings into dates, and then subtract them
// to get a value that is either negative, positive, or zero.
