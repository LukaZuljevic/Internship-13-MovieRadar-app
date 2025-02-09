import { registerUser, loginUser } from "../api.js";
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

    registerBtn.addEventListener("click", function () {
        loginContainer.style.display = "none";
        registerContainer.style.display = "block";
    });

    loginBtn.addEventListener("click", function () {
        registerContainer.style.display = "none";
        loginContainer.style.display = "block";
    });

    document.getElementById("login-submit").addEventListener("click", async function () {
        const email = loginEmailInput.value.trim();
        const password = loginPasswordInput.value.trim();
        if (validateLogin(email, password)) {
            await loginUser(email, password); 
        }
    });

    document.getElementById("register-submit").addEventListener("click", async function () {
        const email = registerEmailInput.value.trim();
        const password = registerPasswordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        if (validateRegister(email, password, confirmPassword)) {
            await registerUser(email, password);  
        }
    });
}