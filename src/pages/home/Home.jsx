import React from 'react'
import SellCarsGrid from '../../components/SellCarsGrid/SellCarsGrid'
import RentCarsGrid from "../../components/RentCarsGrid/RentCarsGrid"

function Home() {
  return (
    <div className='main_content'>
    <SellCarsGrid />
    <RentCarsGrid />
    </div>
  )
}

export default Home