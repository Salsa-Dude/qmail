document.addEventListener('DOMContentLoaded', function() {
  // once we add login form id will come from there
  // id => id of the logged in user
  fetchAllEmails(1)
})


function fetchAllEmails(id) {
  fetch(`http://localhost:3000/users/${id}`)
    .then(res => res.json())
    .then(data => {
       let user = new User(data.id, data.first_name, data.last_name, data.email, data.password, data.sent_emails, data.received_emails)
  user.render()
    })
}
