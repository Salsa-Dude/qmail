class SentEmailSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :subject, :message, :status, :recipient_id

  has_many :recipients, through: :received_emails
  
  # def findRecipientEmail
  #   byebug
  #
  #   User.find_by(params[:recipient_id])
  # end
end
