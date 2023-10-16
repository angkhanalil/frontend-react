import axios from "axios";
import TokenService from "./Service/TokenService";
const instance = axios.create({
  baseURL: "http://localhost:8082/",
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(
  (config) => {
    const accessToken = TokenService.getLocalAccessToken();
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
