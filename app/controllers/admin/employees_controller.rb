class Admin::EmployeesController < ApplicationController
  before_action :set_admin_employee, only: [:show, :update, :destroy]

  # GET /admin/employees
  def index
    @employees = ::Employee.all

    render json: ::Admin::EmployeeSerializer.new(@employees).serialized_json
  end

  # GET /admin/employees/1
  def show
    render json: ::Admin::EmployeeSerializer.new(@employee).serialized_json
  end

  # POST /admin/employees
  def create
    @employee = ::Employee.new(admin_employee_params)

    if @employee.save
      render json: ::Admin::EmployeeSerializer.new(@employee).serialized_json, status: :created, location: @employee
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admin/employees/1
  def update
    if @employee.update(admin_employee_params)
      render json: ::Admin::EmployeeSerializer.new(@employee).serialized_json
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admin/employees/1
  def destroy
    @employee.destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_admin_employee
    @employee = ::Employee.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def admin_employee_params
    params.require(:employee).permit(:name)
  end
end
