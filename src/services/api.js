import axios from "axios";

const api = axios.create({
    baseURL: "http://globalll.org/api"
});

export default api;