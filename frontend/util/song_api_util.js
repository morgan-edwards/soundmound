export const fetchUserSongs = (user) => {
  return (
    $.ajax({
      url: 'api/songs',
      method: 'GET',

    })
  );
};
