class Review < ApplicationRecord

  # Relations
  belongs_to :reviewer, class_name: 'Employee', foreign_key: 'reviewer_id'
  belongs_to :reviewee, class_name: 'Employee', foreign_key: 'reviewee_id'
end
