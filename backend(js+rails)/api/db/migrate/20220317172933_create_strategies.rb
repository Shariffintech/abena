class CreateStrategies < ActiveRecord::Migration[6.1]
  def change
    create_table :strategies do |t|
      t.string :name
      t.string :category
      t.string :tier
      t.string :description
      t.string :reference
      t.references :students, null: false, foreign_key: true
      t.references :classrooms, null: false, foreign_key: true
      t.timestamps
    end
  end
end
