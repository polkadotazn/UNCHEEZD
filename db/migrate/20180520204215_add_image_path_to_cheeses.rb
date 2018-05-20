class AddImagePathToCheeses < ActiveRecord::Migration[5.1]
  def change
    add_column :cheeses, :image_path, :string,
      :default => "https://s3.us-east-2.amazonaws.com/uncheezd/cheeses/cheese_pics/default_cheese_pic.png"
  end
end
