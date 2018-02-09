import * as ReviewAPIUtil from '../util/review_api_utils';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const requestAllReviews = () => dispatch => {
  return ReviewAPIUtil.fetchAllReviews().then(reviews => {
    return dispatch(receiveAllReviews(reviews));
  });
};

export const requestReview = id => dispatch => {
  return ReviewAPIUtil.fetchReview(id).then(review => (
    dispatch(receiveReview(review))
  ));
};

export const createReview = review => dispatch => {
  return ReviewAPIUtil.createReview(review).then(review => {
    return dispatch(receiveReview(review));
  }, err => {
    return dispatch(receiveReviewErrors(err.responseJSON));
  });
};

export const updateReview = review => dispatch => {
  return ReviewAPIUtil.updateReview(review).then(review => {
    return dispatch(receiveReview(review));
  });
};

export const deleteReview = review => dispatch => {
  return ReviewAPIUtil.deleteReview(review).then(review => {
    return dispatch(deleteReview(review));
  });
};
