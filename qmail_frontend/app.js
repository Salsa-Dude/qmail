
document.addEventListener('DOMContentLoaded', () => {
  submit_login().addEventListener('click', getFormValues)
  signupLink().addEventListener('click', registerUser)

  registerUserDiv().style.display = 'none'
 })

 function getFormValues(e) {
   e.preventDefault();
   let emailInput = document.getElementById('email');
   let passwordInput = document.getElementById('password');

   let emailValue = emailInput.value
   let passwordValue = passwordInput.value

   fetchUser(emailValue, passwordValue)

 }

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

 function postUser() {
  registerUserDiv().style.display = "none"
   console.log('fetching.....')
 }

 function loginUser() {
   loginFormDiv().style.display = 'block'
   registerUserDiv().style.display = 'none'

  let column = document.getElementById('loginFormInner');
  column.classList.add('put-center')
 }

 function fetchUser(emailValue, passwordValue) {
  fetch(`http://localhost:3000/users`)
    .then(response => response.json())
    .then(data => {
      let flag = data.find(user => {
        return user.email === emailValue || user.password === passwordValue
      })
      if (flag) {
        // Make User Class
        console.log('make class')
        loginFormDiv().style.display = 'none';
      } else {
        showError()
      }
    })
 }

 function showError() {
  let div = document.createElement('div')
  div.innerText = "Wrong combination of Email/Password"
  div.classList.add('error')

  loginForm().parentElement.insertBefore(div, loginForm())

 }

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
