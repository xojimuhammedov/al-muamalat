import axios from "axios";
const API_BASE_URL = "https://api.al-muamalat.uz/api";
export const API_URL = "https://api.al-muamalat.uz/api";

const axiosInstance = axios;
axiosInstance.defaults.baseURL = API_BASE_URL;

axiosInstance.interceptors.request.use(
  async (config) => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem("userToken");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    config.headers["Content-Type"] = "multipart/form-data";
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);


export const API = {
  registerUser: (payload) => axiosInstance.post("/auth/signup", payload),
  loginUser: (payload) => axiosInstance.post("/auth/signin", payload),
  purchasesPost: (payload) => axiosInstance.post("/courses/user", payload),
  updateProfile: (payload) =>
    axiosInstance.put(`/users/${payload?.id}`, payload),
  userMe: () => axiosInstance.get("/users/me"),
  myCourses: () => axiosInstance.get("/courses/my"),
  registerUserForEmail: (payload) => axiosInstance.post("/v2/auth/signup/init", payload),
  verifyEmail: (payload) => axiosInstance.post("/v2/auth/signup/verify", payload),
  loginUserForEmail: (payload) => axiosInstance.post("/v2/auth/signin/init", payload),
  verifyLoginEmail: (payload) => axiosInstance.post("/v2/auth/signin/verify", payload),
  forgotPasswordResend: (payload) => axiosInstance.post("/v2/auth/password/forgot/resend", payload),
  forgotPasswordVerify: (payload) => axiosInstance.post("/v2/auth/password/forgot/verify", payload),
  forgotPasswordConfirm: (payload) => axiosInstance.post("/v2/auth/password/forgot/confirm", payload),
};
