class AddImageToCheeses < ActiveRecord::Migration[5.1]
  def self.up
    change_table :cheeses do |t|
      t.attachment :cheese_pic
    end
  end

  def self.down
    remove_attachment :cheeses, :cheese_pic
  end
end
