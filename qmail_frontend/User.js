class User {
  constructor(id, firstName, lastName, email, password, sentEmails = [], receivedEmails = []) {
    this.id = id,
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.password = password,
    this.sentEmails = sentEmails,
    this.receivedEmails = receivedEmails

    User.all.push(this)
  }
}

User.all = []
