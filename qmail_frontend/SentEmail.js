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
    li.addEventListener('click', (e) => this.renderFullSEmail(e))
    return li
  }

  renderFullSEmail(e) {
    e.preventDefault()
    document.querySelector('#email-container').innerHTML = ""
    let from = document.createElement('p')
    from.innerText = `From: ${this.sender_id}`
    let subject = document.createElement('p')
    subject.innerText = `Subject: ${this.subject}`
    let message = document.createElement('p')
    message.innerText = this.message
    document.querySelector('#email-container').append(from, subject, message)
  }
}

SentEmail.all = []
