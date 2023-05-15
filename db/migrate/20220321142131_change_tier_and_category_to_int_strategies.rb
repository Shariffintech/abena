class ChangeTierAndCategoryToIntStrategies < ActiveRecord::Migration[6.1]
  def change
    remove_column :strategies, :category
    remove_column :strategies, :tier

    add_column :strategies, :category, :integer, default: 0
    add_column :strategies, :tier, :integer, default: 0
  end

end