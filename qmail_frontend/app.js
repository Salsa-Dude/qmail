document.addEventListener('DOMContentLoaded', () => {
 loginForm().addEventListener('submit', getFormValues)
})

function getFormValues(e) {
  e.preventDefault();
  let emailInput = document.getElementById('email');
  let passwordInput = document.getElementById('password');

  let emailValue = emailInput.value
  let passwordValue = passwordInput.value

  fetchUser(emailValue, passwordValue)
  
}

function fetchUser(emailValue, passwordValue) {
 
}

function loginForm() {
  return document.querySelector('.ui')
} 
