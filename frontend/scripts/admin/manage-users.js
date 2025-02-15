import {
  getAllUsers,
  getUsersReviewStats,
  getUserReview,
} from "./api/api-user.js";

const overlay = document.getElementById("overlay-user-list");
const closeBtn = document.getElementById("close-user-overlay");
const userList = document.getElementById("user-list-container");

closeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
  userList.innerHTML = "";
});

export async function handleManageUsers(token) {
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";

  let userListDiv = document.getElementById("user-list");
  if (!userListDiv) {
    userListDiv = document.createElement("div");
    userListDiv.id = "user-list";
    userList.appendChild(userListDiv);
  } else {
    userListDiv.innerHTML = "";
  }

  const titleElement = document.createElement("h2");
  titleElement.id = "user-list-title";
  titleElement.textContent = "Popis svih korisnika";
  userListDiv.appendChild(titleElement);
  userListDiv.appendChild(closeBtn);

  try {
    const users = await getAllUsers(token);
    const usersWithStats = await getUsersReviewStats(token);

    const usersMap = new Map();

    usersWithStats.forEach((userStat) => {
      const user = users.find((u) => u.id === userStat.userId);

      if (user) {
        if (!usersMap.has(user.id)) {
          usersMap.set(user.id, {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            reviewCount: userStat.reviewCount,
            averageRating: userStat.averageRating,
          });
        }
      }
    });

    if (usersMap.size === 0) {
      console.log("no users to display");
      return;
    }

    usersMap.forEach(
      ({ id, firstName, lastName, reviewCount, averageRating }) => {
        const userBox = document.createElement("div");
        userBox.className = "user-box";
        userBox.innerHTML = `
        <h3>${firstName} ${lastName}</h3>
        <p>Broj komentara: ${reviewCount}</p>
        <p>Prosjecna ocjena: ${averageRating.toFixed(2)}</p>
        <button class="details-btn">Detalji</button>
        <div id="details-${id}" class="user-details" style="display: none;"></div>
      `;

        const detailsBtn = userBox.querySelector(".details-btn");
        detailsBtn.addEventListener("click", async () => {
          await showUserDetails(id, token);
        });

        userListDiv.appendChild(userBox);
      }
    );
  } catch (error) {
    console.error("Error fetching user data:", error);
    alert("Error fetching user data.");
  }
}

async function showUserDetails(userId, token) {
  if (!userId) {
    console.error("User ID is missing or invalid");
    return;
  }

  const detailsDiv = document.getElementById(`details-${userId}`);
  if (detailsDiv.style.display === "block") {
    detailsDiv.style.display = "none";
    return;
  }

  try {
    const userDetails = await getUserReview(userId, token);
    const reviews = Array.isArray(userDetails.reviews)
      ? userDetails.reviews
      : userDetails;

    if (reviews.length === 0) {
      detailsDiv.innerHTML = "<p>Korisnik nema recenzija.</p>";
    } else {
      detailsDiv.innerHTML = `
          <h4 class="user-review">Recenzije korisnika</h4>
          <ul class="review-list">
            ${reviews
              .map(
                (review) => `
                <li>
                  <strong>Ocjena:</strong> ${review.rating} <br>
                  <strong>Recenzija:</strong> ${review.content}
                </li>
              `
              )
              .join("")}
          </ul>
        `;
    }

    detailsDiv.style.display = "block";
  } catch (error) {
    console.error("Error fetching user details:", error);
    detailsDiv.innerHTML = "<p>Greska pri ucitavanju detalja.</p>";
  }
}
