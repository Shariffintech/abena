class Classroom < ApplicationRecord
  belongs_to :strategies
  belongs_to :students, optional: true
  has_many :comments, dependent: :destroy, foreign_key: :classrooms_id
  accepts_nested_attributes_for :comments

  validates :strategies_id, presence: true
  validates :student_id, presence: true
  validates :comments, presence: true
  
end
