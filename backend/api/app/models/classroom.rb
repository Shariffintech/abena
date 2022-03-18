class Classroom < ApplicationRecord
  has_many :students, through: => :users
  belongs_to :users
end
