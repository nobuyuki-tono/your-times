import axios from "axios";

let accessPoint = process.env;

export const api = axios.create({
  baseURL: accessPoint
});
