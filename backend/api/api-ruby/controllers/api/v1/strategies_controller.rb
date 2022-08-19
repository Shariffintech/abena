class Api::V1::StrategiesController < ApplicationController
  # include ActiveModel::Serialization
  # before_action :get_classroom
  before_action :set_strategy, except: [:create]

  # attr_accessor :name, :description, :category, :tier, :reference
  
  # GET /strategies
  def index
      @strategies = Strategy.order(:name => :asc)

    render json: @strategies
  end

  # GET /strategies/1
  def show
    render json: @strategy
  end

  # POST /strategies
  def create
    @strategy = Strategy.new(strategy_params)
    # @strategy = @classroom.strategies.build(strategy_params)

    if @strategy.save
      render json: @strategy, status: :created
    else
      render json: @strategy.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /strategies/1
  def update
    if @strategy.update(strategy_params)
      render json: @strategy
    else
      render json: @strategy.errors, status: :unprocessable_entity
    end
  end

  # DELETE /strategies/1
  def destroy
    @strategy.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_strategy
      @strategy = Strategy.find_by(id: params[:id])
    end

    # def get_classroom
    #   if @classroom != nil
    #     @classroom = Classroom.find(params[:classroom_id])
    #   else
    #     @classroom = nil
    #   end
    
    # end

    # Only allow a list of trusted parameters through.
    def strategy_params
      params.require(:strategy).permit(:name, :description, :category, :tier, :reference)
    end
end

