import React, {useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../frontend/pages/home/Home";
import BuyCars from "../frontend/pages/buyCars/BuyCars";
import RentCars from "../frontend/pages/rentCars/RentCars";
import CarDetails from "../frontend/pages/carDetails/CarDetails";
import ImportOnOrder from "../frontend/pages/importOnOrder/ImportOnOrder";
import Login from "../frontend/pages/Auth/Login";
import PrivateRoutes from "../../utils/PrivateRoutes";
import AdminDashboard from "../dashboard/pages/admin/AdminDashboard";
import NotFound from "../frontend/pages/notFound/NotFound";
import BodyShape from "../frontend/pages/buyCars/BodyShape";

function Routers() {
  return (
    <Routes scrollRestoration="auto">
      <Route path="/" element={<Home />} />
      <Route path="/carDetails/:stock/:name" element={<CarDetails />} />
      <Route path="/buyCars/:make/:model" element={<BuyCars />} />
      <Route path="/buyCars/:make" element={<BuyCars />} />
      <Route path="/buyCars" element={<BuyCars />} />
      <Route path="/bodyShape/:shape" element={<BodyShape />} />
      <Route path="/RentCars" element={<RentCars />} />
      <Route path="/ImportOnOrder" element={<ImportOnOrder />} />
      <Route path="/login" element={<Login />} />
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/admin/*" element={<PrivateRoutes />}>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default Routers;
