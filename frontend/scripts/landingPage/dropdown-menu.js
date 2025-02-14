function selectActiveLi(event) {
  document.querySelectorAll(".nav-bar ul li").forEach((li) => {
    li.classList.remove("active");
  });

  event.target.classList.add("active");

  const dropdownMenu = document.querySelector(".movie-filter-nav");

  if (event.target.textContent === "Filtriraj") {
    dropdownMenu.style.display = "flex";
    document.querySelector(".movies-section").style.display = "flex";
  } else if (event.target.textContent === "Moje recenzije") {
    dropdownMenu.style.display = "none";
    document.querySelector(".movies-section").style.display = "none";
    document.querySelector(".user-reviews").style.display = "flex";
  } else {
    dropdownMenu.style.display = "none";
    document.querySelector(".movies-section").style.display = "flex";
    document.querySelector(".user-reviews").style.display = "none";
  }
}

export { selectActiveLi };
