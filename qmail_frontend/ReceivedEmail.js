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
    li.addEventListener('click', (e) => this.renderFullREmail(e))
    return li
  }

  renderFullREmail(e) {
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

ReceivedEmail.all = []
