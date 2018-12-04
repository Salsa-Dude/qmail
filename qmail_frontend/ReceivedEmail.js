class ReceivedEmail {
  constructor(id, recipient_id, recipient_email_id, sender_id, subject, message) {
    this.id = id
    this.recipient_id = recipient_id
    this.recipient_email_id = recipient_email_id
    this.sender_id = sender_id
    this.subject = subject
    this.message = message

    ReceivedEmail.all.push(this)
  }

  renderREmail() {
    let li = document.createElement('li')
    li.innerText = this.subject
    let p = document.createElement('p')
    p.innerText = this.message
    li.appendChild(p)
    return li
  }
}

ReceivedEmail.all = []
