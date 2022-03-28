// login section
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert("Incorrect username or password");
    }
  } else {
    alert("You must enter both username and password");
  }
};

document.querySelector("#loginBtn").addEventListener("click", loginFormHandler);

// sign-up section
const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstname = document.querySelector("#firstname").value.trim();
  const lastname = document.querySelector("#lastname").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (firstname && lastname && email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ firstname, lastname, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/"); //disable back navigation by backspace
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Please fill out all sign-up boxes");
  }
};

document.querySelector("#signupBtn").addEventListener("click", signupFormHandler);
