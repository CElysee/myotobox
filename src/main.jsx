import React from "react";
import ReactDOM from "react-dom/client";
// import App from './frontend/FrontendApp.jsx'
import "./index.css";
import FrontendApp from "./frontend/FrontendApp.jsx";
import DashboardApp from "./dashboard/DashboardApp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "../utils/PrivateRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<DashboardApp />} />
        <Route path="/*" element={<FrontendApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
