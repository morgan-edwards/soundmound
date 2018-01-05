export const userSongs = (state, user) => {
  return user ? user.songIds.map(id => state.entities.songs[id]) : [];
};
