class ReviewsController < ApplicationController
  before_action :set_employee
  before_action :set_review, only: [:show, :update, :finish]

  def pending
    @reviews = Review.pending_to_review_by(@employee)
    render json: @reviews
  end

  def feedbacks
    @reviews = Review.reviews_for(@employee)
    render json: @reviews
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(update_review_params) && @review.in_progress!
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # POST /reviews/1/finish
  def finish
    if @review.finished!
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  private
  def set_employee
    @employee = Employee.find(params[:employee_id])
  end

  def set_review
    @review = Review.find(params[:id])
  end

  def update_review_params
    params.require(:review).permit(:feedback)
  end
end
