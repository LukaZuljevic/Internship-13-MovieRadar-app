const dialogMenuBtns = document.querySelectorAll(".movie-info-nav > li");
const dialogCloseIcon = document.querySelector(".x-icon");
function selectActiveBtn(event) {
  dialogMenuBtns.forEach((btn) => btn.classList.remove("active"));
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

function closeDialog() {
  const dialogEl = document.querySelector(".movie-info-dialog");
  dialogEl.close();
  dialogEl.style.display = "none";
}

dialogCloseIcon.addEventListener("click", closeDialog);

dialogMenuBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => selectActiveBtn(event));
});
