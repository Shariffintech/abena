class ClassroomSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :students, through: :users
  belongs_to :users
end
