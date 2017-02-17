class RemoveDescriptionFromList < ActiveRecord::Migration[5.0]
  def change
    remove_column :lists, :description
  end
end
