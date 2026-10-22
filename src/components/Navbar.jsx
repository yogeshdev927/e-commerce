import { ChevronDown, Heart, Menu, Search, ShoppingBag, X } from 'lucide-react';
import React, { useState } from 'react'

const navLinks = [
  { id: 1, label: "New Arrivals", dropdown: false },
  { id: 2, label: "Living & Decor", dropdown: true },
  { id: 3, label: "Audio & Tech", dropdown: true },
  { id: 4, label: "Apparel", dropdown: false },
  { id: 5, label: "Curated Edits", dropdown: true },
  { id: 6, label: "Sale", dropdown: false },
];

function Navbar() {
  const [active, setActive] = useState("New Arrivals")
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50">
      <nav className="border-b border-stone-200 bg-white/95 backdrop-blur">
         <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
          <a href="#" className="flex items-center gap-2">
            <span className="flex text-sm font-bold tracking-widest p-1 items-center justify-center rounded-md bg-stone-900 text-white">
              SHOPPING
            </span>
            <span className="text-sm font-bold tracking-widest text-stone-900">
              BASKET
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => setActive(link.label)}
                  className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    active === link.label
                      ? "bg-stone-900 text-white"
                      : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                  }`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={12} />}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side: search + icons */}
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
              />
              <input
                type="text"
                placeholder="Search our catalog..."
                className="w-52 rounded-md border border-stone-200 bg-stone-50 py-2 pl-9 pr-10 text-xs outline-none transition focus:border-stone-900"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-stone-200 bg-white px-1.5 text-[14px] text-stone-400">
                ⌘Y
              </span>
            </div>

            {/* Mobile search icon */}
            <button aria-label="Search" className="text-stone-700 md:hidden">
              <Search size={18} />
            </button>
            {/* Wishlist */}
            <button aria-label="Wishlist" className="relative text-stone-700">
              <Heart size={18} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[9px] font-semibold text-white">
                2
              </span>
            </button>
            {/* Bag */}
            <button aria-label="Shopping bag" className="relative text-stone-700">
              <ShoppingBag size={18} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[9px] font-semibold text-white">
                1
              </span>
            </button>
            {/* Avatar */}
            <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-stone-200 text-xs font-semibold text-stone-700 sm:flex">
              Y
            </div>

            {/* Hamburger (sirf mobile / tablet) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="text-stone-900 lg:hidden"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
         </div>

         {/* ---------- Mobile menu ---------- */}
         {menuOpen && (
          <ul className="border-t border-stone-200 bg-white px-6 py-3 lg:hidden">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    setActive(link.label);
                    setMenuOpen(false); // link dabane par menu band
                  }}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-3 text-sm ${
                    active === link.label
                      ? "bg-stone-100 font-semibold text-stone-900"
                      : "text-stone-600"
                  }`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} />}
                </button>
              </li>
            ))}
          </ul>
         )}
      </nav>
    </header>
  )
}

export default Navbar
