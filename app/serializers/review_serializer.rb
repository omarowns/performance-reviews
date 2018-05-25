class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :feedback, :status
  belongs_to :reviewer, record_type: :employee
  belongs_to :reviewee, record_type: :employee

  attribute :reviewer_name do |object|
    object.reviewer.name
  end

  attribute :reviewee_name do |object|
    object.reviewee.name
  end
end
