FactoryBot.define do
  factory :employee do
    sequence(:name) { |n| "John Doe #{n}" }
    role 'Employee'
  end
end
