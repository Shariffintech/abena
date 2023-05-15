class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :title
      t.string :body
      t.references :strategies, null: false, foreign_key: true
      t.references :users, null: false, foreign_key: true
      t.timestamps
    end
  end
end
