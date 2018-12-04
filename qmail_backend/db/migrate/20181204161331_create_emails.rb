class CreateEmails < ActiveRecord::Migration[5.2]
  def change
    create_table :emails do |t|
      t.belongs_to :sender, class_name: "User"
      t.string :subject
      t.string :message
      t.string :status
      t.timestamps
    end
  end
end
