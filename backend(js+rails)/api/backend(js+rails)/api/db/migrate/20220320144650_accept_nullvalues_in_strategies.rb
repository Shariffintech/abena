class AcceptNullvaluesInStrategies < ActiveRecord::Migration[6.1]
  def change
    change_column :strategies, :students_id,:integer, null: true
    change_column :strategies, :classrooms_id,:integer, null: true
  end
end
