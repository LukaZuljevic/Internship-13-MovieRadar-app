import { getUserFromToken } from "../login-registration/login.js";

document.addEventListener("DOMContentLoaded", function () {
  const user = getUserFromToken();
  if (user) {
    console.log("Trenutni korisnik:", user);
    console.log("Uloga:", user.role);
  } else {
    console.log("Nema prijavljenog korisnika.");
  }

  if (user) {
    const adminDropdownContainer = document.getElementById(
      "admin-dropdown-container"
    );
    if (adminDropdownContainer) {
      adminDropdownContainer.style.display = "block";
    }

    const adminLabel = document.getElementById("admin-label");
    const adminDropdown = document.getElementById("admin-dropdown");

    adminLabel.addEventListener("click", function () {
      const currentDisplay = adminDropdown.style.display;
      if (currentDisplay === "none" || currentDisplay === "") {
        adminDropdown.style.display = "block";
      } else {
        adminDropdown.style.display = "none";
      }
    });
  }
});
