export const fetchAllReviews = () => (
  $.ajax({
    method: 'GET',
    url: `api/cheese_reviews`
  })
);

export const fetchReview = id => (
  $.ajax({
    method: 'GET',
    url: `api/cheese_reviews/${id}`
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: `api/cheeses/${review.cheese_id}/cheese_reviews`,
    data: { review }
  })
);

export const updateReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `api/cheese_reviews/${review.id}`,
    data: { review }
  })
);

export const deleteReview = reviewId => (
  $.ajax({
    method: 'DELETE',
    url: `api/cheese_reviews/${reviewId}`
  })
);
