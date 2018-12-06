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
      this.sentEmails.push(new SentEmail(email.id, this.id, email.recipient_id, email.subject, email.message, email.status, email.created_at))
    })

    receivedEmails.forEach( email => {
      this.receivedEmails.push(new ReceivedEmail(email.id, this.id, email.recipient_email_id, email.sender_id, email.subject, email.message, email.created_at))
    })
  }


  render() {
    let menuDiv = document.querySelector('#menu')
    let emailDiv = document.querySelector('#email-container')
    let compose = document.querySelector('#compose-btn')
    let inbox = document.querySelector('#inbox-btn')
    let sent = document.querySelector('#sent-btn')

    menuDiv.style.display = 'block'
    create.innerText = 'Compose'
    inbox.innerText = 'Inbox'
    sent.innerText = 'Sent Emails'
    create.addEventListener('click', (e) => this.createEmail(e))
    inbox.addEventListener('click', (e) => this.renderInbox(e))
    sent.addEventListener('click', (e) => this.renderSentEmails(e))
  }

  renderInbox(e) {
    e.preventDefault()
    // creating table elements
    let table = document.createElement('table')
    table.classList.add('ui', 'selectable', 'celled', 'table')
    let thead = document.createElement('thead')
    let tags = document.createElement('tr')
    let from = document.createElement('th')
    from.innerText = 'From:'
    let subject = document.createElement('th')
    subject.innerText = 'Subject:'
    let date = document.createElement('th')
    date.innerText = 'Date:'
    let tbody = document.createElement('tbody')
    // append
    table.append(thead, tbody)
    thead.appendChild(tags)
    tags.append(from, subject, date)
    document.querySelector('#email-container').innerHTML = ""
    // render and append emails
    this.receivedEmails.forEach( email => {
      table.appendChild(email.renderREmail())
      let btn = document.createElement('button')
      btn.innerText = 'Delete'
      btn.id = `btn-inbox-${email.id}`
      btn.addEventListener('click', (e) => email.deleteEmail(e))
      table.appendChild(btn)
    })
    // append all this to the email-container div
    document.querySelector('#email-container').appendChild(table)
  }

  renderSentEmails(e) {
    e.preventDefault()
    let list = document.createElement('ul')
    document.querySelector('#email-container').innerHTML = ""
    this.sentEmails.forEach( email => {
      list.appendChild(email.renderSEmail())
      let btn = document.createElement('button')
      btn.innerText = 'Delete'
      btn.id = `btn-sent-${email.id}`
      btn.addEventListener('click', (e) => email.deleteEmail(e))
      list.appendChild(btn)
    })
    document.querySelector('#email-container').appendChild(list)
  }

  createEmail() {
    let modal = document.getElementById('myModal');
    modal.style.display = "block"

    // DOM elements
    let messageBtn = document.getElementById('newMessageBtn');
    let newToInput = document.getElementById('newTo');
    let newSubject = document.getElementById('newSubject');
    let newText = document.getElementById('newText');
    let xSpan = document.querySelector('.closeX');

    xSpan.addEventListener('click', () => {
      modal.style.display = "none"
    })

    // MessageBtn validation
    messageBtn.addEventListener('click', () => {
      if(newToInput.value === "" || newSubject === "" || newText === "" ) {
        return;
      } else {
        this.checkUser();
      }
    })
  }

  checkUser() {
    let modal = document.getElementById('myModal');
    modal.style.display = "none"
    console.log('checking user')
    // Getting sender input and adding this.id to value
    let senderId = this.id
    let senderHiddenInput = document.getElementById('senderId')
    senderHiddenInput.value = senderId;
    // Form DOM elements
    let newToInput = document.getElementById('newTo');
    let newSubject = document.getElementById('newSubject');
    let newText = document.getElementById('newText');
    let statusInput = document.getElementById('status')

    // Getting recipient_id
    User.all.forEach(user => {
      let recipientEmail = newToInput.value;

      if (user.email === recipientEmail) {
        let data = {
          sender_id: this.id,
          subject: newSubject.value,
          message: newText.value,
          status: statusInput.value,
          recipient_id: user.id
        }

        fetch('http://localhost:3000/sent_emails', {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json())
          .then(data => {
            let stringData = {
              recipient_id: data.recipient_id,
              recipient_email_id: data.id,
              sender_id: data.sender_id,
              subject: data.subject,
              message: data.message,
            }
            console.log(data)
            fetch('http://localhost:3000/received_emails', {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(stringData)
            }).then(response => response.json())
              .then(data => {
                  console.log(User.all)
                  console.log(data)
            })
          })
        .then(response => response)
        .catch(error => console.error('Error:', error));
      } else {
        console.log('nope')
      }
    })
  }
}

User.all = []
