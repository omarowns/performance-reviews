class AddDefaultsToEmployee < ActiveRecord::Migration[5.2]
  def change
    change_column_default :employees, :role, 'Employee'
  end
end
