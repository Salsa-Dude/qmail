document.addEventListener('DOMContentLoaded', () => {
  let id = 1
  fetchAllEmails(id)
}


function fetchAllEmails(id) {
  fetch(`http://localhost:3000/users/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
}
