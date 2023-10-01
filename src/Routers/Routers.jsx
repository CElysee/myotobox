import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Pages/home/Home'
import BuyCars from '../Pages/BuyCars/BuyCars'
import CarDetails from '../Pages/CarDetails/CarDetails'

function Routers() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/CarDetails' element={<CarDetails />} />
    <Route path='/BuyCars' element={<BuyCars />} />
   </Routes>
  )
}

export default Routers