class AddDefaultsToReviews < ActiveRecord::Migration[5.2]
  def change
    change_column_default :reviews, :feedback, ''
    change_column_default :reviews, :status, 0
  end
end
