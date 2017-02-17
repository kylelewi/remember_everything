class Api::TasksController < ApplicationController
  def index
    @tasks = current_user.tasks
  end

  def show
    @task = Task.find(params[:id])
  end

  def create
    @task = Task.new(task_params)
    @task.user = current_user
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  private
  def task_params
    params.require(:task)
      .permit(:name, :due_date, :estimate, :notes, :complete, :list_id)
  end
end
