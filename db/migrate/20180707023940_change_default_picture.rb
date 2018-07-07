class ChangeDefaultPicture < ActiveRecord::Migration[5.1]
  def change
    change_column_default :cheeses, :image_path, "http://res.cloudinary.com/dwhul27lp/image/upload/v1530922524/default_cheese_pic.png"
  end
end
