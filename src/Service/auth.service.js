import axios from "../axios";
import TokenService from "./TokenService";

//Register
const register = (username, email, password) => {
  return axios.post("api/auth/signup", {
    username,
    email,
    password,
  });
};

//Login
const login = (username, password) => {
  return axios
    .post("api/auth/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        TokenService.setUser(response.data);
        console.log(
          localStorage.getItem("user", JSON.stringify(response.data))
        );
      }

      return response.data;
    });
  // .catch((err) => {
  //   console.log("catcherr", err);
  // });
};

//Logout
const logout = () => {
  TokenService.removeUser();
};

//Get User
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
