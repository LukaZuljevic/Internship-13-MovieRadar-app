import { addMovieReviews } from "./reviews.js";

function openDialog(event, movies) {
  const dialogEl = document.querySelector(".movie-info-dialog");
  dialogEl.showModal();
  dialogEl.style.display = "flex";

  const card = event.target.closest(".movie-card");
  const movieData = movies.find((m) => m.id === card.dataset.id);

  document.querySelector(
    ".movie-info-container > h2"
  ).innerHTML = `${movieData.title}&nbsp;<span>4/5</span>`;
  document.querySelector(".movie-details .release-year").textContent =
    movieData.releaseYear;
  document.querySelector(".movie-details .movie-genre").textContent =
    movieData.genre;
  document.querySelector(".movie-details .movie-description").textContent =
    movieData.description;
  document
    .querySelector(".movie-info-dialog .movie-image")
    .setAttribute("src", movieData.imageUrl);

  addMovieReviews();
}

function closeDialog() {
  const dialogEl = document.querySelector(".movie-info-dialog");
  dialogEl.close();
  dialogEl.style.display = "none";
}

function selectActiveBtn(event) {
  document
    .querySelectorAll(".movie-info-nav > li")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  const infoEl = document.querySelector(".movie-details");
  const reviewsEl = document.querySelector(".movie-reviews");
  const leaveReviewEl = document.querySelector(".leave-review");

  if (event.target.textContent === "Informacije") {
    infoEl.style.display = "flex";
    reviewsEl.style.display = "none";
    leaveReviewEl.style.display = "none";
  } else if (event.target.textContent === "Recenzije") {
    infoEl.style.display = "none";
    reviewsEl.style.display = "flex";
    leaveReviewEl.style.display = "none";
  } else {
    infoEl.style.display = "none";
    reviewsEl.style.display = "none";
    leaveReviewEl.style.display = "block";
  }
}

export { openDialog, closeDialog, selectActiveBtn };
