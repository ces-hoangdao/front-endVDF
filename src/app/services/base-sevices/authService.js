import axios from "axios"

const API_URL_LOGIN  = "http://localhost:3000/api/auth/signin";
const API_URL_SIGNUP = " http://localhost:3000/api/auth/signup";
const API_URL_LOGOUT = " http://localhost:3000/api/auth/signout";
//need URL
//register Api
const signup = ( username, password) => {
  return axios.post(API_URL_SIGNUP, {
    username,
    password,
  })
  .then((response) => {
      
    console.log(response);
    if (response.data.token) {
      {
        /*Save JWT in localStorage */
      }
      localStorage.setItem("username", username);
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
};

//Login Api
const login = (username, password) => {
  return axios
    .post(API_URL_LOGIN, {
      username,
      password,
    })
    .then((response) => {
      
      console.log(response);
      if (response.data.token) {
        {
          /*Save JWT in localStorage */
        }
        localStorage.setItem("username", username);
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

//Logout Api , remove user
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("email");
  
      window.location.reload();
};

//get stored user information (including JWT)
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  signup,
  login,
  logout,
  getCurrentUser,
  
};
