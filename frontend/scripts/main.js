import { logoutUser } from "./login-registration/api-auth.js";
import { setupLoginRegister } from "./login-registration/login.js";

document.addEventListener("DOMContentLoaded", function () {
  const token = getCookie("secretKey");
  if (token) {
    if (!localStorage.getItem("loginTimestamp")) {
      localStorage.setItem("loginTimestamp", Date.now());
    }

    setInterval(checkSessionTimeout, 5 * 1000);

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

function checkSessionTimeout() {
  console.log("check");
  const loginTimestamp = localStorage.getItem("loginTimestamp");
  if (!loginTimestamp) return;

  const now = Date.now();
  const timeElapsed = now - parseInt(loginTimestamp, 10);
  const sessionDuration = 5 * 1000;

  if (timeElapsed >= sessionDuration) {
    alert("Vasa sesija je istekla! Molimo vas da se ponovo prijavite.");
    logoutUser();
  }
}
