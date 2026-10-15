import React, { useState } from 'react'

function ProductCard({ product }) {
    // Har card ki apni alag state: wishlist mein hai ya nahi
    const [liked, setLiked] = useState(false)
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white">
        {/* Image area */}
        <div className="relative bg-stone-100">
            <img
            src={product.image}
            alt={product.name}
            className="h-56 w-full object-cover"
            />
            {/* Badge (sirf tab dikhega jab product mein badge ho) */}
            {product.badge && (
                <span className="absolute left-3 top-3 rounded bg-stone-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                    {product.badge}
                </span>
            )}

            {/* Wishlist button */}
            <button
            onClick={() => setLiked(!liked)}
            aria-label="Add to wishlist"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg shadow"
            >
                <span className={liked ? "text-red-500" : "text-stone-400"}>
                    {liked ? "♥" : "♡"}
                </span>
            </button>
      </div>
      {/* Details */}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-stone-500">{product.rating} ★</p>
        <h3 className="mt-1 text-sm font-semibold text-stone-900">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-stone-500">{product.description}</p>

        {/* Price + button hamesha neeche rahe, isliye mt-auto */}
        <div className="mt-auto flex items-center justify-between pt-4">
            <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-stone-900">
                    ${product.price}
                </span>
                {product.oldPrice && (
                    <span className="text-xs text-stone-400 line-through">
                        ${product.oldPrice}
                    </span>
                )}
          </div>
          <button className="rounded-md bg-stone-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-stone-700">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
