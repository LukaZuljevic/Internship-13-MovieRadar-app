import { logoutUser } from "./api-auth.js";

const logoutBtns = document.querySelectorAll(".logout-btn");
let isLoggingOut = false;

const token = localStorage.getItem("token");
if (token) {
  if (!localStorage.getItem("loginTimestamp")) {
    localStorage.setItem("loginTimestamp", Date.now().toString());
  }
  setInterval(checkSessionTimeout, 60 * 1000);
}

function checkSessionTimeout() {
  const loginTimestamp = localStorage.getItem("loginTimestamp");
  if (!loginTimestamp) return;

  const now = Date.now();
  const parsedTimestamp = parseInt(loginTimestamp, 10);
  const timeElapsed = now - parsedTimestamp;
  const sessionDuration = 30 * 60 * 1000;

  if (timeElapsed >= sessionDuration) {
    alert("Vaša sesija je istekla! Molimo vas da se ponovo prijavite.");
    logoutUser();
  }
}

logoutBtns.forEach((btn) => {
  btn.addEventListener("click", async function () {
    if (isLoggingOut) return;
    isLoggingOut = true;
    try {
      await logoutUser();

      document.cookie = "secretKey=; path=/; max-age=0;";
      document.cookie = "loginTimestamp=; path=/; max-age=0;";
      localStorage.removeItem("token");
      localStorage.removeItem("loginTimestamp");
      localStorage.removeItem("sessionExpired");

      alert("Logout successful!");
      window.location.href = "index.html";
    } catch (error) {
      alert("Logout failed: " + error.message);
    } finally {
      isLoggingOut = false;
    }
  });
});
