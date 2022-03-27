// login section
const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
        } else {
        alert(response.statusText);
        }
    }
};

document
.querySelector('#loginBtn')
.addEventListener('submit', loginFormHandler);

// sign-up section
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#first-name-signup').value.trim();
    // console.log(firstName);
    const lastName = document.querySelector('#last-name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    function getChoice() {
        const modalList = document.querySelector('#modalList');
        // console.log(modalList.children[0].children);
        for (i = 0; i < 20; i++) {
            let teamIdCheck = modalList.children[i].children[0];
            if (teamIdCheck.checked) {
                // console.log(teamIdCheck);
                return teamIdCheck.value;
            }
        }
    }
    let teamId = getChoice();
    console.log(teamId);
  
    if (firstName && lastName && teamId && email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, teamId, email, password })
        // headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/'); //disable back navigation by backspace
      } else {
        alert(response.statusText);
      }
    }
};

document
.querySelector('#signupBtn')
.addEventListener('click', signupFormHandler);
