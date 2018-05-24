FactoryBot.define do
  factory :employee do
    sequence :email { |n| "person#{n}@example.com" }
    sequence :name { |n| "John Doe #{n}" }

    role 'Employee'
  end
end
