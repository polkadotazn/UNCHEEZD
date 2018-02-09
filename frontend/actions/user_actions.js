import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const requestAllUsers = () => dispatch => {
  return UserAPIUtil.fetchAllUsers().then(users => {
    return dispatch(receiveAllUsers(users));
  });
};
