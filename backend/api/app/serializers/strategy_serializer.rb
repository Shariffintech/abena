class StrategySerializer < ActiveModel::Serializer
  attribute :id
  has_many :comments
  has_many :students, through: :classrooms
end
