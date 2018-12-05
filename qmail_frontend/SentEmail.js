class SentEmail {
  constructor(id, sender_id, recipient_id, subject, message, status='unread') {
    this.id = id
    this.sender_id = sender_id
    this.recipient_id = recipient_id
    this.subject = subject
    this.message = message
    this.status = status

    SentEmail.all.push(this)
  }

  renderSEmail() {
    let li = document.createElement('li')
    li.innerText = this.subject
    let p = document.createElement('p')
    p.innerText = this.message
    li.appendChild(p)
    return li
  }
}

SentEmail.all = []
