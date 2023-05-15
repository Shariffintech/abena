class AddStrategyIdToStudents < ActiveRecord::Migration[6.1]
  def change
    add_reference :students, :strategies, foreign_key: true
  end
end
