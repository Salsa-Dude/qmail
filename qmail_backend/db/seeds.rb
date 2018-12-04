# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
ReceivedEmail.destroy_all
SentEmail.destroy_all

@Joseph = User.create!(first_name: "Joseph", last_name: "Arias", password: "123456", email: "joseph@gmail.com")
@Ann = User.create!(first_name: "Ana", last_name: "Harris", password: "123456", email: "ana@gmail.com")
@Paul = User.create!(first_name: "Paul", last_name: "Nick", password: "123456", email: "paul@gmail.com")

@email = SentEmail.create!(sender_id: @Joseph.id, recipient_id: @Ann.id,  subject: "Testing", message: "Did you recieve this message?", status: "unread")

@email2 = SentEmail.create!(sender_id: @Joseph.id, recipient_id: @Ann.id, subject: "Second Testing", message: "Can you recieve multiple messages?", status: "unread")

@email3 = SentEmail.create!(sender_id: @Ann.id, recipient_id: @Joseph.id, subject: "Third Testing", message: "Does this work", status: "unread")

@userEmail1 = ReceivedEmail.create!(recipient: @Ann, recipient_email: @email, sender_id: @Joseph.id )
@userEmail2 = ReceivedEmail.create!(recipient: @Ann, recipient_email: @email2, sender_id: @Joseph.id )
@userEmail3 = ReceivedEmail.create!(recipient: @Joseph, recipient_email: @email3, sender_id: @Ann.id )

