import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Routers from '../router/Routers'

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