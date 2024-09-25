import axios from "axios";

const baseURL = "http://127.0.0.1:5000";

if (!baseURL) {
    console.error("A baseURL não está definida.");
}

const api = axios.create({ baseURL });

console.log(api);

export default api;
