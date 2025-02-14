import { addMovie } from "./movie-api.js";

const overlay = document.getElementById("overlay-movie-form");
const addMovieForm = document.getElementById("add-movie-form");
const closeBtn = document.getElementById("close-overlay");
const addMovieBtn = document.getElementById("addMovie-btn");

export function handleAddFilm() {
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";
}

closeBtn.addEventListener("click", function () {
  event.preventDefault();
  document.body.style.overflow = "auto";
  overlay.style.display = "none";
  addMovieForm.reset();
});

addMovieBtn.addEventListener("click", async function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const genre = document.getElementById("genre").value.trim();
  const releaseYear = parseInt(
    document.getElementById("releaseYear").value,
    10
  );
  const rating = parseFloat(document.getElementById("rating").value);

  if (!title || !genre || isNaN(releaseYear) || isNaN(rating)) {
    alert("Molimo vas da popunite sva polja ispravno.");
    return;
  }

  const token = localStorage.getItem("token");
  if (!token) {
    alert("Nemate autorizaciju.");
    return;
  }

  const movieData = { title, genre, releaseYear, rating };
  const result = await addMovie(movieData, token);

  if (result) {
    alert("Film uspesno dodan!");
    overlay.style.display = "none";
    addMovieForm.reset();
  }
});
