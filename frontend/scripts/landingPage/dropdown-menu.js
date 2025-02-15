const mainNavList = document.querySelectorAll(".nav-bar ul li");

function selectActiveLi(event) {
  mainNavList.forEach((li) => {
    li.classList.remove("active");
  });

  event.target.classList.add("active");

  const dropdownMenu = document.querySelector(".movie-filter-nav");

  if (event.target.textContent === "Filtriraj") {
    dropdownMenu.style.display = "flex";
  } else {
    dropdownMenu.style.display = "none";
  }
}

mainNavList.forEach((li) => {
  li.addEventListener("click", (event) => selectActiveLi(event));
});
