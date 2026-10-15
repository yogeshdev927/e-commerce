import { Heart, Search, ShoppingBag } from 'lucide-react';
import React from 'react'

const Navbar = () => {

  const LINKS = [
  "New Arrivals",
  "Living & Decor",
  "Audio & Tech",
  "Apparel",
  "Curated Edits",
  "Sale",
];

  return (
    <header className="atelier-nav sticky top-0 z-50 w-full">
      <nav className="mx-auto flex h-76px max-w-1400px items-center justify-between gap-6 px-12">
         {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-3">
          <span className="flex items-center justify-center rounded bg-[#0b1530] px-1 text-16px font-extrabold tracking-wider text-white">
            Shoping
          </span>
          <span className="text-18px font-extrabold tracking-tight text-[#0b1530]">
            BASKET
          </span>
        </a>

         {/* Links */}

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((label) => (
            <li key={label}>
              <button
                type="button"
                className="atelier-link whitespace-nowrap rounded-lg px-3 py-2 text-[15px] font-semibold text-slate-600"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}

        <div className="flex shrink-0 items-center gap-5">
          <label className="atelier-search flex h-10 w-256px items-center gap-2 rounded-lg bg-white px-3">
            <Search size={16} className="text-slate-500" />
            <input
              type="text"
              placeholder="Search catalog..."
              className="w-full bg-transparent text-[14px] text-slate-700 outline-none placeholder:text-slate-400"
            />
            <span className="atelier-kbd">⌘Y</span>
          </label>
          <button type="button" aria-label="Wishlist" className="relative text-slate-700 hover:text-[#0b1530]">
            <Heart size={20} />
          </button>
          <button type="button" aria-label="Cart" className="relative text-slate-700 hover:text-[#0b1530]">
            <ShoppingBag size={20} />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
