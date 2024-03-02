import Axios from "axios";

// Base url
const apiUrl = process.env.REACT_APP_API_BASE_URL;

// API call to create an account
export const registerUser = async (user) => {
  try {
    // Return the response
    return await Axios.post(apiUrl + "/api/users/register", user);
  } catch (error) {
    throw new Error("Server Error" + error);
  }
};

// API call to login
export const loginUser = async (user) => {
  try {
    // Return the response
    return await Axios.post(apiUrl + "/api/users/login", user);
  } catch (error) {
    throw new Error("Server Error" + error);
  }
};

// API call for profile
export const profileUser = async (token) => {
  try {
    // Return the response
    return await Axios.get(apiUrl + "/api/users/profile", {
      headers: {
        authorization: token,
      },
    });
  } catch (error) {
    throw new Error("Server Error");
  }
};
