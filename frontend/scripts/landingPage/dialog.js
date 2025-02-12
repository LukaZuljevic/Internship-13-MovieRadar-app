const dialogMenuBtns = document.querySelectorAll(".movie-info-nav > li");

function selectActiveBtn(event) {
  dialogMenuBtns.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  const infoEl = document.querySelector(".movie-details");
  const reviewsEl = document.querySelector(".movie-reviews");

  if (event.target.textContent === "Informacije") {
    infoEl.style.display = "flex";
    reviewsEl.style.display = "none";
  } else {
    infoEl.style.display = "none";
    reviewsEl.style.display = "flex";
  }
}

dialogMenuBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => selectActiveBtn(event));
});
