class Admin::EmployeesController < ApplicationController
  before_action :set_admin_employee, only: [:show, :update, :destroy]

  # GET /admin/employees
  def index
    @mployees = ::Employee.all

    render json: @mployees
  end

  # GET /admin/employees/1
  def show
    render json: @employee
  end

  # POST /admin/employees
  def create
    @employee = ::Employee.new(admin_employee_params)

    if @employee.save
      render json: @employee, status: :created, location: @employee
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admin/employees/1
  def update
    if @employee.update(admin_employee_params)
      render json: @employee
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
    params.fetch(:employee, {})
  end
end
