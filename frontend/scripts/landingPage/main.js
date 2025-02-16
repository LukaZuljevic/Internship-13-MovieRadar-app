import {
  selectActiveLi,
  selectHamburgerLi,
  showFilteredMovies,
  toggleHamburgerNav,
} from "./dropdown-menu.js";
import { openDialog, closeDialog, selectActiveBtn } from "./dialog.js";
import { getAllMovies } from "./api.js";
import { showUserReviews } from "./reviews.js";
import { getUserFromToken } from "../login-registration/login.js";

const { role } = getUserFromToken();

if (role === "Admin") {
  const userOnlyEl = document.querySelectorAll(".userOnly");
  userOnlyEl.forEach((el) => {
    el.style.display = "none";
  });
}

const movies = await getAllMovies();

const mainNavList = document.querySelectorAll(".nav-bar ul li");
const moviesContainerEl = document.querySelector(".movies-container");
const dialogCloseIcon = document.querySelector(".x-icon");

mainNavList.forEach((li) => {
  li.addEventListener("click", (event) => selectActiveLi(event));
});

const showAllMoviesEl = document.querySelectorAll(".showAllMovies");

showAllMoviesEl.forEach((el) => {
  el.addEventListener("click", async () => {
    const movieSectionH1 = document.querySelector(".movies-section > h1");
    movieSectionH1.textContent = "Svi filmovi";
    movieSectionH1.style.display = "block";
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
  });
});

movies.forEach((m) => {
  const movieSectionH1 = document.querySelector(".movies-section > h1");
  movieSectionH1.textContent = "Svi filmovi";
  movieSectionH1.style.display = "block";
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

dialogCloseIcon.addEventListener("click", closeDialog);

document
  .querySelector(".hamburger-icon")
  .addEventListener("click", toggleHamburgerNav);

document
  .querySelector(".movie-filter-nav > button")
  .addEventListener("click", showFilteredMovies);

const showUserReviewsLi = document.querySelectorAll(".showUserReviews");

showUserReviewsLi.forEach((el) => {
  el.addEventListener("click", showUserReviews);
});

const hamburgerLiElements = document.querySelectorAll(".hamburger-nav");

hamburgerLiElements.forEach((el) => {
  el.addEventListener("click", (event) => selectHamburgerLi(event));
});
