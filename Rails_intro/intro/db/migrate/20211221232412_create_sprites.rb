class CreateSprites < ActiveRecord::Migration[6.1]
  def change
    create_table :sprites do |t|
      t.belongs_to :pokemon, null: false, foreign_key: true
      t.string :front
      t.string :back

      t.timestamps
    end
  end
end
