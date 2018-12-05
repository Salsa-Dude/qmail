class SentEmailSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :subject, :message, :status, :recipient_id, :created_at

  # has_many :recipients, through: :received_emails

end
