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
          reviewer_id: employee1.id,
          reviewee_id: employee2.id
        }
      }, as: :json
    end

    assert_response 201
  end

  test "should create review without feedback" do
    employee1 = create(:employee)
    employee2 = create(:employee)

    assert_difference('Review.count') do
      post reviews_url, params: {
        review: {
          reviewer_id: employee1.id,
          reviewee_id: employee2.id
        }
      }, as: :json
    end

    assert_equal Review.last.feedback, ''
  end

  test "should create review with status unreviewed" do
    employee1 = create(:employee)
    employee2 = create(:employee)

    assert_difference('Review.count') do
      post reviews_url, params: {
        review: {
          reviewer_id: employee1.id,
          reviewee_id: employee2.id
        }
      }, as: :json
    end

    assert_equal Review.last.unreviewed?, true
  end

  test "should show review" do
    get review_url(@review), as: :json
    assert_response :success
  end

  test "should update review" do
    patch review_url(@review), params: { review: { feedback: @review.feedback } }, as: :json
    assert_response 200
  end

  test "should not update review status" do
    patch review_url(@review), params: { review: { feedback: @review.feedback, status: Review.statuses['finished'] } }, as: :json
    @review.reload

    assert_not_equal @review.status, Review.statuses['finished']
  end

  test "should not update review reviewer" do
    employee = create(:employee)
    patch review_url(@review), params: { review: { feedback: @review.feedback, reviewer_id: employee.id } }, as: :json
    @review.reload

    assert_not_equal @review.reviewer, employee
  end

  test "should not update review reviewee" do
    employee = create(:employee)
    patch review_url(@review), params: { review: { feedback: @review.feedback, reviewee_id: employee.id } }, as: :json
    @review.reload

    assert_not_equal @review.reviewee, employee
  end
end
