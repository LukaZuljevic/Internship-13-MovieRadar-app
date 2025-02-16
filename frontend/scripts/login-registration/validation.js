export function validatePassword(password, confirmPassword = null) {
  if (password.length < 6) {
    alert("Password must have at least 6 characters!");
    return false;
  }

  if (confirmPassword !== null && password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  return true;
}
