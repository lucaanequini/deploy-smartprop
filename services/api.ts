import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASEURL;

if (!baseURL) {
    console.error("A baseURL não está definida.");
}

const api = axios.create({ baseURL });

console.log(api);  // Verifique se o objeto `api` tem o método `post`.

export default api;
