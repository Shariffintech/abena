class StrategySerializer < ActiveModel::Serializer

  attribute :name, :tier, :category, :description, :reference
  has_many :comments
  has_many :students, through: :classrooms
end
