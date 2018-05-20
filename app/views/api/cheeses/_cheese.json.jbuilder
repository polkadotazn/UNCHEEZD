json.extract! cheese, :id, :name, :description, :category, :brand, :origin, :image_path, :created_at, :updated_at
json.url cheese_url(cheese, format: :json)
