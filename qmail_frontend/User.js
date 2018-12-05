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
  }


  render() {
    let menuDiv = document.querySelector('#menu')
    let emailDiv = document.querySelector('#email-container')
    let create = document.createElement('button')
    let inbox = document.createElement('button')
    let sent = document.createElement('button')


    create.innerText = 'Compose'
    inbox.innerText = 'Inbox'
    sent.innerText = 'Sent Emails'
    create.addEventListener('click', (e) => this.createEmail(e))
    inbox.addEventListener('click', (e) => this.renderInbox(e))
    sent.addEventListener('click', (e) => this.renderSentEmails(e))
    menuDiv.append(create, inbox, sent)
  }

  renderInbox(e) {
    e.preventDefault()
    let list = document.createElement('ul')
    document.querySelector('#email-container').innerHTML = ""
    this.receivedEmails.forEach( email => {
      list.appendChild(email.renderREmail())
    })
    document.querySelector('#email-container').appendChild(list)
  }

  renderSentEmails(e) {
    e.preventDefault()
    let list = document.createElement('ul')
    document.querySelector('#email-container').innerHTML = ""
    this.sentEmails.forEach( email => {
      list.appendChild(email.renderSEmail())
    })
    document.querySelector('#email-container').appendChild(list)
  }

  createEmail() {
    let modal = document.getElementById('myModal');
    modal.style.display = "block"
    // DOM elements
    let messageBtn = document.getElementById('newMessageBtn');
    messageBtn.addEventListener('click', () => {
      this.checkUser();
    })
  }

  checkUser() {
    console.log('checking user')
    console.log(User.all)
    // Getting sender input and adding this.id to value
    let senderId = this.id
    let senderHiddenInput = document.getElementById('senderId')
    senderHiddenInput.value = senderId;
    // Form DOM elements
    let newToInput = document.getElementById('newTo');
    let newSubject = document.getElementById('newSubject');
    let newText = document.getElementById('newText');
    // Getting recipient_id
    User.all.forEach(user => {
      let recipientEmail = newToInput.value;

      if (user.email === recipientEmail) {
      }
    })
  }
}

User.all = []
