require 'test_helper'

class ReviewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @review = create(:review)
  end

  test "should get index" do
    get reviews_url, as: :json
    assert_response :success
  end

  test "should create review" do
    employee1 = create(:employee)
    employee2 = create(:employee)

    assert_difference('Review.count') do
      post reviews_url, params: {
        review: {
          feedback: @review.feedback,
          status: @review.status,
          reviewer_id: employee1.id,
          reviewee_id: employee2.id
        }
      }, as: :json
    end

    assert_response 201
  end

  test "should show review" do
    get review_url(@review), as: :json
    assert_response :success
  end

  test "should update review" do
    patch review_url(@review), params: { review: { feedback: @review.feedback, status: @review.status } }, as: :json
    assert_response 200
  end
end
