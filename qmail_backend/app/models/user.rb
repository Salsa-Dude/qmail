class User < ApplicationRecord
  has_many :emails
  has_many :emails, foreign_key: "sender_id"
  has_many :user_emails, foreign_key: "recipient_id"
  has_many :recipient_emails, through: :user_emails
end
