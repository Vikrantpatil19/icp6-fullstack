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
import HeroTrain from '../../components/HeroTrain/HeroTrain.js'
import HeroAero from '../../components/HeroAero/HeroAero.js'
import Preloader from '../../components/Preloader/Preloader.js'
<<<<<<< HEAD
=======
import ReviewComp from '../../components/ReviewComp/ReviewComp.js'
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078

function Home() {
  return (
    <div className='mt-5'>
      <Navbar/>
      <Carousel/>
      <Transport/>
<<<<<<< HEAD
      <Preloader/>
=======
      {/* <Preloader/> */}
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
      <HeroTrain/>
      <HeroAero/>
      <Features/>
      <Globe/>
<<<<<<< HEAD

      <AdvertiseVdo/>
=======
      <AdvertiseVdo/>
      <ReviewComp/>
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
      <Statistics/>
      <Footer/>
    </div>
  )
}

export default Home
