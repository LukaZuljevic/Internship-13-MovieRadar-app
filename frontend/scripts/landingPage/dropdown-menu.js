import { filterMovies } from "./api.js";
import { openDialog } from "./dialog.js";

function selectActiveLi(event) {
  document.querySelectorAll(".nav-bar ul li").forEach((li) => {
    li.classList.remove("active");
  });

  event.target.classList.add("active");

  const dropdownMenu = document.querySelector(".movie-filter-nav");

  if (event.target.textContent === "Filtriraj") {
    dropdownMenu.style.display = "flex";
    document.querySelector(".movies-section").style.display = "flex";
  } else if (event.target.textContent === "Moje recenzije") {
    dropdownMenu.style.display = "none";
    document.querySelector(".movies-section").style.display = "none";
    document.querySelector(".user-reviews").style.display = "flex";
  } else {
    dropdownMenu.style.display = "none";
    document.querySelector(".movies-section").style.display = "flex";
    document.querySelector(".user-reviews").style.display = "none";
  }
}

function toggleHamburgerNav() {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const hamburgerNav = document.querySelector(".hamburger-nav");

  const isActive = hamburgerIcon.classList.contains("hamburger-icon-active");

  if (isActive) {
    hamburgerNav.style.display = "none";
    hamburgerIcon.classList.remove("hamburger-icon-active");
  } else {
    hamburgerNav.style.display = "flex";
    hamburgerIcon.classList.add("hamburger-icon-active");
  }
}

async function showFilteredMovies() {
  const filterMsg = document.querySelector(".filter-message");
  filterMsg.style.display = "none";

  const genre = document.getElementById("genreFilter").value;
  const rating = document.getElementById("ratingFilter").value;
  const releaseYear = document.querySelector(
    '.filter input[type="number"]'
  ).value;

  if (!genre && !rating && !releaseYear) {
    filterMsg.style.display = "block";
    return;
  }

  const movies = await filterMovies(genre, rating, releaseYear);

  document.querySelector(".movie-filter-nav").style.display = "none";

  console.log(movies);

  if (movies.length < 1) {
    document.querySelector(".movies-container").innerHTML =
      "<h1>Nema filmova sa ovim filterom</h1>";
  }

  const movieSectionH1 = document.querySelector(".movies-section > h1");
  movieSectionH1.textContent = "Filtrirani filmovi";
  movieSectionH1.style.display = "block";
  const moviesContainerEl = document.querySelector(".movies-container");
  moviesContainerEl.innerHTML = "";

  movies.forEach((m) => {
    moviesContainerEl.innerHTML += `<div class="movie-card" data-id=${m.id}>
            <img
              src=${m.imageUrl}
              alt="Slika filma ${m.title}"
            />
            <div class="movie-heading">
              <h2>${m.title} (${m.releaseYear})</h2>
            </div>
          </div>`;
  });
  const movieCardElements = document.querySelectorAll(".movie-card");

  movieCardElements.forEach((card) => {
    card.addEventListener("click", (event) => openDialog(event, movies));
  });
}

export { selectActiveLi, toggleHamburgerNav, showFilteredMovies };
