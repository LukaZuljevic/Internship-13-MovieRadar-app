import { createClient, SupabaseClient } from "../../node_modules/@supabase/supabase-js";

const supabaseUrl = "https://tngerdgbjeqzckgbhkta.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuZ2VyZGdiamVxemNrZ2Joa3RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMTUzMTIsImV4cCI6MjA1NDU5MTMxMn0.ya8wKxuIIkRQjPPEymgPCy_fJEyFEUD6CmeS_0R-ySc";

const supabase = createClient(supabaseUrl, supabaseKey);

export async function registerUser(email, password) {
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
    })

    if(error) {
        console.log("Error w registration: ", error.message);
    }
    else {
        console.log("User registered: ", user);
    }
}

export async function loginUser(email, password) {
    const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })

    if(error) {
        console.log("Error w login: ", error.message);
    }
    else {
        console.log("User logged in: ", user);
    }
}

export async function logoutUser() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.log("Error with logging out", error.message)
      } else {
        console.log("User logged out");
      }
}

export async function fetchData() {
    const { data, error } = await supabase
        .from('users')
        .select('*')

    if (error) {
        console.log("Error fetching data", error.message)
    } else {
        console.log('Data:', data)
    }
}

export async function insertData(name, email) {
    const { data, error } = await supabase
      .from('users')
      .insert([
        { name: name, email: email }
      ])
    
    if (error) {
      console.log("Error inserting data", error.message)
    } else {
      console.log("Data inserted", data)
    }
  }