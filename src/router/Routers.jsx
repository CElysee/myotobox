import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import CarDetails from '../pages/CarDetails/CarDetails'

function Routers() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/CarDetails' element={<CarDetails />} />
   </Routes>
  )
}

export default Routers