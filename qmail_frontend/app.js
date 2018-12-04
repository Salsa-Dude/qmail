
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
  registerUserDiv().style.display = "initial"

  let loginLink = document.getElementById('login-link');

  loginLink.addEventListener('click', loginUser )

 }

 function loginUser() {
   loginFormDiv().style.display = 'initial'
   registerUserDiv().style.display = 'none'
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