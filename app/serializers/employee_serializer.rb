class EmployeeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name

  has_many :reviews, record_type: :review
  has_many :feedbacks, record_type: :review
end
