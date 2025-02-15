import { getMovieReviews, postReview } from "./api.js";
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
