@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :email, :location, :created_at
  end
end
