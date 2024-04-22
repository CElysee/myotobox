import React from "react";
import ReactDOM from "react-dom/client";
// import App from './frontend/FrontendApp.jsx'
import "./index.css";
import FrontendApp from "./frontend/App.jsx";
import DashboardApp from "./dashboard/DashboardApp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "../utils/PrivateRoutes";
import App from "./frontend/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
