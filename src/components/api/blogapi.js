import axios from "axios";

export const blogapi = axios.create(
    {
        baseURL: "http://localhost:3006"
    }
);