import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveUser = users => ({
  type: RECEIVE_USER,
  users
});

export const requestAllUsers = () => dispatch => {
  return UserAPIUtil.fetchAllUsers().then(users => {
    return dispatch(receiveAllUsers(users));
  });
};

export const requestUser = id => dispatch => {
  return UserAPIUtil.fetchAUser(id).then(user => {
    return dispatch(receiveUser(user));
  });
};
