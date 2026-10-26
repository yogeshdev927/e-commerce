import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Product from './components/Product'
import Promo from './components/Promo'
import Features from './components/Features'
import Press from './components/Press'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const App = () => {
  // Cart ka count yahan rakha hai, kyunki Navbar AUR Products dono ko isse kaam hai
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev+1);
  }

  return (
    <>
    <Navbar cartCount={cartCount} />
    <Hero />
    <Categories />
    <Product onAddToCart={handleAddToCart} />
    <Promo />
    <Features />
    <Press />
    <Reviews />
    <Gallery />
    <Newsletter />
    <Footer />
    </>
  )
}

export default App
