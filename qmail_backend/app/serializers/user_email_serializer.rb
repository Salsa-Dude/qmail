class UserEmailSerializer < ActiveModel::Serializer
  attributes :id, :recipient_id, :recipient_email_id
end
