import * as CheeseAPIUtil from '../util/cheese_api_util';

export const RECEIVE_ALL_CHEESES = 'RECEIVE_ALL_CHEESES';
export const RECEIVE_A_CHEESE = "RECEIVE_A_CHEESE";
export const CREATE_CHEESE = 'CREATE_A_CHEESE';
export const UPDATE_CHEESE = 'UPDATE_CHEESE';
export const REMOVE_CHEESE = 'REMOVE_CHEESE';
export const RECEIVE_CHEESE_ERRORS = 'RECEIVE_CHEESE_ERRORS';

export const receiveAllCheeses = cheeses => ({
  type: RECEIVE_ALL_CHEESES,
  cheeses
});

export const receiveACheese = cheese => ({
  type: RECEIVE_A_CHEESE,
  cheese
});

export const removeCheese = cheese => ({
  type: REMOVE_CHEESE,
  cheese
});

export const receiveCheeseErrors = errors => ({
  type: RECEIVE_CHEESE_ERRORS,
  errors
});

export const uploadPicture = (formData, id) => dispatch => (
  CheeseAPIUtil.uploadPicture(formData, id).then(cheese => (
    dispatch(receiveACheese(cheese))
  ), err => {
    return dispatch(receiveCheeseErrors(err.responseJSON));
  })
);

export const updatePicture = (formData, id) => dispatch => (
  CheeseAPIUtil.updatePicture(formData, id).then(cheese => (
    dispatch(receiveACheese(cheese))
  ), err => {
    return dispatch(receiveCheeseErrors(err.responseJSON));
  })
);

export const requestAllCheeses = () => dispatch => {
  return CheeseAPIUtil.fetchAllCheeses().then(cheeses => {
    return dispatch(receiveAllCheeses(cheeses));
  }, err => {
    return dispatch(receiveCheeseErrors(err.responseJSON));
  });
};

export const requestACheese = id => dispatch => {
  return CheeseAPIUtil.fetchACheese(id).then(cheese => (
    dispatch(receiveACheese(cheese))
  ));
};

export const createCheese = cheese => dispatch => {
  return CheeseAPIUtil.createCheese(cheese).then(cheese => (
    dispatch(receiveACheese(cheese))
  ), err => {
    return dispatch(receiveCheeseErrors(err.responseJSON));
  });
};

export const updateCheese = (cheese, id) => dispatch => {
  return CheeseAPIUtil.updateCheese(cheese, id).then(cheese2 => (
    dispatch(receiveACheese(cheese2))
  ), err => {
    return dispatch(receiveCheeseErrors(err.responseJSON));
  });
};

export const deleteCheese = cheeseId => dispatch => {
  return CheeseAPIUtil.deleteCheese(cheeseId).then(cheese => (
    dispatch(removeCheese(cheese))
  ), err => {
    return dispatch(receiveCheeseErrors(err.responseJSON));
  });
};
