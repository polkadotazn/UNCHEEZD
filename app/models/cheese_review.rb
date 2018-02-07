class CheeseReview < ApplicationRecord
  validates :rating, :user_id, :cheese_id, presence: true

  belongs_to :user
  belongs_to :cheese
end
