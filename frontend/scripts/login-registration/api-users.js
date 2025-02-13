const API_BASE_URL = "https://localhost:51140/api/users";

export async function registerUser(firstname, lastName, email, password) {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      FirstName: firstname,
      LastName: lastName,
      Email: email,
      Password: password,
    }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    console.error("Registration failed:", errorMessage);
    alert("Registration failed: " + errorMessage);
    throw new Error("Registration failed");
  }

  return await response.json();
}

export async function loginUser(email, password) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  if (response.status === 204) {
    console.log("Login successful, no content returned.");
    return;
  }

  return response.json();
}

export async function logoutUser() {
  const response = await fetch(`${API_BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Logout failed");
  } else {
    window.location.href = "index.html";
  }
}
