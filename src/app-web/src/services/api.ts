import axios from "axios";

export const apiBase = axios.create({
  baseURL: " http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});
