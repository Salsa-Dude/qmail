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

@Joseph = User.create!(first_name: "Joseph", last_name: "Arias", password: "123456", email: "joseph@qmail.com")
@Ann = User.create!(first_name: "Ana", last_name: "Harris", password: "123456", email: "ana@qmail.com")
@Paul = User.create!(first_name: "Paul", last_name: "Nicholsen", password: "123456", email: "paul@qmail.com")
@Lane = User.create!(first_name: "Lane", last_name: "Miller", password: "123456", email: "lane@qmail.com")
@Jenni = User.create!(first_name: "Jenni", last_name: "Ingram", password: "123456", email: "jenni@qmail.com")
@Iman = User.create!(first_name: "Iman", last_name: "Jawad", password: "123456", email: "iman@qmail.com")
@Caroline = User.create!(first_name: 'Caroline', last_name: 'Lee', password: '123', email: 'caroline@qmail.com')
@Mike = User.create!(first_name: 'Mike', last_name: 'Kim', password: '123', email: 'mike@qmail.com')
@Robin = User.create!(first_name: 'Robin', last_name: 'Tram', password: '123', email: 'robin@qmail.com')
@Marissa = User.create!(first_name: 'Marissa', last_name: 'McHugh', password: '123', email: 'marissa@qmail.com')

@email = SentEmail.create!(sender_id: @Joseph.id, recipient_id: @Ann.id,  subject: "Hey", message: "Did you recieve this message?", status: "unread")

@email2 = SentEmail.create!(sender_id: @Joseph.id, recipient_id: @Ann.id, subject: "What if you..", message: "...could recieve multiple messages?", status: "unread")

@email3 = SentEmail.create!(sender_id: @Ann.id, recipient_id: @Joseph.id, subject: 'Yaaay!', message: "It works!", status: "unread")

@email4 = SentEmail.create!(sender_id: @Paul.id, recipient_id: @Joseph.id, subject: "I'm a subject", message: "I'm just a dummy email data", status: "unread")

@email5 = SentEmail.create!(sender_id: @Ann.id, recipient_id: @Paul.id, subject: "Cat", message: "Hey Paul, check out this cat.", status: "unread")

@userEmail1 = ReceivedEmail.create!(recipient: @Ann, recipient_email: @email, sender_id: @Joseph.id, subject: @email.subject, message: @email.message )
@userEmail2 = ReceivedEmail.create!(recipient: @Ann, recipient_email: @email2, sender_id: @Joseph.id, subject: @email2.subject, message: @email2.message )
@userEmail3 = ReceivedEmail.create!(recipient: @Joseph, recipient_email: @email3, sender_id: @Ann.id, subject: @email3.subject, message: @email3.message )
@userEmail4 = ReceivedEmail.create!(recipient: @Joseph, recipient_email: @email4, sender_id: @Paul.id, subject: @email4.subject, message: @email4.message )
@userEmail5 = ReceivedEmail.create!(recipient: @Paul, recipient_email: @email5, sender_id: @Ann.id, subject: @email5.subject, message: @email5.message )
