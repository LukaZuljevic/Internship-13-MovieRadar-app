const API_BASE_URL = "https://localhost:51140/api";
const jwtToken = localStorage.getItem("token");

async function getAllMovies() {
  const response = await fetch(`${API_BASE_URL}/movies`, {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

//Zasad je ovako ali cekam da naprave endpoint tako da mogu za jedan film recenzije
async function getAllReviews() {
  const response = await fetch(`${API_BASE_URL}/reviews`, {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

// Takoder cekam da naprave endpoint
async function getUser() {
  const response = await fetch(`${API_BASE_URL}/reviews`, {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export { getAllMovies, getAllReviews };
