class Api::CheesesController < ApplicationController
  before_action :set_cheese, only: [:show, :edit, :update, :destroy]
  attr_accessor :image_path

  # GET /cheeses
  # GET /cheeses.json
  def index
    @cheeses = Cheese.all
  end

  # GET /cheeses/1
  # GET /cheeses/1.json
  def show
  end

  # GET /cheeses/new
  def new
    @cheese = Cheese.new
  end

  # GET /cheeses/1/edit
  def edit
  end

  # POST /cheeses
  # POST /cheeses.json
  def create
    @cheese = Cheese.new(cheese_params)

    if @cheese.save
      unless @cheese.cheese_pic_file_name.nil?
        @cheese.image_path = "https://s3-us-east-2#{@cheese.cheese_pic.url[4..-1]}"
        @cheese.save
      end
      render "api/cheeses/show"
    else
      render json: @cheese.errors,
      status: :unprocessable_entity
    end

  end

  # def create
  #   p("PASD",params);
  #   @cheese = Cheese.new(cheese_params)
  #   if @cheese.save!
  #     unless @cheese.cheese_pic_file_name.nil?
  #       @cheese.image_path = "https://s3-us-west-2#{@cheese.cheese_pic.url[4..-1]}"
  #       @cheese.save
  #     end
  #     render "api/cheeses/show"
  #   else
  #     render json: @cheese.errors,
  #     status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /cheeses/1
  # PATCH/PUT /cheeses/1.json
  def update

    if @cheese.update_attributes(cheese_params)
      @cheese.image_path = "https://s3-us-east-2#{@cheese.cheese_pic.url[4..-1]}"
      @cheese.save
      render "api/cheeses/show"
    else
      render json: @cheese.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cheeses/1
  # DELETE /cheeses/1.json
  def destroy
    @cheese.destroy
    render "api/cheeses/show"
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cheese
      @cheese = Cheese.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def cheese_params
      params.permit(:name, :description, :category, :brand, :origin, :cheese_pic)
    end
end
