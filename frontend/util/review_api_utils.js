export const fetchAllReviews = cheeseId => (
  $.ajax({
    method: 'GET',
    url: `api/cheeses/${cheeseId}/cheese_reviews`
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: `api/cheeses/${review.cheese_id}`,
    data: { review }
  })
);

export const updateReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `api/cheeses/${review.cheese_id}/cheese_reviews/${review.id}`,
    data: { review }
  })
);

export const deleteReview = review => (
  $.ajax({
    method: 'DELETE',
    url: `api/cheeses/${review.cheese_id}/cheese_reviews/${review.id}`
  })
);
