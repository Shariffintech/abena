class StrategySerializer < ActiveModel::Serializer
  attribute :id, :name, :tier, :category, :description, :reference, :classroom_id
  has_many :comments
  has_many :students, through: :classrooms
end
