class Admin::EmployeeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :role
end
