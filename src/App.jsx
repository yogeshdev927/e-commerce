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
  };

   // ---------- Wishlist ----------
  // Yahan sirf un products ki id rakhte hain jo like kiye hain
  const [wishlist, setWishlist] = useState([])

  const handleToggleWishlist = (productId) => {
    setWishlist((prev)=>
      prev.includes(productId) ? prev.filter((id) => id !== productId)// pehle se hai -> hata do
      :[...prev, productId]// nahi hai -> jod do
    )
  }
  console.log("App render, wishlist =", wishlist);
  return (
    <>
    <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
    <Hero />
    <Categories />
    <Product onAddToCart={handleAddToCart} wishlist={wishlist} onToggleWishlist={handleToggleWishlist} />
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
