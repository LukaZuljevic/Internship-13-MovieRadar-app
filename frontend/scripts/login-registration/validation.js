const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isValidEmail(email) {
  return emailRegex.test(email);
}

export function validateLogin(email, password) {
  if (email === "" || password === "") {
    alert("Please insert email and password!");
    return false;
  }

  if (!isValidEmail(email)) {
    alert("Invalid email format! Please enter a valid email.");
    return false;
  }

  if (password.length < 6) {
    alert("Password must have at least 6 characters!");
    return false;
  }

  return true;
}

export function validateRegister(
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) {
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill in all the slots!");
    return false;
  }

  if (!isValidEmail(email)) {
    alert("Invalid email format! Please enter a valid email.");
    return false;
  }

  if (password.length < 6) {
    alert("Password must have at least 6 characters!");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  return true;
}
