import { getMovieReviews } from "./api.js";
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

export async function leaveMovieReview() {}
