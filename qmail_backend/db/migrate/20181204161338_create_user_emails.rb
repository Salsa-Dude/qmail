class CreateUserEmails < ActiveRecord::Migration[5.2]
  def change
    create_table :user_emails do |t|
      t.belongs_to :recipient, class_name: "User"
      t.belongs_to :recipient_email, class_name: "Email"
      t.timestamps
    end
  end
end
