class CreateSentEmails < ActiveRecord::Migration[5.2]
  def change
    create_table :sent_emails do |t|
      t.belongs_to :sender, class_name: "User"
      t.integer :recipient_id
      t.string :subject
      t.text :message
      t.string :status
      t.timestamps
    end
  end
end
