class Api::CheeseReviewsController < ApplicationController
  before_action :set_cheese_review, only: [:show, :edit, :update, :destroy]

  # GET /cheese_reviews
  # GET /cheese_reviews.json
  def index
    @cheese_reviews = CheeseReview.all
  end

  # GET /cheese_reviews/1
  # GET /cheese_reviews/1.json
  def show
  end

  # GET /cheese_reviews/new
  def new
    @cheese_review = CheeseReview.new
  end

  # GET /cheese_reviews/1/edit
  def edit
  end

  # POST /cheese_reviews
  # POST /cheese_reviews.json
  def create
    @cheese_review = CheeseReview.new(cheese_review_params)
    if @cheese_review.save
      render "api/cheese_reviews/show"
    else
      render json: @cheese_review.errors, status: 422
    end
  end

  # PATCH/PUT /cheese_reviews/1
  # PATCH/PUT /cheese_reviews/1.json
  def update
    respond_to do |format|
      if @cheese_review.update(cheese_review_params)
        format.html { redirect_to @cheese_review, notice: 'Cheese review was successfully updated.' }
        format.json { render :show, status: :ok, location: @cheese_review }
      else
        format.html { render :edit }
        format.json { render json: @cheese_review.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /cheese_reviews/1
  # DELETE /cheese_reviews/1.json
  def destroy
    @cheese_review.destroy
    respond_to do |format|
      format.html { redirect_to cheese_reviews_url, notice: 'Cheese review was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cheese_review
      @cheese_review = CheeseReview.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def cheese_review_params
      params.require(:review).permit(:cheese_id, :user_id, :rating, :review)
    end
end
