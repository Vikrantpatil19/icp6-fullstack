import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Features from '../../components/Features/Features'
import AdvertiseVdo from '../../components/AdvertiseVdo/AdvertiseVdo.js'
import Footer from '../../components/Footer/Footer.js'
import Book2 from '../../components/Transport/Transport.js'

function Home() {
  return (
    <div>
      <Navbar/>
      <Transport/>
      <Features/>

      <AdvertiseVdo/>
      <Footer/>
    </div>
  )
}

export default Home
