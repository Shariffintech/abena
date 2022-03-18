class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :fullname
      t.string :overall_concern
      t.string :funding_stream
      t.string :sleeping_patterns
      t.string :prior_school
      t.string :team
      t.references :users, null: false, foreign_key: true

      t.timestamps
    end
  end
end
