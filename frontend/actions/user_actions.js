import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const removeUser = user => ({
  type: REMOVE_USER,
  user
});

export const requestAllUsers = () => dispatch => {
  return UserAPIUtil.fetchAllUsers().then(users => {
    return dispatch(receiveAllUsers(users));
  });
};

export const requestUser = id => dispatch => {
  return UserAPIUtil.fetchUser(id).then(user => {
    return dispatch(receiveUser(user));
  });
};

export const updateUser = user => dispatch => {
  return UserAPIUtil.updateUser(user).then(user => {
    return dispatch(receiveUser(user));
  });
};

export const deleteUser = userId => dispatch => {
  return UserAPIUtil.deleteUser(userId).then(user => {
    return dispatch(removeUser(user));
  });
};
