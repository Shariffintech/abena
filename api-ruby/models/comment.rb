class Comment < ApplicationRecord
  belongs_to :strategies

  validates :title, presence: true
  validates :body, presence: true

end
