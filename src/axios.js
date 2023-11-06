import axios from "axios";
import TokenService from "./Service/TokenService";
const instance = axios.create({
  baseURL: "https://spbwebapp.wacoal.co.th/uniform-backend2/",
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
