const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const submit = document.getElementById("form-submit-button");

let email, password;

// db access garera admin ko creds use garne
const creds = {
  email: "user@user.com",
  password: "123456",
};
const origin = window.location.origin;

inputEmail.addEventListener("change", (event) => {
  //   console.log("email: ", event.target.value);
  email = event.target.value;
});
inputPassword.addEventListener("change", (event) => {
  //   console.log("password: ", event.target.value)
  password = event.target.value;
});
submit.addEventListener("click", (event) => {
  event.preventDefault();

  // matching admin credentials
  if (email === creds.email && password === creds.password) {
    // redirecting to dashboard
    window.location.replace(`${origin}/dashboard`);
  } else {
    alert("Wrong email or password");
  }
});
