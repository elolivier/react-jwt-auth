import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getPrivateContent = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard: getPrivateContent,
};

export default UserService;
