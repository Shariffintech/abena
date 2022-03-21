class UserSerializer < ActiveModel::Serializer
  attributes :fullname, :email, :role, :id
  has_many :classrooms
  has_many :students, through: :classrooms
end
