class EmployeesController < ApplicationController
  before_action :set_employee, only: [:show, :update, :destroy]

  # GET /employees
  def index
    @employees = Employee.all

    render json: ::EmployeeSerializer.new(@employees).serialized_json
  end

  # GET /employees/1
  def show
    render json: ::EmployeeSerializer.new(@employee).serialized_json
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employee
      @employee = Employee.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def employee_params
      params.require(:employee).permit(:name)
    end
end
