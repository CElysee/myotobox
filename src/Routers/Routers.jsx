import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../frontend/pages/home/Home";
import BuyCars from "../frontend/pages/BuyCars/BuyCars";
import RentCars from "../frontend/pages/RentCars/RentCars";
import CarDetails from "../frontend/pages/CarDetails/CarDetails";
import ImportOnOrder from "../frontend/pages/ImportOnOrder/ImportOnOrder";
import Login from "../frontend/pages/Auth/Login";
import PrivateRoutes from "../../utils/PrivateRoutes";
import AdminDashboard from "../dashboard/pages/admin/AdminDashboard";
import NotFound from "../frontend/pages/NotFound/NotFound";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carDetails/:stock/:name" element={<CarDetails />} />
      <Route path="/buyCars/:make/:model" element={<BuyCars />} />
      <Route path="/buyCars/:make" element={<BuyCars />} />
      <Route path="/buyCars" element={<BuyCars />} />
      <Route path="/RentCars" element={<RentCars />} />
      <Route path="/ImportOnOrder" element={<ImportOnOrder />} />
      <Route path="/login" element={<Login />} />
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/admin/*" element={<PrivateRoutes />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        {/* <Route path="users" element={<AdminUsers />} />
        <Route path="bookings" element={<AdminBookings />} />
        <Route path="calendar" element={<AdminCalendar />} />
        <Route path="vouchers" element={<AdminVoucher />} />
        <Route path="support" element={<Support />} /> */}
      </Route>
    </Routes>
  );
}

export default Routers;
