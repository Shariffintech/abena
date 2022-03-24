class StrategiesSerializer < ActiveModel::Serializer
  attribute :id, name:, description:, reference:, student_id:,category:,tier:
  has_many :comments
  has_many :students, through: :classrooms
end
