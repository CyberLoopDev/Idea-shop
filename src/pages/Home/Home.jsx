import React from 'react'
import Discount from './components/Discount/Discount.jsx'
import Swiper from './components/Swiper/Swiper.jsx'
import Banner from './components/Banner/Banner.jsx'
import ProductList from './components/ProductList/ProductList.jsx'

const Home = () => {
  return (
    <>
    <Discount/>
    <Swiper/>
    <ProductList />
    <Banner/>  
    </>
  )
}

export default Home
