import {
  addMovieReviews,
  calculateMovieRating,
  checkUserMovieReview,
  leaveMovieReview,
} from "./reviews.js";

async function openDialog(event, movies) {
  const dialogEl = document.querySelector(".movie-info-dialog");
  dialogEl.showModal();
  dialogEl.style.display = "flex";

  let card = event.target.closest(".movie-card");
  const movieData = movies.find((m) => m.id === card.dataset.id);
  const averageRating = await calculateMovieRating(card.dataset.id);
  const dialogMenuBtns = document.querySelectorAll(".movie-info-nav > li");

  dialogMenuBtns.forEach((btn) => {
    btn.addEventListener("click", (event) =>
      selectActiveBtn(event, card.dataset.id)
    );
  });

  document.querySelector(".movie-info-container > h2").innerHTML = `${
    movieData.title
  }&nbsp;<span>${averageRating > 0 ? averageRating + "/5" : "N/A"}</span>`;
  document.querySelector(".movie-details .release-year").textContent =
    movieData.releaseYear;
  document.querySelector(".movie-details .movie-genre").textContent =
    movieData.genre;
  document.querySelector(".movie-details .movie-description").textContent =
    movieData.description;
  document
    .querySelector(".movie-info-dialog .movie-image")
    .setAttribute("src", movieData.imageUrl);
  document
    .querySelector(".movie-info-dialog .movie-image")
    .setAttribute("alt", `Slika za film ${movieData.title}`);

  addMovieReviews(card.dataset.id);
  console.log(card.dataset.id);
  leaveMovieReview(card.dataset.id);
  checkUserMovieReview(card.dataset.id);
}

function closeDialog() {
  const dialogEl = document.querySelector(".movie-info-dialog");
  dialogEl.close();
  dialogEl.style.display = "none";
  document.querySelector(".write-review > .error-message").style.display =
    "none";

  const radioButtons = document.querySelectorAll('input[name="choosenRating"]');

  radioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      radioButton.checked = false;
    }
  });

  document.querySelector("#movieDescription").value = "";
}

function selectActiveBtn(event, movieId) {
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
