import axiosInstance from "./axiosInstance.js";

export const login = async (username, password) => {
  const res = await axiosInstance.post("/auth/login", {
    username,
    password,
  });

  localStorage.setItem("access_token", res.data.access_token);
  return res.data;
};
