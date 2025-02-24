const API_BASE_MOVIE_URL = "https://localhost:51140/api/movies";

export async function addMovie(movieData, token) {
  try {
    const response = await fetch(`${API_BASE_MOVIE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(movieData),
    });

    if (!response.ok) throw new Error("Error adding film");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function updateMovie(id, movieData, token) {
  try {
    const response = await fetch(`${API_BASE_MOVIE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(movieData),
    });

    if (!response.ok) throw new Error(`Error editing film, ID ${id}`);
    return true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function deleteMovie(id, token) {
  try {
    const response = await fetch(`${API_BASE_MOVIE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error(`Error deleting film, ID ${id}`);
    return true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function getAllMovies() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_BASE_MOVIE_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });

  if (response.status === 401) {
    return null;
  }

  return response.ok ? response.json() : [];
}

export async function getMovieById(id) {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${API_BASE_MOVIE_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (!response.ok) throw new Error(`Error fetching movie with ID ${id}`);

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getMovieByGenre() {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${API_BASE_MOVIE_URL}/filter`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (!response.ok) throw new Error(`Error fetching movie with ID ${id}`);

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
