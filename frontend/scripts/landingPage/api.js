const rootUrl = "https://localhost:51140/api";

async function getAllMovies() {
  const response = await fetch(`${rootUrl}/movies`, {
    credentials: "include",
  });

  console.log(response.json());
  return response.json();
}

export { getAllMovies };
