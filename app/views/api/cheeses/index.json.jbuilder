@cheeses.each do |cheese|
  json.set! cheese.id do
    json.extract! cheese, :id, :name, :description, :category, :brand, :origin, :created_at, :updated_at
  end
end
