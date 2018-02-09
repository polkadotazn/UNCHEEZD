class ChangeRatingDatatypeToFloat < ActiveRecord::Migration[5.1]
  def change
    change_column :cheese_reviews, :rating, :float
  end
end
