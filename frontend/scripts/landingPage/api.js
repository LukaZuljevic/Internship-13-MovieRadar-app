import { getUserFromToken } from "../login-registration/login.js";

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

async function getMovieReviews(movieId) {
  const response = await fetch(`${API_BASE_URL}/reviews/movie/${movieId}`, {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      "Content-Type": "application/json",
    },
  });

  if (response.status === 204) {
    return [];
  } else if (!response.ok) {
    const errorMessage = response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

async function getUserReviews() {
  const user = getUserFromToken();
  const userId = user.sub;

  const response = await fetch(`${API_BASE_URL}/reviews/user/${userId}`, {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      "Content-Type": "application/json",
    },
  });

  if (response.status === 204) {
    return [];
  } else if (!response.ok) {
    const errorMessage = response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

async function getUserMovieReview(movieId) {
  const user = getUserFromToken();
  const userId = user.sub;

  const response = await fetch(
    `${API_BASE_URL}/reviews/user/${userId}/movie/${movieId}`,
    {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 204) {
    return null;
  } else if (!response.ok) {
    const errorMessage = response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

async function postReview(movieId, content, rating) {
  const user = getUserFromToken();
  const userId = user.sub;

  const response = await fetch(`${API_BASE_URL}/reviews`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ movieId, userId, content, rating }),
  });
}

async function deleteReview(reviewId) {
  const response = await fetch(`${API_BASE_URL}/reviews/${reviewId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      "Content-Type": "application/json",
    },
  });
}

async function filterMovies(genre, rating, releaseYear) {
  const response = await fetch(
    `${API_BASE_URL}/movies/filter?${genre && "genre=" + genre + "&"}${
      rating && "minRating=" + rating + "&"
    }${releaseYear && "releaseYear=" + releaseYear + "&"}`,
    {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
}

export {
  getAllMovies,
  getMovieReviews,
  postReview,
  filterMovies,
  getUserReviews,
  deleteReview,
  getUserMovieReview,
};
