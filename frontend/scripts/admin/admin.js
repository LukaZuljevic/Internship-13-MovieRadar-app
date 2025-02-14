import { getUserFromToken } from "../login-registration/login.js";
import { handleAddFilm } from "./movie-form.js";

document.addEventListener("DOMContentLoaded", function () {
  const user = getUserFromToken();
  console.log("Role: " + user.role);

  if (user.role !== "Admin") return;

  const adminDropdownContainer = document.getElementById(
    "admin-dropdown-container"
  );
  const adminLabel = document.getElementById("admin-label");
  const adminDropdown = document.getElementById("admin-dropdown");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  if (adminDropdownContainer) {
    adminDropdownContainer.style.display = "block";
  }

  if (adminLabel && adminDropdown) {
    adminLabel.addEventListener("click", function () {
      adminDropdown.style.display =
        adminDropdown.style.display === "none" ||
        adminDropdown.style.display === ""
          ? "block"
          : "none";
    });

    document.addEventListener("click", function (event) {
      if (!adminDropdownContainer.contains(event.target)) {
        adminDropdown.style.display = "none";
      }
    });

    dropdownItems.forEach((item) => {
      item.addEventListener("click", function () {
        const action = item.getAttribute("data-action");
        console.log("Selected option:", action);

        if (action === "addFilm") {
          handleAddFilm();
        } else if (action === "deleteFilm") {
          handleDeleteFilm();
        } else if (action === "manageUsers") {
          handleManageUsers();
        }

        adminDropdown.style.display = "none";
      });
    });
  }
});
