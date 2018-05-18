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
  ].sort.freeze

  validates :name, :description, :brand, presence: true
  validates :name, uniqueness: true
  validates :category, inclusion: { in: TYPES }

  has_many :cheese_reviews, dependent: :destroy
  has_attached_file :cheese_pic, styles: { thumb: '100x100>', square: '200x200#', medium: '300x300>' }
  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :cheese_pic, :content_type => /\Aimage\/.*\Z/
end
