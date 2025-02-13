import { setupLoginRegister } from "./login-registration/login.js";

document.addEventListener("DOMContentLoaded", function () {
  const token = getCookie("secretKey");
  if (token) {
    window.location.href = "landingPage.html";
  } else {
    setupLoginRegister();
  }
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}
