class Employee < ApplicationRecord

  # Relations
  has_many :reviews,    class_name: 'Review', foreign_key: 'reviewer_id', dependent: :destroy
  has_many :feedbacks,  class_name: 'Review', foreign_key: 'reviewee_id', dependent: :destroy

  # roles
  ROLES = ['Employee', 'Admin'].freeze
end
