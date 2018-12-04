# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
UserEmail.destroy_all
Email.destroy_all

@Joseph = User.create!(first_name: "Joseph", last_name: "Arias", password: "123456", email: "joseph@gmail.com")
@Ann = User.create!(first_name: "Ana", last_name: "Harris", password: "123456", email: "ana@gmail.com")
@Paul = User.create!(first_name: "Paul", last_name: "Nick", password: "123456", email: "paul@gmail.com")

@email = Email.create!(sender_id: 1, subject: "Testing", message: "Did you recieve this message?", status: "unread")

@email2 = Email.create!(sender_id: 1, subject: "Second Testing", message: "Can you recieve multiple messages?", status: "unread")

@userEmail1 = UserEmail.create!(recipient: @Ann, recipient_email: @email )
@userEmail2 = UserEmail.create!(recipient: @Ann, recipient_email: @email2 )

