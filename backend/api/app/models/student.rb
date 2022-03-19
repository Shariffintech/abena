class Student < ApplicationRecord
    belongs_to :users
    has_many :strategies, foreign_key: :students_id
    has_many :notes, foreign_key: :students_id
    belongs_to :classrooms, foreign_key: :classrooms_id
    accepts_nested_attributes_for :strategies
end
