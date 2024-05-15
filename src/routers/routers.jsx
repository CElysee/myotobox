import React, {useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../frontend/pages/home/Home";
import BuyCars from "../frontend/pages/buyCars/BuyCars";
import RentCars from "../frontend/pages/rentCars/RentCars";
import CarDetails from "../frontend/pages/carDetails/CarDetails";
import ImportOnOrder from "../frontend/pages/importOnOrder/ImportOnOrder";
import Login from "../frontend/pages/auth/Login";
import PrivateRoutes from "../../utils/PrivateRoutes";
import AdminDashboard from "../dashboard/pages/admin/AdminDashboard";
import NotFound from "../frontend/pages/notFound/NotFound";
import BodyShape from "../frontend/pages/buyCars/BodyShape";
import ThankYouBookingTestDrive from "../frontend/pages/messages/ThankYouBookingTestDrive";
import ImportOnOrderMessage from "../frontend/pages/messages/ImportOnOrderMessage";
import TaxCalculator from "../frontend/pages/taxCalculator/TaxCalculator";
import TaxCalculatorMessage from "../frontend/pages/messages/TaxCalculatorMessage";
import SignUp from "../frontend/pages/auth/SignUp";
import AccountCreated from "../frontend/pages/messages/AccountCreated";

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
      <Route path="/import_on_order" element={<ImportOnOrder />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/account-created" element={<AccountCreated />} />
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="/booking_message" element={<ThankYouBookingTestDrive />} />
      <Route path="/import_on_order_message" element={<ImportOnOrderMessage />} />
      <Route path="/car_tax_calculator" element={<TaxCalculator />} />
      <Route path="/car_tax_calculator_results/:id" element={<TaxCalculatorMessage />} />
      <Route path="/404" element={<NotFound />} />
      
      <Route path="*" element={<NotFound />} />
      <Route path="/admin/*" element={<PrivateRoutes />}>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default Routers;
