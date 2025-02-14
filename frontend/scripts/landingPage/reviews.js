import { getAllReviews } from "./api.js";
import { formatDate } from "./helpers.js";

export async function addMovieReviews() {
  const movieReviewsEl = document.querySelector(
    ".movie-info-container .movie-reviews"
  );
  const reviews = await getAllReviews();

  if (reviews.length < 1) {
    console.log("Nema recenzija");
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
