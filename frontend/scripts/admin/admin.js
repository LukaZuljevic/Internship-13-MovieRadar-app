import { getUserFromToken } from "../login-registration/login.js";
import { handleAddMovie } from "./handle-movie/add-movie.js";
import { handleDeleteMovie } from "./handle-movie/delete-movie.js";
import { handleEditMovie } from "./handle-movie/edit-movie.js";
import { handleManageUsers } from "./manage-users.js";

document.addEventListener("DOMContentLoaded", function () {
  const user = getUserFromToken();

  if (user.role !== "Admin") return;

  const adminDropdownContainer = document.getElementById(
    "admin-dropdown-container"
  );
  const adminLabel = document.getElementById("admin-label");
  const adminDropdown = document.getElementById("admin-dropdown");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  populateGenreDropdown();

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

        if (action === "addFilm") {
          handleAddMovie();
        } else if (action === "deleteFilm") {
          handleDeleteMovie();
        } else if (action === "editFilm") {
          handleEditMovie();
        } else if (action === "manageUsers") {
          handleManageUsers();
        }

        adminDropdown.style.display = "none";
      });
    });
  }
});

export function populateGenreDropdown(selectedGenre = null) {
  const availableGenres = ["Drama", "Akcija", "Komedija", "Horor", "Avantura"];
  const genreSelects = document.querySelectorAll("#genre, #edit-genre");

  genreSelects.forEach((select) => {
    select.innerHTML = "";

    availableGenres.forEach((genre) => {
      const option = document.createElement("option");
      option.value = genre;
      option.textContent = genre;

      if (genre === selectedGenre) {
        option.selected = true;
      }

      select.appendChild(option);
    });
  });
}
