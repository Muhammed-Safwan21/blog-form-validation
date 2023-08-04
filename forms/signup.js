function validateName() {
  let nameError = document.getElementById("username-error");
  let name = document.getElementById("username");

  if (name.value.trim() == "") {
    nameError.innerHTML = "username cannot be blank";
    return false;
  } else if (name.value.length < 5) {
    nameError.innerHTML = "username must not be less than 5 characters";
    return false;
  } else {
    nameError.innerHTML = "";
    return true;
  }
}
function validateEmail() {
  let email = document.getElementById("email");
  let emailError = document.getElementById("email-error");
  let regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value.trim() == "") {
    emailError.innerHTML = "Email cannot be blank!!";
    return false;
  } else if (!email.value.match(regEx)) {
    emailError.innerHTML = "inavalid email";
    return false;
  } else {
    emailError.innerHTML = "";
    return true;
  }
}

function validatePassword() {
  let password = document.getElementById("password");
  let passwordError = document.getElementById("password-error");

  if (password.value.trim() == "") {
    passwordError.innerHTML = "password cannot be blank";
    return false;
  } else if (password.value.length < 8) {
    passwordError.innerHTML = " password must not be less than 8 characters";
    return false;
  } else {
    passwordError.innerHTML = "";
    return true;
  }
}
function validateConfirm() {
  let password = document.getElementById("password");
  let repeatPassword = document.getElementById("confirmPassword");
  let repeatError = document.getElementById("confirmPassword-error");

  if (password.value != repeatPassword.value) {
    repeatError.innerHTML = "Password mismatch";
    return false;
  } else {
    repeatError.innerHTML = "";
    return true;
  }
}

function validateForm() {
  let submitError = document.getElementById("submit-error");
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePassword() ||
    !validateConfirm()
  ) {
    submitError.innerHTML = "Please resolve the errors";
    return false;
  } else {
    submitError.innerHTML = "";
    return true;
  }
}

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
togglePassword.addEventListener("click", () => {
 
  const type =
  password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  togglePassword.classList.toggle("fa-eye");
});

const toggleConfirm = document.querySelector("#toggleConfirm");
const confirmPassword = document.querySelector("#confirmPassword");
toggleConfirm.addEventListener("click", () => {
 
  const type =
  confirmPassword.getAttribute("type") === "password" ? "text" : "password";
  confirmPassword.setAttribute("type", type);
  toggleConfirm.classList.toggle("fa-eye");
});