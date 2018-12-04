class SentEmail {
  constructor(id, sender_id, recipient_id, subject, message, status) {
    this.id = id
    this.sender_id = sender_id
    this.recipient_id = recipient_id
    this.subject = subject
    this.message = message
    this.status = status

    SentEmail.all.push(this)
  }
}

SentEmail.all = []
