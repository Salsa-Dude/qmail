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
    // let closeBtn = document.querySelector('.close');
    // console.log(closeBtn);
    // DOM elements
    let messageBtn = document.getElementById('newMessageBtn');
    messageBtn.addEventListener('click', () => {
      this.checkUser();
    }) 
  }

  checkUser() {
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
                  console.log(data)
            })
          })
        .then(response => response)
        .catch(error => console.error('Error:', error));
        
        
      }
    })
  }
}

User.all = []
