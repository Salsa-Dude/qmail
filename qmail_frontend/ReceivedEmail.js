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
    let tr = document.createElement('tr')
    tr.id = `rec-email-${this.id}`
    let email = document.createElement('td')
    email.innerText = this.sender().email
    let subject = document.createElement('td')
    subject.innerText = this.subject
    let date = document.createElement('td')
    date.innerText = this.formatDate()
    let tdBtn = document.createElement('td')
    let btn = document.createElement('a')
    tdBtn.appendChild(btn)
    btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
    btn.id = `btn-inbox-${this.id}`
    btn.addEventListener('click', (e) => this.deleteEmail(e))
    tr.append(email, subject, date, tdBtn)
    email.addEventListener('click', (e) => this.renderFullREmail(e))
    return tr
  }

// renders full email message on the entire page
  renderFullREmail(e) {
    e.preventDefault()
    // clears the email-container div
    document.querySelector('#email-container').innerHTML = ""
    // 'from' and 'to'
    let from = document.createElement('p')
    from.classList.add('ui', 'dividing', 'header')
    from.innerText = `From: ${this.sender().email}`
    // create reply
    from.innerHTML += `<i class="fas fa-reply"></i>`
    let to = document.createElement('p')
    to.classList.add('ui', 'dividing', 'header')
    to.innerText = `To: ${this.recipient().email}`
    // subject
    let subject = document.createElement('p')
    subject.classList.add('ui', 'dividing', 'header')
    subject.innerText = `Subject: ${this.subject}`
    // date
    // let date = document.createElement('p')
    // date.innerText = this.formatDate()
    // message
    let message = document.createElement('p')
    message.classList.add('email-message')
    message.innerText = this.message
   
    // append
    document.querySelector('#email-container').append(from, to, subject, message)
  }

// deletes email from the DB and removes the DOM element
  deleteEmail(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/received_emails/${this.id}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(data => {
        document.querySelector(`#rec-email-${this.id}`).remove()
      })
  }

// finds recipient for given email
  recipient() {
    return User.all.find(obj => obj.id === this.recipient_id)
  }

// finds sender for given email
  sender() {
    return User.all.find(obj => obj.id === this.sender_id)
  }

// formats date to MM/DD/YYYY
  formatDate() {
    let date = new Date(Date.parse(this.date))
    return date.toLocaleDateString("en-US")
  }
}

ReceivedEmail.all = []
