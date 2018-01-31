require 'test_helper'

class CheeseReviewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cheese_review = cheese_reviews(:one)
  end

  test "should get index" do
    get cheese_reviews_url
    assert_response :success
  end

  test "should get new" do
    get new_cheese_review_url
    assert_response :success
  end

  test "should create cheese_review" do
    assert_difference('CheeseReview.count') do
      post cheese_reviews_url, params: { cheese_review: { cheese_id: @cheese_review.cheese_id, rating: @cheese_review.rating, review: @cheese_review.review, user_id: @cheese_review.user_id } }
    end

    assert_redirected_to cheese_review_url(CheeseReview.last)
  end

  test "should show cheese_review" do
    get cheese_review_url(@cheese_review)
    assert_response :success
  end

  test "should get edit" do
    get edit_cheese_review_url(@cheese_review)
    assert_response :success
  end

  test "should update cheese_review" do
    patch cheese_review_url(@cheese_review), params: { cheese_review: { cheese_id: @cheese_review.cheese_id, rating: @cheese_review.rating, review: @cheese_review.review, user_id: @cheese_review.user_id } }
    assert_redirected_to cheese_review_url(@cheese_review)
  end

  test "should destroy cheese_review" do
    assert_difference('CheeseReview.count', -1) do
      delete cheese_review_url(@cheese_review)
    end

    assert_redirected_to cheese_reviews_url
  end
end
