class Admin::ReviewsController < ApplicationController
  before_action :set_admin_review, only: [:show, :update]

  # GET /admin/reviews
  def index
    @reviews = ::Review.all

    render json: @reviews
  end

  # GET /admin/reviews/1
  def show
    render json: @review
  end

  # POST /admin/reviews
  def create
    @review = ::Review.new(admin_review_params)

    if @review.save
      render json: @review, status: :created, location: admin_review_url(@review)
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admin/reviews/1
  def update
    if @review.update(admin_review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_admin_review
    @review = ::Review.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def admin_review_params
    # params.fetch(:review, {})
    params.require(:review).permit(:reviewer_id, :reviewee_id, :feedback, :status)
  end
end
