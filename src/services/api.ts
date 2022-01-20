import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] =
  "application/json, text/plain, text/html";

axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const api = axios.create({
  baseURL: "https://server.prefeituracondeuba.com",
  // baseURL: "http://localhost:3333",
});

export default api;
