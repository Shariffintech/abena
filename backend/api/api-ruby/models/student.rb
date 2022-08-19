class Student < ApplicationRecord
    belongs_to :users
    has_many :classrooms
    has_many :notes, foreign_key: :students_id
    belongs_to :classrooms, foreign_key: :classrooms_id
    has_many :strategies, through: :classrooms
end
