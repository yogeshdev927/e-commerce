import React from 'react'

const columns = [
  {
    title: "Shop",
    links: [
      "New Releases",
      "Living & Spatial Décor",
      "Engineered Acoustics",
      "Studio Apparel",
      "Product Capsules",
      "Archived Pieces",
    ],
  },
  {
    title: "Client Support",
    links: [
      "Order Tracking",
      "Returns & Exchanges",
      "Global Shipping",
      "Product Care & Warranty",
      "Studio FAQ",
    ],
  },
  {
    title: "Brand Story",
    links: [
      "Our Philosophy",
      "Material Integrity",
      "Circular Craft",
      "Editorial Press",
      "Studio Careers",
    ],
  },
];

const bottomLinks = ["Privacy Policy", "Terms of Service", "Accessibility"];
const payments = ["VISA", "MC", "AMEX", "APPLE PAY", "KLARNA"];

const Footer = () => {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold tracking-widest text-stone-900">
              SHOPPING BASKET
            </h3>
            <p className="mt-3 max-w-200px text-sm leading-relaxed text-stone-500">
              Curated minimalist lifestyle objects, industrial design tech, and
              living essentials for thoughtful spaces.
            </p>
          </div>

          {/* Link columns (data se bane hain) */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-stone-900">
                {col.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-stone-500 transition hover:text-stone-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Region */}
          <div>
            <h4 className="text-xs font-semibold text-stone-900">
              Region &amp; Currency
            </h4>
            <select className="mt-3 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700">
              <option>United States (USD $)</option>
              <option>India (INR ₹)</option>
              <option>United Kingdom (GBP £)</option>
              <option>Europe (EUR €)</option>
            </select>
            <p className="mt-2 text-[11px] text-stone-400">
              256-bit SSL Encrypted Checkout
            </p>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-stone-200 pt-6 text-[11px] text-stone-500 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>© 2026 Atelier Goods LLC. All rights reserved.</span>
            {bottomLinks.map((l) => (
              <a key={l} href="#" className="hover:text-stone-900">
                {l}
              </a>
            ))}
          </div>

          <div className="flex gap-2">
            {payments.map((p) => (
              <span
                key={p}
                className="rounded border border-stone-200 px-2 py-0.5 text-[10px] font-medium text-stone-500"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
