import { getAllMovies, deleteMovie } from "../api/movie-api.js";

const overlay = document.getElementById("overlay-delete-movie-form");
const movieList = document.getElementById("movieList");
const closeBtn = document.getElementById("close-delete-overlay");
const deleteMovieBtn = document.getElementById("deleteMovie-btn");
const confirmBox = document.querySelector(".delete-confirm-box");
const titleElement = document.querySelector(".delete-confirm-box .input-title");

let selectedMovieId = null;
let selectedMovieBox = null;

closeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
  movieList.innerHTML = "";
  confirmBox.style.display = "none";
});

export function handleDeleteMovie() {
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";

  movieList.innerHTML = "";
  confirmBox.style.display = "none";
  closeBtn.style.display = "block";

  getAllMovies()
    .then((movies) => {
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
          showConfirmBox(movie.title);
        });

        movieList.appendChild(movieBox);
      });
    })
    .catch((error) => {
      console.error("Error fetching movies:", error);
    });
}

function showConfirmBox(movieTitle) {
  confirmBox.style.display = "block";
  titleElement.style.display = "block";
  titleElement.innerText = `Jeste li sigurni da zelite obrisati film: "${movieTitle}"?`;
}

deleteMovieBtn.addEventListener("click", async function () {
  if (selectedMovieId) {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not authorized to delete a movie.");
      return;
    }

    try {
      const result = await deleteMovie(selectedMovieId, token);

      if (result) {
        alert("Movie deleted successfully!");
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
        setTimeout(() => {
          location.reload();
        }, 200);
      }
    } catch (error) {
      alert("Error deleting movie!");
    }
  }
});
