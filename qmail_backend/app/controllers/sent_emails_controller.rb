class SentEmailsController < ApplicationController
  def index
    render json: SentEmail.all
  end

  def show
    @email = SentEmail.find(params[:id])
    # @recipient = findRecipientEmail
    # @email["recipient"] = @recipient
    render json: @email
  end

  def create
    render json: SentEmail.create(email_params)
  end

  def update
    SentEmail.find(params[:id]).update(email_params)
    render json: SentEmail.find(params[:id])
  end

  def destroy
    render json: SentEmail.find(params[:id]).destroy
  end

  private

  def email_params
    params.require(:email).permit(:sender_id, :subject, :message, :status, :recipient_id)
  end

end
