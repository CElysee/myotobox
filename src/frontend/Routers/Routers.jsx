import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../frontend/Pages/home/Home'
import BuyCars from '../frontend/Pages/BuyCars/BuyCars'
import RentCars from '../frontend/Pages/RentCars/RentCars'
import CarDetails from '../frontend/Pages/CarDetails/CarDetails'
import ImportOnOrder from '../frontend/Pages/ImportOnOrder/ImportOnOrder'

function Routers() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/CarDetails' element={<CarDetails />} />
    <Route path='/BuyCars' element={<BuyCars />} />
    <Route path='/RentCars' element={<RentCars />} />
    <Route path='/ImportOnOrder' element={<ImportOnOrder />} />
   </Routes>
  )
}

export default Routers