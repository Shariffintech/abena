class Strategy < ApplicationRecord
    enum category: {Academic: 0, Social: 1, Emotional: 2, Behavioral: 3, Developmental: 4}
    enum tier: {Tier1: 0, Tier2: 1, Tier3: 2}
    has_many :classrooms, foreign_key: :strategies_id
    has_many :comments, dependent: :destroy, foreign_key: :strategies_id
    has_many :students
    accepts_nested_attributes_for :comments

    validates :name, presence: true
    validates :category, presence: true
    validates :tier, presence: true
    validates :description, presence: true
    validates :reference, presence: true
end
