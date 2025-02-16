const API_BASE_URL_USERS = "https://localhost:51140/api/users";
const API_BASE_URL_REVIEW = "https://localhost:51140/api/reviews";

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

export async function getUsersReviewStats(token) {
  try {
    const response = await fetch(`${API_BASE_URL_USERS}/review-stats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error fetching users");
    }

    const responseText = await response.text();
    return JSON.parse(responseText);
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function getUserReview(userId, token) {
  try {
    const response = await fetch(`${API_BASE_URL_REVIEW}/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 404) {
      console.warn(
        `No reviews found for user ${userId}. Returning empty list.`
      );
      return { reviews: [] };
    }

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user reviews:", error);
    return { reviews: [] };
  }
}
