export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/users'
  })
);

export const fetchUser = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);

export const updateUser = user => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user }
  })
);

export const deleteUser = userId => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${userId}`
  })
);
