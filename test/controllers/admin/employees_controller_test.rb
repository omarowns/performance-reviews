require 'test_helper'

class Admin::EmployeesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_employee = create(:employee)
  end

  test "should get index" do
    get admin_employees_url, as: :json
    assert_response :success
  end

  test "should create admin_employee" do
    assert_difference('::Employee.count') do
      post admin_employees_url, params: { employee: { name: 'W' } }, as: :json
    end

    assert_response 201
  end

  test "should show admin_employee" do
    get admin_employee_url(@admin_employee), as: :json
    assert_response :success
  end

  test "should update admin_employee" do
    patch admin_employee_url(@admin_employee), params: { employee: { name: 'W' } }, as: :json
    assert_response 200
  end

  test "should destroy admin_employee" do
    assert_difference('::Employee.count', -1) do
      delete admin_employee_url(@admin_employee), as: :json
    end

    assert_response 204
  end
end
