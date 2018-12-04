class ReceivedEmailSerializer < ActiveModel::Serializer
  attributes :id, :recipient_id, :recipient_email_id, :sender_id, :subject, :message
end
