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
async function getMovieReviews(movieId) {
  const response = await fetch(`${API_BASE_URL}/reviews/movie/${movieId}`, {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      "Content-Type": "application/json",
    },
  });

  if (response.status === 404) {
    return [];
  } else if (!response.ok) {
    const errorMessage = response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

async function addReview(userId, movieId, content, rating) {
  const response = await fetch(`${API_BASE_URL}/reviews`, {
    method: "POST",
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

export { getAllMovies, getMovieReviews };
