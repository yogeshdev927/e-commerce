import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-stone-50 to-white">
        {/* Container: content ko beech mein rakhta hai aur side padding deta hai */}
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* ---------- LEFT SIDE: text ---------- */}
        <div>
            <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                 Spring/Summer 2026 Edition
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Functional Craftsmanship for Mindful Living
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-stone-600">
                Explore our curated release of acoustic audio, architectural
                homeware, and precision-tailored garments engineered for calm
                contemplation and timeless daily ritual.
            </p>
            {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-md bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
              Shop the Collection
            </button>
            <button className="rounded-md border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-100">
              Explore Lookbook
            </button>
          </div>
           {/* Trust badges */}
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-stone-500">
            <li>Carbon Neutral Certified</li>
            <li>Lifetime Warranty</li>
            <li>48 Hr Carbon-Free Dispatch</li>
          </ul>
        </div>
        {/* ---------- RIGHT SIDE: product card ---------- */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80"
            alt="Spatial Audio Series II headphones"
            className="h-420px w-full object-cover lg:h-520px hover:scale-105"
            />
            {/* Image ke upar chhota white card */}
          <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 p-4 backdrop-blur">
             <p className="text-xs text-stone-500">Spotlight Object</p>
             <div className="mt-1 flex items-start justify-between">
                <div>
                    <h3 className="text-sm font-semibold text-stone-900">
                        Spatial Audio Series II
                    </h3>
                    <p className="text-xs text-stone-500">
                        Precision aluminum &amp; cotton earcups
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-sm font-semibold text-stone-900">$349</p>
                    <p className="text-xs text-stone-500">4.9 rating</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
