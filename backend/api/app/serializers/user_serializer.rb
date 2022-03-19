class UserSerializer < ActiveModel::Serializer
  attributes :fullname, :email, :role, :id
end
