class ReceivedEmailsController < ApplicationController

  def index
    render json: ReceivedEmail.all
  end

  def show
    @email = ReceivedEmail.find(params[:id])
    render json: @email
  end

  def create
    render json: ReceivedEmail.create(email_params)
  end

  def update
    ReceivedEmail.find(params[:id]).update(email_params)
    render json: ReceivedEmail.find(params[:id])
  end

  def destroy
    render json: ReceivedEmail.find(params[:id]).destroy
  end

  private

  def email_params
    params.require(:email).permit(:recipient_id, :recipient_email_id, :sender_id, :subject, :message)
  end

end
