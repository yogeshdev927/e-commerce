import React, { useState } from 'react'
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Atelier Studio Headphones",
    description: "Acoustic channel isolation with 24-bit...",
    price: 349,
    rating: 4.9,
    badge: "Best Seller",
    tags: ["Best Sellers", "Award Winners"],
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Karso Sculptural Ceramic Carafe",
    description: "Hand-turned Portuguese clay with...",
    price: 78,
    rating: 4.8,
    badge: "New Arrival",
    tags: ["New Releases"],
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Merino Wool Modular Overshirt",
    description: "320gsm brushed wool with horn...",
    price: 185,
    rating: 5.0,
    badge: null,
    tags: ["Best Sellers"],
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Solid Walnut Floating Desk Lamp",
    description: "Touch-capacitive dimmer with...",
    price: 145,
    oldPrice: 169,
    rating: 4.7,
    badge: "17% Off",
    tags: ["New Releases", "Award Winners"],
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
  },
];

const tabs = ["All", "Best Sellers", "New Releases", "Award Winners"];

function Product({onAddToCart, wishlist, onToggleWishlist}) {

    // Ab tak kaunsa tab selected hai, ye React ko yaad rakhna hai
    const [activeTab, setActiveTab] = useState("All")

    // Selected tab ke hisaab se products chhaanto
    const visibleProducts =
    activeTab === "All"
    ? products
    : products.filter((p) => p.tags.includes(activeTab));

  return (
    <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
            {/* Heading + tabs */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-xs text-stone-500">Seasonal Selection</p>
                    <h2 className="mt-1 text-2xl font-semibold text-stone-900">
                        Enduring Essentials
                    </h2>
                </div>
                <div className="flex flex-wrap gap-1 rounded-lg border border-stone-200 bg-white p-1">
                    {tabs.map((tab) => (
                        <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                            activeTab === tab
                            ? "bg-stone-900 text-white"
                            : "text-stone-600 hover:bg-stone-100"
                        }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            {/* Product grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {visibleProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} isLiked={wishlist.includes(product.id)} onToggleWishlist={onToggleWishlist} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Product
