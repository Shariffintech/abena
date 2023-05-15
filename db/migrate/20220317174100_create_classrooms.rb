class CreateClassrooms < ActiveRecord::Migration[6.1]
  def change
    create_table :classrooms do |t|
      t.integer :room_number
      t.string :room_name
      t.references :students, null: false, foreign_key: true
      t.references :users, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
