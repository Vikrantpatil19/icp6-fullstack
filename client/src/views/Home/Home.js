import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Features from '../../components/Features/Features'
import AdvertiseVdo from '../../components/AdvertiseVdo/AdvertiseVdo.js'
import Footer from '../../components/Footer/Footer.js'
// import Book2 from '../../components/Transport/Transport.js'
import Transport from '../../components/Book2/Transport.js'
import Statistics from '../../components/Statistics/Statistics.js'
import Carousel from '../../components/Carousel/Carousel.js'
import Globe from '../../components/Globe/Globe.js'

function Home() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Transport/>
      <Features/>
      <Globe/>

      <AdvertiseVdo/>
      <Statistics/>
      <Footer/>
    </div>
  )
}

export default Home
