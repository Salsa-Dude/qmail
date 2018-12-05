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
    let recipient = User.all.find(obj => obj.id === this.recipient_id)
    let sender = User.all.find(obj => obj.id === this.sender_id)
    document.querySelector('#email-container').innerHTML = ""
    let from = document.createElement('p')
    from.innerText = `From: ${sender.email}`
    let to = document.createElement('p')
    to.innerText = `To: ${recipient.email}`
    let subject = document.createElement('p')
    subject.innerText = `Subject: ${this.subject}`
    let message = document.createElement('p')
    message.innerText = this.message
    document.querySelector('#email-container').append(from, to, subject, message)
  }


}

SentEmail.all = []
