class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :finish]

  # GET /reviews
  def index
    @reviews = Review.all.unfinished

    render json: @reviews
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @review = Review.new(create_review_params)

    if @review.save
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
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
    def set_review
      @review = Review.find(params[:id])
    end

    def create_review_params
      params.require(:review).permit(:reviewer_id, :reviewee_id)
    end

    def update_review_params
      params.require(:review).permit(:feedback)
    end
end
