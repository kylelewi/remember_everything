class ChangeTasksTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :tasks, :author_id
    add_column :tasks, :user_id, :integer, null: false
  end
end
