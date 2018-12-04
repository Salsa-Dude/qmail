class User < ApplicationRecord
  has_many :sent_emails
  has_many :sent_emails, foreign_key: "sender_id"
  has_many :received_emails, foreign_key: "recipient_id"
  has_many :recipient_emails, through: :received_emails
end
