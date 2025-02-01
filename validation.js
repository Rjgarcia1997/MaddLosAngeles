const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const lastname_input = document.getElementById('lastname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent submit

  let errors = []

    if(firstname_input){

    // if we have a firstname input we are in the register page
    errors = getregisterformErrors(firstname_input.value, lastname_input.value, email_input.value, password_input.value);


  
  } else {
    // if we don't have a firstname input we are in the login page
    errors = getloginformErrors(email_input.value, password_input.value)
  }

    if (errors.length > 0) {
      //if there are any errors
      e.preventDefault();
      error_message.innerText = errors.join('. ');
    }
  });

  function getregisterformErrors(firstname, lastname, email, password) {
    let errors = [];

    if (firstname === '' || firstname === null) {
      errors.push('Firstname is required');
      firstname_input.parentElement.classList.add('incorrect');
    }

    if (lastname === '') {
      errors.push('Lastname is required');
      lastname_input.parentElement.classList.add('incorrect');
      
    }

    if (email === '') {
      errors.push('Email is required');
      email_input.parentElement.classList.add('incorrect');
    } else if (!isValidEmail(email)) {
      errors.push('Email is invalid');
    }

    if (password === '') {
      errors.push('Password is required');
      password_input.parentElement.classList.add('incorrect');
    }
       if(password.length < 6) {
      errors.push('Password must be at least 6 characters');
        password_input.parentElement.classList.add('incorrect');
    }

    if (email === '') {
      errors.push('Email is required');
      email_input.parentElement.classList.add('incorrect');
    } else if (!isValidEmail(email)) {
      errors.push('Email is invalid');
    }
  
  const allinputs = [firstname_input, lastname_input, email_input, password_input];
  allinputs.forEach((input) => {
    input.addEventListener('input', () => {
      if(input.parentElement.classList.contains('incorrect')) {
        input.parentElement.classList.remove('incorrect');
        error_message.innerText = '';
      }
    });
  });

  return errors;
}

function getloginformErrors(email, password) {
  let errors = [];

  if (email === '') {
    errors.push('Email is required');
    email_input.parentElement.classList.add('incorrect');
  } else if (!isValidEmail(email)) {
    errors.push('Email is invalid');
  }

  if (password === '') {
    errors.push('Password is required');
    password_input.parentElement.classList.add('incorrect');
  } else if (password.length < 6) {
    errors.push('Password must be at least 6 characters');
    password_input.parentElement.classList.add('incorrect');
  }

  const allinputs = [email_input, password_input];
  allinputs.forEach((input) => {
    input.addEventListener('input', () => {
      if(input.parentElement.classList.contains('incorrect')) {
        input.parentElement.classList.remove('incorrect');
        error_message.innerText = '';
      }
    });
  });

  return errors;
}