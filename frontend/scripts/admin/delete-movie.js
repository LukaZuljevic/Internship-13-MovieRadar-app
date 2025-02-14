import { getAllMovies } from "../landingPage/api.js";

export function handleDeleteMovie() {
  const overlay = document.getElementById("overlay-movie-form");
  const movieList = document.getElementById("movieList");
  const confirmBox = document.querySelector(".confirm-box");
  const deleteMovieBtn = document.getElementById("deleteMovie-btn");
  const closeOverlay = document.getElementById("close-overlay");
  let selectedMovieId = null;

  overlay.style.display = "block";
  confirmBox.style.display = "none";

  getAllMovies().then((movies) => {
    movieList.innerHTML = "";

    movies.forEach((movie) => {
      const movieBox = document.createElement("div");
      movieBox.className = "movie-box";
      movieBox.innerHTML = `<strong>${movie.title}</strong> <br> (${movie.releaseYear})`;
      movieBox.dataset.id = movie.id;

      movieBox.addEventListener("click", function () {
        selectedMovieId = movie.id;
        showConfirmBox(movie.title);
      });

      movieList.appendChild(movieBox);
    });
  });

  function showConfirmBox(movieTitle) {
    confirmBox.style.display = "block";
    document.querySelector(
      ".input-title"
    ).innerText = `Jeste li sigurni da zelite obrisati film: "${movieTitle}"?`;
  }

  deleteMovieBtn.addEventListener("click", function () {
    if (selectedMovieId) {
      deleteMovie(selectedMovieId)
        .then(() => {
          alert("Movie successfully deleted!");
          handleDeleteMovie();
        })
        .catch(() => alert("Greška prilikom brisanja filma!"));
    }
  });

  closeOverlay.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.style.display = "none";
  });
}
