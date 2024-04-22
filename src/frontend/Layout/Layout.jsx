import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Routers from '../../routers/routers'

function Layout() {
  return (
    <>
    <Header />
    <Routers />
    <Footer />
    </>
  )
}

export default Layout