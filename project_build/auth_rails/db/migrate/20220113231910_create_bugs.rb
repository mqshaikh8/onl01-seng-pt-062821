class CreateBugs < ActiveRecord::Migration[6.1]
  def change
    create_table :bugs do |t|
      t.string :title
      t.string :desc
      t.integer :priority
      t.integer :created_by
      t.integer :solved_by
      t.string :status

      t.timestamps
    end
  end
end
