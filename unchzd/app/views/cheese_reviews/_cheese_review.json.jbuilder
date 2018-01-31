json.extract! cheese_review, :id, :cheese_id, :user_id, :rating, :review, :created_at, :updated_at
json.url cheese_review_url(cheese_review, format: :json)
