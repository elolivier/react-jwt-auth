import axios from "axios";

const API_URL = "api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login",
        {
      username,
      password,
    })
    .then((response) => {
      const responseBody = ((response) => (
          {...response.data, "accessToken":response.headers.authorization}
      ))(response);
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(responseBody));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

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
