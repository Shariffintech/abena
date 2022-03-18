class Student < ApplicationRecord
    belongs_to :users
    belongs_to :strategies
    has_many :notes
    belongs_to :classrooms
end
