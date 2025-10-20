import React from 'react'
import Discount from './components/Discount/Discount.jsx'
import Swiper from './components/Swiper/Swiper.jsx'
import Banner from './components/Banner/Banner.jsx'
import Features from './components/Features/Features.jsx'
import Partners from './components/Partners/Partners.jsx'
import AboutVideo from './components/AboutVideo/AboutVideo.jsx'
import ProductList from './components/Productlist/Productlist.jsx'

const Home = () => {
  return (
    <>
    <Discount/>
    <Swiper/>
    <ProductList />
    <Banner/>  
    <Features/>
    <Partners/>
    <AboutVideo/>
    </>
  )
}

export default Home
