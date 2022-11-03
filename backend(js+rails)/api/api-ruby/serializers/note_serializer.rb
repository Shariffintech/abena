class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :strategies_id, :users_id
  belongs_to :students
end
