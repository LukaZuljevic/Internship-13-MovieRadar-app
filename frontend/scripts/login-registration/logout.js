import { logoutUser } from "./api-users.js";

const logoutBtns = document.querySelectorAll(".logout-btn");

logoutBtns.forEach((btn) => {
  btn.addEventListener("click", async function () {
    try {
      await logoutUser();
      alert("Logout successful!");
      window.location.href = "index.html";
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  });
});
