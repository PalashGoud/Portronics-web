import React from 'react'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Context from './Context'


function Home() {
  return (
    <div>
        <Carousel></Carousel>
        <Categories></Categories>
        <Products></Products>
        <Footer></Footer>
        
        
    </div>
  )
}

export default Home