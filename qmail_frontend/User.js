class User {
  constructor(id, firstName, lastName, email, password, sentEmails, receivedEmails) {
    this.id = id,
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.password = password,
    this.sentEmails = [],
    this.receivedEmails = []

    sentEmails.forEach( email => {
      this.sentEmails.push(new SentEmail(email.id, this.id, email.recipient_id, email.subject, email.message, email.status))
    })

    receivedEmails.forEach( email => {
      this.receivedEmails.push(new ReceivedEmail(email.id, this.id, email.recipient_email_id, email.sender_id, email.subject, email.message))
    })

    User.all.push(this)
  }

  render() {
    document.querySelector('#username').innerText = this.firstName
    document.querySelector('#email-container').innerHTML = ""
    document.querySelector('#inbox').addEventListener('click', (e) => this.renderInbox(e))
    document.querySelector('#sent').addEventListener('click', (e) => this.renderSentEmails(e))
  }

  renderInbox(e) {
    e.preventDefault()
    document.querySelector('#email-container').innerHTML = ""
    this.receivedEmails.forEach( email => {
      document.querySelector('#email-container').appendChild(email.renderREmail())
    })
  }

  renderSentEmails(e) {
    e.preventDefault()
    document.querySelector('#email-container').innerHTML = ""
    this.sentEmails.forEach( email => {
      document.querySelector('#email-container').appendChild(email.renderSEmail())
    })
  }
}

User.all = []
