export function checkUserRole() {
  const token = localStorage.getItem("authToken");

  if (!token) {
    window.location.href = "login.html";
    return;
  }

  const decodedToken = parseJwt(token);

  if (decodedToken.role !== "Admin") {
    window.location.href = "landingPage.html";
  }
}
