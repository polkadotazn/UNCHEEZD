class Cheese < ApplicationRecord
  TYPES = [
    'cheddar',
    'swiss',
    'fresh',
    'english',
    'dutch',
    'port salut',
    'tilsit',
    'blue',
    'hard',
    'soft-ripening',
    'washed rind',
    'goat/sheep',
    'processed',
    'other'
  ]

  validates :name, :description, :brand, presence: true
  validates :name, uniqueness: true
  validates :category, inclusion: { in: TYPES }

  has_many :cheese_reviews
end
