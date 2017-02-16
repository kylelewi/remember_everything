class Api::ListsController < ApplicationController
  def index
    @lists = current_user.lists
  end

  def create
    @list = List.new(list_params)
    @list.user = current_user
    if @list.save
      render json: @list
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  private
  def list_params
    params.require(:list).permit(:name)
  end
end
