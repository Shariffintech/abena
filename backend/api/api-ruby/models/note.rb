class Note < ApplicationRecord
  belongs_to :students

  validates :title, presence: true
  validates :body, presence: true
end
