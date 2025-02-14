import { selectActiveLi } from "./dropdown-menu.js";
import { openDialog, closeDialog, selectActiveBtn } from "./dialog.js";
import { getAllMovies } from "./api.js";

let movies = await getAllMovies();

const mainNavList = document.querySelectorAll(".nav-bar ul li");
const moviesContainerEl = document.querySelector(".movies-container");
const dialogMenuBtns = document.querySelectorAll(".movie-info-nav > li");
const dialogCloseIcon = document.querySelector(".x-icon");

mainNavList.forEach((li) => {
  li.addEventListener("click", (event) => selectActiveLi(event));
});

movies.forEach((m) => {
  moviesContainerEl.innerHTML += `<div class="movie-card" data-id=${m.id}>
            <img
              src=${m.imageUrl}
              alt=""
            />
            <div class="movie-heading">
              <h2>${m.title} (${m.releaseYear})</h2>
            </div>
          </div>`;

  const movieCardElements = document.querySelectorAll(".movie-card");

  movieCardElements.forEach((card) => {
    card.addEventListener("click", (event) => openDialog(event, movies));
  });
});

dialogCloseIcon.addEventListener("click", closeDialog);

dialogMenuBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => selectActiveBtn(event));
});
