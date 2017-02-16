class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.date :due_date
      t.integer :estimate
      t.text :notes
      t.boolean :complete, default: false
      t.integer :author_id, null: false
      t.integer :list_id
      t.boolean :archived

      t.timestamps
    end
  end
end
