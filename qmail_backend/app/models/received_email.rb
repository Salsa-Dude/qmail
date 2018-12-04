class ReceivedEmail < ApplicationRecord
  belongs_to :recipient_email, class_name: "SentEmail"
  belongs_to :recipient, class_name: "User"
end
