class CreateReceivedEmails < ActiveRecord::Migration[5.2]
  def change
    create_table :received_emails do |t|
      t.belongs_to :recipient, class_name: "User"
      t.belongs_to :recipient_email, class_name: "SentEmail"
      t.integer :sender_id
      t.string :subject
      t.text :message
      t.timestamps
    end
  end
end
