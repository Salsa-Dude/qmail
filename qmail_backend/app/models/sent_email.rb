class SentEmail < ApplicationRecord
  belongs_to :sender, class_name: "User"
  has_many :received_emails, foreign_key: "recipient_email_id"
  has_many :recipients, through: :received_emails
end
