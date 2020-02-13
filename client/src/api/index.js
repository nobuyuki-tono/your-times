import axios from "axios";

let accessPoint = "http://localhost:5000";

export const api = axios.create({
  baseURL: accessPoint
});
