import { addMovie } from "../api/movie-api.js";

const overlay = document.getElementById("overlay-add-movie-form");
const addMovieForm = document.getElementById("add-movie-form");
const closeBtn = document.getElementById("close-add-overlay");
const addMovieBtn = document.getElementById("addMovie-btn");

export function handleAddMovie() {
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";
}

closeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.body.style.overflow = "auto";
  overlay.style.display = "none";
  addMovieForm.reset();
});

addMovieBtn.addEventListener("click", async function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const genre = document.getElementById("genre").value;
  const releaseYear = parseInt(
    document.getElementById("releaseYear").value,
    10
  );
  const description = document.getElementById("description").value.trim();
  const imageURL = document.getElementById("imageURL").value.trim();

  if (!title || !genre || isNaN(releaseYear) || !description || !imageURL) {
    alert("Molimo vas da popunite sva polja ispravno.");
    return;
  }

  const token = localStorage.getItem("token");
  if (!token) {
    alert("Nemate autorizaciju.");
    return;
  }

  const movieData = { title, description, genre, releaseYear, imageURL };

  const result = await addMovie(movieData, token);

  if (result) {
    alert("Movie added successfully!");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    addMovieForm.reset();
  } else {
    alert("Ime filma vec postoji, unesite neko drugo.");
  }
});
