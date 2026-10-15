import React from 'react'

const CategoryCard = ({ image, title, count }) => {
  return (
    <a
      href="#"
      className="group relative block h-80 overflow-hidden rounded-xl bg-stone-200"
    >
        <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Neeche text padhne ke liye halka dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
 
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-white/80">{count} Crafted Objects</p>
      </div>
    </a>
  )
}

export default CategoryCard
