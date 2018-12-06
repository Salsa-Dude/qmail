
document.addEventListener('DOMContentLoaded', () => {
  submit_login().addEventListener('click', getFormValues)
  signupLink().addEventListener('click', registerUser)
 
  let menuDiv = document.querySelector('#menu')
  menuDiv.style.display = 'none';
  registerUserDiv().style.display = 'none'
 })

// login form input and fetching that user
 function getFormValues(e) {
   e.preventDefault();
   let emailInput = document.getElementById('email');
   let passwordInput = document.getElementById('password');
   let emailValue = emailInput.value
   let passwordValue = passwordInput.value
   fetchUser(emailValue, passwordValue)
 }

// signup form
 function registerUser() {
  loginFormDiv().style.display = "none";
  // Center form
  registerUserDiv().style.display = "block"
  let column = document.getElementById('registerUserInner');
  column.classList.add('put-center')
  // add event listener
  let submitSignup = document.getElementById('submit_signup')
  submitSignup.addEventListener('click', postUser)
  let loginLink = document.getElementById('login-link');
  loginLink.addEventListener('click', loginUser )
 }

// create a new user
 function postUser() {
  registerUserDiv().style.display = "none"
   console.log('fetching.....')
 }

// login
 function loginUser() {
   loginFormDiv().style.display = 'block'
   registerUserDiv().style.display = 'none'
  let column = document.getElementById('loginFormInner');
  column.classList.add('put-center')
 }

// find user from db when logging in
 function fetchUser(emailValue, passwordValue) {
  fetch(`http://localhost:3000/users`)
    .then(response => response.json())
    .then(data => {
      let user = data.find(obj => {
        return obj.email === emailValue
      })
      if (user) {
        loginFormDiv().style.display = 'none';
        let newUser = new User(user.id, user.first_name, user.last_name, user.email, user.password, user.sent_emails, user.received_emails)
        newUser.render()
        data.forEach(obj => User.all.push(obj))
      } else {
        showError()
      }
    })
 }

// error message
 function showError() {
  let div = document.createElement('div')
  div.innerText = "Wrong combination of Email/Password"
  div.classList.add('error')
  loginForm().parentElement.insertBefore(div, loginForm())
 }

// get element
 function registerUserDiv() {
   return document.getElementById('registerUserDiv')
 }

 function loginFormDiv() {
   return document.getElementById('loginFormDiv');
 }

 function loginForm() {
   return document.querySelector('.form')
 }

 function submit_login() {
  return document.getElementById('submit_login')
}

 function emailInput() {
   return document.getElementById('email')
 }

 function passwordInput() {
  return document.getElementById('password')
}

function signupLink() {
  return document.getElementById('signup-link');
}
