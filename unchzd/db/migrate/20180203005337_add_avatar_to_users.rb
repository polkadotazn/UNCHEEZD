class AddAvatarToUsers < ActiveRecord::Migration[5.1]
  def self.up
    add_attachment :users, :avatar
  end

  def self.down
    remove_attachment :users, :avatar
  end
end
