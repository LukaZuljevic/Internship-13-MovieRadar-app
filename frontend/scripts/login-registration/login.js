import { registerUser, loginUser, logoutUser } from "../api.js";
import { validateLogin, validateRegister } from "./validation.js";

export function setupLoginRegister () {
    const loginContainer = document.getElementById("login");
    const registerContainer = document.getElementById("register");
    const registerBtn = document.getElementById("register-btn");
    const loginBtn = document.getElementById("login-btn");

    const loginEmailInput = document.getElementById("login-email");
    const loginPasswordInput = document.getElementById("login-password");

    const registerEmailInput = document.getElementById("register-email");
    const registerPasswordInput = document.getElementById("register-password");
    const confirmPasswordInput = document.getElementById("register-confirm-password");
    const firstNameInput = document.getElementById("firstName-register");
    const lastNameInput = document.getElementById("lastName-register");

    const loginSubmitBtn = document.getElementById("login-submit");
    const registerSubmitBtn = document.getElementById("register-submit");
    //const logoutBtn = document.getElementById("logout-btn");

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

        if (!validateLogin(email, password)) {
            alert("Invalid login details!");
            return;
        }

        try {
            const result = await loginUser(email, password);
            console.log("Login success:", result);
            alert("Login successful!");
            window.location.href = "landingPage.html"
        } catch (error) {
            alert("Login failed: " + error.message);
            console.error("Login error:", error);
        }
    });

    registerSubmitBtn.addEventListener("click", async function () {
        const email = registerEmailInput.value.trim();
        const password = registerPasswordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();

        if (!validateRegister(email, password, confirmPassword)) {
            return;
        }

        try {
            const result = await registerUser(firstName, lastName, email, password);
            console.log("Registration success:", result);
            registerContainer.style.display = "none";
            alert("Registration successful!");
            window.location.href = "landingPage.html"
        } catch (error) {
            alert("Registration failed: " + error.message);
            console.error("Registration error:", error);
        }
    });

    // logoutBtn.addEventListener("click", async function () {
    //     try {
    //         await logoutUser();
    //         alert("Logout successful!");
    //         window.location.href = "index.html";
    //     } catch (error) {
    //         alert("Logout failed: " + error.message);
    //     }
    // });
    
}