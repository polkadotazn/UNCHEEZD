@cheese_reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :cheese_id, :user_id, :rating, :review, :created_at, :updated_at
  end
end
