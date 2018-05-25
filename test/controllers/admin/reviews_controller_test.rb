require 'test_helper'

class Admin::ReviewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_review = create(:review)
  end

  test "should get index" do
    get admin_reviews_url, as: :json
    assert_response :success
  end

  test "should create admin_review" do
    reviewer = create(:employee)
    reviewee = create(:employee)

    assert_difference('::Review.count') do
      post admin_reviews_url, params: {
        review: {
          reviewer_id: reviewer.id,
          reviewee_id: reviewee.id
        }
      }, as: :json
    end

    assert_response 201
  end

  test "should show admin_review" do
    get admin_review_url(@admin_review), as: :json
    assert_response :success
  end

  test "should update admin_review" do
    patch admin_review_url(@admin_review), params: { review: { feedback: 'Lol' } }, as: :json
    assert_response 200
  end
end
