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

  def update
    @task = Task.find(params[:id])

    if @task.update(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def filter
    if params[:filter_term] == ""
      @tasks = current_user.tasks
    else
      @tasks = current_user.tasks.where("lower(name) LIKE ?", "%#{params[:filter_term].downcase}%")
      render :index;
    end
  end

  def bulk_update_complete
    tasks = Task.where(id: params[:checks])
    tasks.update_all(complete: true)
    @tasks = current_user.tasks
    render :index
  end

  def bulk_update_due_date
    tasks = Task.where(id: params[:checks])
    if params[:date] == ""
      tasks.update_all(due_date: nil)
    else
      tasks.update_all(due_date: Date.today + Integer(params[:date]))
    end
    @tasks = current_user.tasks
    render :index
  end

  def bulk_update_list
    tasks = Task.where(id: params[:checks])
    tasks.update_all(list_id: params[:list_id])
    @tasks = current_user.tasks
    render :index
  end

  def bulk_destroy_tasks
    tasks = current_user.tasks.where(id: params[:checks])
    tasks.delete_all
    @tasks = current_user.tasks
    render :index
  end

  private
  def task_params
    params.require(:task)
      .permit(:name, :due_date, :estimate, :notes, :complete, :list_id)
  end
end
