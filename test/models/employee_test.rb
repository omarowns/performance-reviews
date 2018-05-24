require 'test_helper'

class EmployeeTest < ActiveSupport::TestCase
  setup do
    @employee = create(:employee)
  end

  test 'as a reviewer I can have many reviews' do
    create_list(:review, 3, reviewer: @employee, reviewee: nil)
    assert_equal @employee.reviews.count, 3
  end
end
