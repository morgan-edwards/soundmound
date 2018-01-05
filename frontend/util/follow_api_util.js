export const follow = follow => {
  return (
    $.ajax({
      url: 'api/follows',
      method: 'POST',
      data: { follow }
    })
  );
};

export const unfollow = follow => {
  return (
    $.ajax({
      url: 'api/follows/',
      method: 'DELETE',
      data: { follow }
    })
  );
};
