class UsersController < ApplicationController

# Get all fetch
  def index
    render json: User.all
  end

# Get user/id fetch
  def show
    @user = User.find(params[:id])
    render json: @user
  end

# Post fetch
  def create
    render json: User.create(user_params)
  end

# Patch fetch
  def update
    User.find(params[:id]).update(user_params)
    render json: User.find(params[:id])
  end

# Delete fetch
  def destroy
    render json: User.find(params[:id]).destroy
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :email)
  end
end
