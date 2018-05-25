class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :feedback, :status

  belongs_to :reviewer, record_type: :employee
  belongs_to :reviewee, record_type: :employee
end
