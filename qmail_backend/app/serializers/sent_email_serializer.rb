class SentEmailSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :subject, :message, :status, :recipient_id
end
