/*login and register*/ 
import { setupLoginRegister } from "./login-registration/login.js";
import { supabase } from "./api.js";

document.addEventListener("DOMContentLoaded", function () {
    setupLoginRegister();
});

async function testConnection() {
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    console.error("Error fetching data:", error.message);
  } else {
    console.log("Fetched data:", data);
  }
}
testConnection();

