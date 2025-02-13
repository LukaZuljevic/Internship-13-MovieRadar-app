import { getUserFromToken } from "../login-registration/login.js";

document.addEventListener("DOMContentLoaded", function () {
  const user = getUserFromToken();

  if (user) {
    const adminDropdownContainer = document.getElementById(
      "admin-dropdown-container"
    );
    const adminLabel = document.getElementById("admin-label");
    const adminDropdown = document.getElementById("admin-dropdown");

    if (adminDropdownContainer) {
      adminDropdownContainer.style.display = "block";
    }

    if (adminLabel && adminDropdown) {
      adminLabel.addEventListener("click", function () {
        adminDropdown.size = adminDropdown.size === 1 ? 4 : 1;
      });

      document.addEventListener("click", function (event) {
        if (!adminDropdownContainer.contains(event.target)) {
          adminDropdown.size = 1;
        }
      });
    }
  } else {
    console.log("Nema prijavljenog korisnika.");
  }
});
