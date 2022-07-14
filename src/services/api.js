import axios from "axios";

export const api = axios.create({
  baseURL: " https://api-friendly-market.herokuapp.com",
});
