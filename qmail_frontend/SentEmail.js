class SentEmail {
  constructor(id, sender_id, recipient_id, subject, message, status='unread', date) {
    this.id = id
    this.sender_id = sender_id
    this.recipient_id = recipient_id
    this.subject = subject
    this.message = message
    this.status = status
    this.date = date

    SentEmail.all.push(this)
  }

// renders all emails in a list
  renderSEmail() {
    let tr = document.createElement('tr')
    tr.id = `sent-email-${this.id}`
    let email = document.createElement('td')
    email.innerText = this.recipient().email
    let subject = document.createElement('td')
    subject.innerText = this.subject
    let date = document.createElement('td')
    date.innerText = this.formatDate()
    let tdBtn = document.createElement('td')
    let btn = document.createElement('a')
    tdBtn.appendChild(btn)
    btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
    btn.id = `btn-sent-${this.id}`
    btn.addEventListener('click', (e) => this.deleteEmail(e))
    tr.append(email, subject, date, tdBtn)
    email.addEventListener('click', (e) => this.renderFullSEmail(e))
    return tr
  }

// renders full email message on the entire page
  renderFullSEmail(e) {
    e.preventDefault()
    document.querySelector('#email-container').innerHTML = ""
    // 'from' and 'to'
    let from = document.createElement('p')
    from.classList.add('ui', 'dividing', 'header')
    from.innerText = `From: ${this.sender().email}`
    let to = document.createElement('p')
    to.classList.add('ui', 'dividing', 'header')
    to.innerText = `To: ${this.recipient().email}`
    // subject
    let subject = document.createElement('p')
    subject.classList.add('ui', 'dividing', 'header')
    subject.innerText = `Subject: ${this.subject}`
    // date
    // let dateP = document.createElement('p')
    // dateP.classList.add('dividing', 'date-paragraph')
    // dateP.innerText = this.formatDate()
    // message
    let message = document.createElement('p')
    message.classList.add('email-message')
    message.innerText = this.message
    document.querySelector('#email-container').append(from, to, subject, message)
  }

// deletes email from the DB and removes the DOM element
  deleteEmail(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/sent_emails/${this.id}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(data => {
        document.querySelector(`#sent-email-${this.id}`).remove()
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

SentEmail.all = []
