class UserEmail < ApplicationRecord
  belongs_to :recipient_email, class_name: "Email"
  belongs_to :recipient, class_name: "User"
end
