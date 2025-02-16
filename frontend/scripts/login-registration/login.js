import { registerUser, loginUser } from "./api-auth.js";
import { validateLogin, validateRegister } from "./validation.js";

export function setupLoginRegister() {
  const loginContainer = document.getElementById("login");
  const registerContainer = document.getElementById("register");
  const registerBtn = document.getElementById("register-btn");
  const loginBtn = document.getElementById("login-btn");

  const loginEmailInput = document.getElementById("login-email");
  const loginPasswordInput = document.getElementById("login-password");

  const registerEmailInput = document.getElementById("register-email");
  const registerPasswordInput = document.getElementById("register-password");
  const confirmPasswordInput = document.getElementById(
    "register-confirm-password"
  );
  const firstNameInput = document.getElementById("firstName-register");
  const lastNameInput = document.getElementById("lastName-register");

  const loginSubmitBtn = document.getElementById("login-submit");
  const registerSubmitBtn = document.getElementById("register-submit");

  registerBtn.addEventListener("click", function () {
    loginContainer.style.display = "none";
    registerContainer.style.display = "block";
  });

  loginBtn.addEventListener("click", function () {
    registerContainer.style.display = "none";
    loginContainer.style.display = "block";
  });

  loginSubmitBtn.addEventListener("click", async function () {
    const email = loginEmailInput.value.trim();
    const password = loginPasswordInput.value.trim();

    if (!validateLogin(email, password)) return;

    try {
      const result = await loginUser(email, password);

      if (result) {
        alert("Login successful!");
        window.location.href = "landingPage.html";
      }
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  });

  registerSubmitBtn.addEventListener("click", async function () {
    const email = registerEmailInput.value.trim();
    const password = registerPasswordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if (
      !validateRegister(firstName, lastName, email, password, confirmPassword)
    ) {
      return;
    }

    try {
      const result = await registerUser(firstName, lastName, email, password);

      if (result) {
        registerContainer.style.display = "none";
        alert("Registration successful! You can now log in!");
        window.location.href = "index.html";
      }
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  });
}

export function getUserFromToken() {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("JWT token not found in localStorage.");
      return null;
    }
    const tokenParts = token.split(".");
    if (tokenParts.length !== 3) {
      return null;
    }
    const payload = atob(tokenParts[1]);
    return JSON.parse(payload);
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
}
