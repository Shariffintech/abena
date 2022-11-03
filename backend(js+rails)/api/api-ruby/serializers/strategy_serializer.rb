class StrategiesSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :tier, :reference
  has_many :comments
  has_many :students, through: :classrooms
end
