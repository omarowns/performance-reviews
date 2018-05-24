FactoryBot.define do
  factory :review do
    association :reviewer, factory: :employee
    association :reviewee, factory: :employee
    feedback 'Whatever'
    status 0
  end
end
