class CommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :strategies_id, :users_id
  belongs_to :strategies
end
