class ReceivedEmail {
  constructor(id, recipient_id, recipient_email_id, sender_id, subject, message, date) {
    this.id = id
    this.recipient_id = recipient_id
    this.recipient_email_id = recipient_email_id
    this.sender_id = sender_id
    this.subject = subject
    this.message = message
    this.date = date

    ReceivedEmail.all.push(this)
  }

// renders all emails in a list
  renderREmail() {
    let li = document.createElement('li')
    li.innerText = this.subject
    li.id = `rec-email-${this.id}`
    li.addEventListener('click', (e) => this.renderFullREmail(e))
    return li
  }

// renders full email message on the entire page
  renderFullREmail(e) {
    e.preventDefault()
    // finding recipient and sender objects
    let recipient = User.all.find(obj => obj.id === this.recipient_id)
    let sender = User.all.find(obj => obj.id === this.sender_id)
    // DOM
    document.querySelector('#email-container').innerHTML = ""
    // 'from' and 'to'
    let from = document.createElement('p')
    from.innerText = `From: ${sender.email}`
    let to = document.createElement('p')
    to.innerText = `To: ${recipient.email}`
    // subject
    let subject = document.createElement('p')
    subject.innerText = `Subject: ${this.subject}`
    // date
    let dateP = document.createElement('p')
    let date = new Date(Date.parse(this.date))
    date = date.toLocaleDateString("en-US")
    dateP.innerText = date
    // message
    let message = document.createElement('p')
    message.innerText = this.message
    document.querySelector('#email-container').append(from, to, subject, date, message)
  }

  deleteEmail(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/received_emails/${this.id}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(data => {
        document.querySelector(`#rec-email-${this.id}`).remove()
        document.querySelector(`#btn-inbox-${this.id}`).remove()
      })
  }

}

ReceivedEmail.all = []
