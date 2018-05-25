require 'test_helper'

class ReviewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @review = create(:review)
    @employee = @review.reviewee
  end

  test "should get pending reviews" do
    get pending_employee_reviews_url(@employee), as: :json
    assert_response :success
  end

  test "should get feedbacks reviews" do
    get feedbacks_employee_reviews_url(@employee), as: :json
    assert_response :success
  end

  test "should get only unreviewed and in_progress reviews for pending" do
    Review.destroy_all
    create(:review, status: Review.statuses['unreviewed'], reviewer: @employee)
    create(:review, status: Review.statuses['in_progress'], reviewer: @employee)
    create(:review, status: Review.statuses['finished'], reviewer: @employee)

    get pending_employee_reviews_url(@employee), as: :json
    json_response = JSON.parse(response.body)['data']

    assert_equal json_response.count, 2
  end

  test "should get only the reviews as reviewee for feedbacks" do
    Review.destroy_all
    create(:review, status: Review.statuses['unreviewed'], reviewee: @employee)
    create(:review, status: Review.statuses['in_progress'], reviewee: @employee)
    create(:review, status: Review.statuses['finished'], reviewee: @employee)

    get feedbacks_employee_reviews_url(@employee), as: :json
    json_response = JSON.parse(response.body)['data']

    assert_equal json_response.count, 1
  end

  test "should show review" do
    get employee_review_url(@employee, @review), as: :json
    assert_response :success
  end

  test "should update review" do
    patch employee_review_url(@employee, @review), params: { review: { feedback: @review.feedback } }, as: :json
    assert_response 200
  end

  test "should update review status automatically" do
    patch employee_review_url(@employee, @review), params: { review: { feedback: @review.feedback } }, as: :json
    @review.reload

    assert_equal @review.in_progress?, true
  end

  test "should not update review status" do
    patch employee_review_url(@employee, @review), params: { review: { feedback: @review.feedback, status: Review.statuses['finished'] } }, as: :json
    @review.reload

    assert_not_equal @review.status, Review.statuses['finished']
  end

  test "should not update review reviewer" do
    employee = create(:employee)
    patch employee_review_url(@employee, @review), params: { review: { feedback: @review.feedback, reviewer_id: employee.id } }, as: :json
    @review.reload

    assert_not_equal @review.reviewer, employee
  end

  test "should not update review reviewee" do
    employee = create(:employee)
    patch employee_review_url(@employee, @review), params: { review: { feedback: @review.feedback, reviewee_id: employee.id } }, as: :json
    @review.reload

    assert_not_equal @review.reviewee, employee
  end

  test "should set the review status to finished" do
    post finish_employee_review_url(@employee, @review), as: :json
    @review.reload

    assert_response 200
    assert_equal @review.finished?, true
  end
end
