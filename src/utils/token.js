import { jwtDecode } from "jwt-decode";

// Function to save the JWT token to localStorage
function saveToken(token) {
  localStorage.setItem('access_token', token);
}


function getToken() {
  try {
    const token = localStorage.getItem("access_token");
    if (token) {
      return jwtDecode(token);
    } else {
      return null; // Handle case where token doesn't exist
    }
  } catch(error) {
    console.error("Error decoding token:", error);
    return null;
  }
}

// Function to remove the JWT token from localStorage
function destroyToken() {
  localStorage.removeItem('access_token');
}

export { saveToken, destroyToken, getToken };
