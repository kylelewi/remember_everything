class AddInfoToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :firstname, :string, null: false
    add_column :users, :lastname, :string, null: false
    add_column :users, :email, :string, null: false
  end
end
