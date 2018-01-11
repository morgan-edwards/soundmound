export const fetchSong = (songId) => {
  return (
    $.ajax({
      url: `api/songs/${songId}`,
      method: 'GET',
    })
  );
};

export const uploadSong = (formData) => {
  return (
    $.ajax({
      url: 'api/songs',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    })
  );
};

export const updateSong = (formData) => {
  return (
    $.ajax({
      url: `api/songs/${formData.id}`,
      method: 'PATCH',
      data: formData,
      contentType: false,
      processData: false
    })
  );
};

export const deleteSong = (song) => {
  return (
    $.ajax({
      url: `api/songs/${song.id}`,
      method: 'DELETE',
      data: { song:
              { id: song.id,
                user_id: song.userId
              }
            }
    })
  );
};

export const searchSongs = (query) => {
  return (
    $.ajax({
      url: `api/search/${escape(query)}`,
      method: 'GET',
    })
  );
};
