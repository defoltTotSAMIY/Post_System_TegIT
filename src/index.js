import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));

//axios config
axios.defaults.baseURL = "https://online-shop-back-end-api.herokuapp.com/api/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth_token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});
axios.defaults.withCredentials = true;

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
