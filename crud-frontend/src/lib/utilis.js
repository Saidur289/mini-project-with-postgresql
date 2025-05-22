export const baseURL = import.meta.env.MODE === "development"
  ? "http://localhost:3000/"
  : "/";