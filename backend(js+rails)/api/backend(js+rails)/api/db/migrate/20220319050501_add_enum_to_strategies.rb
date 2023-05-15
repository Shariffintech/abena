class AddEnumToStrategies < ActiveRecord::Migration[6.1]
  def change
    change_column :strategies, :tier, :string, default: "Tier 1", null: false
    change_column :strategies, :category, :string, default: "Academic"
  end

end
