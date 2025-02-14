import { getAllUsers } from "./api/api-user.js";

const overlay = document.getElementById("overlay-user-list");
const closeBtn = document.getElementById("close-user-overlay");
const userList = document.getElementById("user-list-container");

closeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
  userList.innerHTML = "";
});

export async function handleManageUsers() {
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";
  userList.innerHTML = "";

  const titleElement = document.createElement("h2");
  titleElement.id = "user-list-title";
  titleElement.textContent = "Popis svih korisnika";
  userList.appendChild(titleElement);

  getAllUsers()
    .then((users) => {
      if (users && users.length > 0) {
        users.forEach((user) => {
          const userBox = document.createElement("div");
          userBox.className = "user-box";
          userBox.innerHTML = `
            <h3>${user.firstName} ${user.lastName}</h3>
            <p>Broj komentara: ${user.commentCount}</p>
            <p>Prosjecna ocjena: ${user.averageRating}</p>
          `;

          userList.appendChild(userBox);
        });
      } else {
        userList.innerHTML = "<p>No users found.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      alert("Error fetching users.");
    });
}
