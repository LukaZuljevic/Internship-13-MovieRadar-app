import { getAllMovies, getMovieById, updateMovie } from "../api/movie-api.js";
import { populateGenreDropdown } from "../admin.js";

const overlay = document.getElementById("overlay-edit-movie-form");
const listBox = document.getElementById("edit-movie-container");
const movieListEdit = document.getElementById("edit-movieList");
const closeEditBtn = document.getElementById("close-edit-overlay");
const editMovieForm = document.getElementById("edit-movie-form");
const closeEditFormBtn = document.getElementById("close-edit-form-overlay");

let selectedMovieId = null;
let selectedMovieBox = null;

function closeOverlay() {
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
}

closeEditBtn.addEventListener("click", closeOverlay);
closeEditFormBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  event.preventDefault();
  closeOverlay();
});

export function handleEditMovie() {
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";

  listBox.style.display = "block";
  editMovieForm.style.display = "none";
  movieListEdit.style.visibility = "visible";

  selectedMovieBox = null;
  selectedMovieId = null;

  getAllMovies()
    .then((movies) => {
      movieListEdit.innerHTML = "";
      movies.forEach((movie) => {
        const movieBox = document.createElement("div");
        movieBox.className = "movie-box";
        movieBox.innerHTML = `<strong>${movie.title}</strong> <br> (${movie.releaseYear})`;
        movieBox.dataset.id = movie.id;

        movieBox.addEventListener("click", function () {
          if (selectedMovieBox) {
            selectedMovieBox.classList.remove("focused");
          }
          selectedMovieBox = movieBox;
          selectedMovieBox.classList.add("focused");
          selectedMovieId = movie.id;
          openEditForm(selectedMovieId);
        });

        movieListEdit.appendChild(movieBox);
      });
    })
    .catch((error) => {
      console.error("Error fetching movies:", error);
    });
}

function openEditForm(movieId) {
  listBox.style.display = "none";
  getMovieById(movieId)
    .then((movie) => {
      if (movie) {
        document.getElementById("edit-title").value = movie.title;
        document.getElementById("edit-description").value = movie.description;
        document.getElementById("edit-releaseYear").value = movie.releaseYear;
        document.getElementById("edit-imageURL").value = movie.imageURL;

        populateGenreDropdown(movie.genre);

        movieListEdit.style.visibility = "hidden";
        editMovieForm.style.display = "block";
      }
    })
    .catch((error) => {
      console.error("Error fetching movie details:", error);
    });
}

editMovieForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  if (!selectedMovieId) return;

  const title = document.getElementById("edit-title").value.trim();
  const genre = document.getElementById("edit-genre").value.trim();
  const description = document.getElementById("edit-description").value.trim();
  const releaseYear = parseInt(
    document.getElementById("edit-releaseYear").value,
    10
  );
  const imageURL = document.getElementById("edit-imageURL").value.trim();

  if (!title || !genre || isNaN(releaseYear) || !description || !imageURL) {
    alert("Please fill in all fields correctly.");
    return;
  }

  if (releaseYear < 1888 || releaseYear > 2030) {
    alert("Godina izlaska mora biti između 1888 i 2030.");
    return;
  }

  const token = localStorage.getItem("token");
  if (!token) {
    alert("You are not authorized to edit a movie.");
    return;
  }

  const movieData = { title, genre, description, releaseYear, imageURL };

  try {
    const result = await updateMovie(selectedMovieId, movieData, token);
    if (result) {
      alert("Movie updated successfully!");
      closeOverlay();
      editMovieForm.reset();
    } else {
      alert("Ime filma vec postoji, unesite neko drugo.");
    }
  } catch (error) {
    alert("Error updating movie!");
  }
});
