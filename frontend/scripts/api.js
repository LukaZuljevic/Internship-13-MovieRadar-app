require('dotenv').config();

import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

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