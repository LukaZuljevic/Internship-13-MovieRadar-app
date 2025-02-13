const API_BASE_URL = "http://localhost:5000/api/users";

export async function registerUser(email, password) {
    const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }

    return await response.json();
}

export async function loginUser(email, password) {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        credentials: "include"
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }

    return await response.json();
}

export async function logoutUser() {
    await fetch(`${API_BASE_URL}/logout`, {
        method: "POST",
        credentials: "include"
    });
}
