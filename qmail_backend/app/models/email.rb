class Email < ApplicationRecord
  belongs_to :sender, class_name: "User"
  has_many :user_emails, foreign_key: "recipient_email_id"
  has_many :recipients, through: :user_emails
end
