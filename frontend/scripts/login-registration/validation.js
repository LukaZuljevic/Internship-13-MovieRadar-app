const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export function isValidEmail(email) {
    return emailRegex.test(email);
}

export function isValidPassword(password) {
    return passwordRegex.test(password);
}

export function validateLogin(email, password) {
    if(email === "" ||password === "") {
        alert("Please insert email and password!");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Invalid email format! Please enter a valid email.");
        return false;
    }

    // if (!isValidPassword(password)) {
    //     alert("Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number.");
    //     return false;
    // }

    alert("Login successful!");
    return true;
}

export function validateRegister(email, password, confirmPassword) {
    if (email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all the slots!");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Invalid email format! Please enter a valid email.");
        return false;
    }

    // if (!isValidPassword(password)) {
    //     alert("Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number.");
    //     return false;
    // }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Registration successful!");
    return true;
}

