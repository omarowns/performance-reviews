require 'test_helper'

class EmployeesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @employee = create(:employee)
  end

  test "should get index" do
    get employees_url, as: :json
    assert_response :success
  end

  test "should show employee" do
    get employee_url(@employee), as: :json
    assert_response :success
  end
end
