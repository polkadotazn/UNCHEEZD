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

export const requestAllCheeses = () => dispatch => {
  return CheeseAPIUtil.fetchAllCheeses().then(cheeses => {
    return dispatch(receiveAllCheeses(cheeses));
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
  ));
};

export const updateCheese = cheese => dispatch => {
  return CheeseAPIUtil.updateCheese(cheese).then(cheese => (
    dispatch(receiveACheese(cheese))
  ));
};

export const deleteCheese = cheeseId => dispatch => {
  return CheeseAPIUtil.deleteCheese(cheeseId).then(cheese => (
    dispatch(removeCheese(cheese))
  ));
};
