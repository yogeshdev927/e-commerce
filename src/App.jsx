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
import CartDrawer from './components/CartDrawer'

const App = () => {
  // Cart ka count yahan rakha hai, kyunki Navbar AUR Products dono ko isse kaam hai
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.some((item) => item.id === product.id)

      if(exists){
        return prev.map((item) =>
        item.id === product.id ? {...item, quantity: item.quantity+1} : item );
      }
      return [...prev, {...product, quantity: 1}]
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChangeQuantity = (id, change) => {
    setCartItems ((prev) => prev.map((item) => item.id === id ? {...item, quantity: item.quantity + change} : item)
    .filter((item) => item.quantity > 0)
  );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
   // ---------- Wishlist ----------
  // Yahan sirf un products ki id rakhte hain jo like kiye hain
  const [wishlist, setWishlist] = useState([])

  const handleToggleWishlist = (productId) => {
    setWishlist((prev)=>
      prev.includes(productId) ? prev.filter((id) => id !== productId)// pehle se hai -> hata do
      :[...prev, productId]// nahi hai -> jod do
    )
  }

  return (
    <>
    <Navbar cartCount={cartCount} wishlistCount={wishlist.length} onCartClick = {() => setIsCartOpen(true)} />
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
    <CartDrawer isOpen = {isCartOpen} onClose = {() => setIsCartOpen(false)} items = {cartItems} onRemove = {handleRemoveFromCart} onChangeQuantity = {handleChangeQuantity} subtotal = {subtotal} />
    </>
  )
}

export default App
