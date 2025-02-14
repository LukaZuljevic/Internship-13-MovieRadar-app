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

function toggleHamburgerNav() {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const hamburgerNav = document.querySelector(".hamburger-nav");

  const isActive = hamburgerIcon.classList.contains("hamburger-icon-active");

  if (isActive) {
    hamburgerNav.style.display = "none";
    hamburgerIcon.classList.remove("hamburger-icon-active");
  } else {
    hamburgerNav.style.display = "flex";
    hamburgerIcon.classList.add("hamburger-icon-active");
  }
}

export { selectActiveLi, toggleHamburgerNav };
