class Employee < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  # Relations
  has_many :reviews,    class_name: 'Review', foreign_key: 'reviewer_id'
  has_many :feedbacks,  class_name: 'Review', foreign_key: 'reviewee_id'

  # roles
  ROLES = ['Employee', 'Admin'].freeze
end
