import axios from "axios";


export const api = axios.create({
    baseURL: import.meta.env.FLASK_API_URL ,
});
