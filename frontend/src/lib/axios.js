import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "https://https://fullstack-chat-app-production-adf8.up.railway.app/.railway.app/api",
  withCredentials: true,
});

