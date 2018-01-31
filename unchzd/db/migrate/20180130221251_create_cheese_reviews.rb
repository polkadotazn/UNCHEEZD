class CreateCheeseReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :cheese_reviews do |t|
      t.integer :cheese_id, null: false
      t.integer :user_id, null: false
      t.integer :rating, null: false
      t.text :review

      t.timestamps
    end
    add_index(:cheese_reviews, [:user_id, :cheese_id], unique: true)
  end
end
