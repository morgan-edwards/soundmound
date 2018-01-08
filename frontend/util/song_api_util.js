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
