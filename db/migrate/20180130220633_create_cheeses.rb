class CreateCheeses < ActiveRecord::Migration[5.1]
  def change
    create_table :cheeses do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :type
      t.string :brand, null: false
      t.string :origin

      t.timestamps
    end
    add_index(:cheeses, [:name, :brand], unique: true)
  end
end
