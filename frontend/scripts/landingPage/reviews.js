import {
  deleteReview,
  getMovieReviews,
  getUserReviews,
  postReview,
} from "./api.js";
import { formatDate } from "./helpers.js";

export async function addMovieReviews(movieId) {
  const movieReviewsEl = document.querySelector(
    ".movie-info-container .movie-reviews"
  );
  const reviews = await getMovieReviews(movieId);
  movieReviewsEl.innerHTML = "";

  if (reviews.length < 1) {
    movieReviewsEl.innerHTML += `<p>Nema recenzija</p>`;
    return;
  }

  reviews.forEach((r) => {
    movieReviewsEl.innerHTML += `<div class="review">
              <div class="review-heading">
                <p><span>Josip Vojkovic</span><span>${r.rating}/5</span></p>
                <p>${formatDate(r.createdAt)}</p>
              </div>
              <p>
                ${r.content}
              </p>
            </div>`;
  });
}

export async function calculateMovieRating(movieId) {
  const reviews = await getMovieReviews(movieId);

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, obj) => sum + obj.rating, 0) / reviews.length
      : 0;

  return Math.round(averageRating);
}

export function leaveMovieReview(movieId) {
  document
    .querySelector(".leave-review > button")
    .addEventListener("click", () => {
      const movieRatingEl = document.querySelector(
        'input[name="choosenRating"]:checked'
      );

      const movieDescription =
        document.querySelector("#movieDescription").value;

      const errorMessage = document.querySelector(
        ".leave-review > .error-message"
      );

      if (!movieRatingEl || !movieDescription) {
        errorMessage.textContent = "Morate odabrati ocjenu i unijeti tekst!";
        errorMessage.style.display = "block";
        return;
      }

      errorMessage.style.display = "none";
      postReview(movieId, movieDescription, movieRatingEl.value);
    });
}

export async function showUserReviews() {
  const reviews = await getUserReviews();
  const userReviewsEl = document.querySelector(".user-reviews");
  userReviewsEl.innerHTML = "<h1>Moje recenzije</h1>";

  if (reviews.length < 1) {
    userReviewsEl.innerHTML += "<h3>Nemate recenzija</h3>";
    return;
  }

  reviews.forEach((r) => {
    userReviewsEl.innerHTML += `<div class="user-review-card">
        <div class="user-review-heading">
          <h3><span>${r.movieTitle}</span><span>${r.rating}/5</span></h3>
          <h3><span>${formatDate(
            r.createdAt
          )}</span><button class="deleteReview" data-id="${
      r.id
    }">Obrisi</button></h3>
        </div>
        <p>
          ${r.content}
        </p>
      </div>`;
  });

  const deleteReviewBtns = document.querySelectorAll(".deleteReview");

  deleteReviewBtns.forEach((btn) => {
    btn.addEventListener("click", async () => {
      await deleteReview(btn.dataset.id);

      showUserReviews();
    });
  });
}
