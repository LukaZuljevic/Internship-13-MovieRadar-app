import { getUserFromToken } from "../login-registration/login.js";
import { addMovie, deleteMovie, updateMovie } from "./movie-api.js";

document.addEventListener("DOMContentLoaded", function () {
  const user = getUserFromToken();

  if (user) {
    console.log("Role: " + user.role);
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
  } else {
    console.log("Nema prijavljenog korisnika.");
  }
});

async function handleAddFilm() {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Authorization not approved");
    return;
  }

  const title = prompt("Unesite naziv filma:");
  const genre = prompt("Unesite žanr filma:");
  const releaseYear = parseInt(prompt("Unesite godinu izlaska filma:"), 10);
  const rating = parseFloat(prompt("Unesite rejting filma (1-10):"));

  if (!title || !genre || isNaN(releaseYear) || isNaN(rating)) {
    alert("Neispravan unos podataka.");
    return;
  }

  const movieData = { title, genre, releaseYear, rating };

  const result = await addMovie(movieData, token);
  if (result) {
    alert("Film uspješno dodat!");
  }
}

async function handleDeleteFilm() {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Nemate pristup ovoj akciji.");
    return;
  }

  const movieId = prompt("Unesite ID filma koji želite obrisati:");
  if (!movieId) {
    alert("Morate unijeti ID filma.");
    return;
  }

  const confirmed = confirm("Jeste li sigurni da želite obrisati film?");
  if (!confirmed) return;

  const success = await deleteMovie(movieId, token);
  if (success) {
    alert("Film uspješno obrisan!");
  }
}

function handleManageUsers() {
  alert("Ovdje će biti implementacija upravljanja korisnicima.");
}
