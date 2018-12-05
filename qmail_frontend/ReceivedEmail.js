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

  renderREmail() {
    let li = document.createElement('li')
    li.innerText = this.subject
    li.addEventListener('click', (e) => this.renderFullREmail(e))
    return li
  }

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
}

ReceivedEmail.all = []
