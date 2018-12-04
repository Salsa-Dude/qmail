class EmailsController < ApplicationController
  def index 
    render json: Email.all
  end

  def show 
    render json: Email.find(params[:id])
  end

  def create
    render json: Email.create(email_params)
  end

  def update
    Email.find(params[:id]).update(email_params)
    render json: Email.find(params[:id])
  end

  def destroy
    render json: Email.find(params[:id]).destroy
  end

  private
  
  def email_params
    params.require(:email).permit(:sender_id, :subject, :message, :status)
  end
end


