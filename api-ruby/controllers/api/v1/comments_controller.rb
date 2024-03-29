class Api::V1::CommentsController < ApplicationController
  before_action :get_strategy
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET /comments
  def index

    @comments = @strategy.comments.order(:created_at => :desc)

    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  def new
    @comment = @strategy.comments.build
  end

  # POST /comments
  def create
    @comment = @strategy.comments.build(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:title, :body, :strategies_id)
    end
end
