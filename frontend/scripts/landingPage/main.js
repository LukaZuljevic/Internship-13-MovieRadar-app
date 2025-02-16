import {
  selectActiveLi,
  showFilteredMovies,
  toggleHamburgerNav,
} from "./dropdown-menu.js";
import { openDialog, closeDialog, selectActiveBtn } from "./dialog.js";
import { getAllMovies } from "./api.js";

const movies = await getAllMovies();

const mainNavList = document.querySelectorAll(".nav-bar ul li");
const moviesContainerEl = document.querySelector(".movies-container");
const dialogMenuBtns = document.querySelectorAll(".movie-info-nav > li");
const dialogCloseIcon = document.querySelector(".x-icon");

mainNavList.forEach((li) => {
  li.addEventListener("click", (event) => selectActiveLi(event));
});

const showAllMovies = document.querySelector(".nav-bar ul li:first-of-type");

showAllMovies.addEventListener("click", async () => {
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

dialogMenuBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => selectActiveBtn(event));
});

document
  .querySelector(".hamburger-icon")
  .addEventListener("click", toggleHamburgerNav);

document
  .querySelector(".movie-filter-nav > button")
  .addEventListener("click", showFilteredMovies);
