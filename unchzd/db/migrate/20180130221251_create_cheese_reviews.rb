class CreateCheeseReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :cheese_reviews do |t|
      t.integer :cheese_id
      t.integer :user_id
      t.integer :rating
      t.text :review

      t.timestamps
    end
  end
end
