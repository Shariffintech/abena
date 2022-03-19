class Strategy < ApplicationRecord
    has_many :comments, dependent: :destroy, foreign_key: :strategy_id
    has_many :students, through: :classrooms
    accets_nested_attributes_for :comments, refect_if: :all_blank

    validates :name, presence: true
    validates :category, presence: true
    validates :tier, presence: true
    validates :description, presence: true
    validates :reference, presence: true
end
