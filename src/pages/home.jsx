import React from 'react'
import Header from '../components/Layout/header.jsx'
import Hero from '../components/Route/Hero/Hero.jsx'
import Catagories from '../components/Route/Catagories/Catagories.jsx'
import BestDeal from '../components/Route/BestDeal/BestDeal.jsx'
import FeaturedProduct from '../components/Route/Featuredproduct/FeaturedProduct.jsx'
import Events from '../components/Events/Events.jsx'
import Sponsored from '../components/Route/Sponsored/Sponsored.jsx'
import Footer from '../components/Layout/Footer.jsx'
export default function Home() {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <Catagories />
        <BestDeal />
        <Events />
        <FeaturedProduct />
        <Sponsored />
        <Footer/>
    </div>
  )
}
