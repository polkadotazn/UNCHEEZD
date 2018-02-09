class CheeseReview < ApplicationRecord
  validates :rating, :user_id, :cheese_id, presence: true
  # validates_uniqueness_of :user_id, scope: [:cheese_id]
  validate :user_id_and_cheese_id

  def user_id_and_cheese_id
    review = CheeseReview.find_by(user_id: user_id, cheese_id: cheese_id)
    if review
      self.errors[:user_id] << ["You've already reviewed this cheese"]
    end
  end

  belongs_to :user
  belongs_to :cheese
end
