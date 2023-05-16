class Api::V1::StudentsController < ApplicationController
  before_action :get_classroom
  before_action :set_student, only: [:show, :update, :destroy]

  # GET /students
  def index
    if current_user.role == nil
      redirect_to api_v1_users_sign_in
    else
      @students = Student.where(user_id: current_user.id).order(:student_name => :asc)
      render json: @students
    end


  end

  # GET /students/1
  def show
    @student = Student.find(params[:id])
    render json: @student
  end

  # POST /students
  def create
    @student = @classroom.students.build(student_params)

    if @student.save
      render json: @student, status: :created, location: @student
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /students/1
  def update
    @student = Student.find_by(id: params[:id])
    if @student.update(student_params)
      render json: @student
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  # DELETE /students/1
  def destroy
    @student.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_student
      # @student = Student.find(params[:id])
      @student = @classroom.students.find(params[:id])
    end

    def get_classroom
      @classroom = Classroom.find(params[:classroom_id])
    end

    # Only allow a list of trusted parameters through.
    def student_params
      params.require(:student).permit(:fullname, :overall_concern, :funding_stream, :sleeping_patterns, :prior_school, :notes, :team)
    end
end
