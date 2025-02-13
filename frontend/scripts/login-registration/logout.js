import { logoutUser } from "./api-users.js";

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", async function () {
    try {
        await logoutUser();
        alert("Logout successful!");
        window.location.href = "index.html";
    } catch (error) {
        alert("Logout failed: " + error.message);
    }
});