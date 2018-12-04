class EmailSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :subject, :message, :status
end
