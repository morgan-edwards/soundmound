export const fetchUser = (userId) => {
  return (
    $.ajax({
      url: `api/users/${userId}`,
      method: 'GET',
    })
  );
};

export const fetchFollowees = (userId) => {
  return (
    $.ajax({
      url: `api/users/${userId}/followees`,
      method: 'GET',
    })
  );
};

export const updateUser = (formData) => {
  return (
    $.ajax({
      url: `api/users`,
      method: 'PATCH',
      data: formData,
      contentType: false,
      processData: false
    })
  );
};
