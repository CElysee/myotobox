import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../frontend/Pages/home/Home'
import BuyCars from '../frontend/Pages/BuyCars/BuyCars'
import RentCars from '../frontend/Pages/RentCars/RentCars'
import CarDetails from '../frontend/Pages/CarDetails/CarDetails'
import ImportOnOrder from '../frontend/Pages/ImportOnOrder/ImportOnOrder'
import Login from '../frontend/Pages/Auth/Login'
import PrivateRoutes from '../../utils/PrivateRoutes'
import AdminDashboard from '../dashboard/pages/admin/AdminDashboard'

function Routers() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/CarDetails' element={<CarDetails />} />
    <Route path='/BuyCars' element={<BuyCars />} />
    <Route path='/RentCars' element={<RentCars />} />
    <Route path='/ImportOnOrder' element={<ImportOnOrder />} />
    <Route path='/login' element={<Login />} />
    <Route path="dashboard" element={<AdminDashboard />} />
    <Route path="/admin/*" element={<PrivateRoutes />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        {/* <Route path="users" element={<AdminUsers />} />
        <Route path="bookings" element={<AdminBookings />} />
        <Route path="calendar" element={<AdminCalendar />} />
        <Route path="vouchers" element={<AdminVoucher />} />
        <Route path="support" element={<Support />} /> */}
      </Route>
   </Routes>
  )
}

export default Routers