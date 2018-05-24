class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :feedback
      t.integer :status

      t.timestamps
    end
  end
end
