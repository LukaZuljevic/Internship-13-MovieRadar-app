const API_BASE_URL_USERS = "https://localhost:51140/api/users";

export async function getAllUsers(token) {
  try {
    const response = await fetch(`${API_BASE_URL_USERS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error fetching users");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
