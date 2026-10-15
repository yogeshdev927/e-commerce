import React from 'react'
import CategoryCard from './CategoryCard';

const categories = [
  {
    id: 1,
    title: "Acoustic & Tech",
    count: 38,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Living & Interior",
    count: 64,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Studio Apparel",
    count: 42,
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Ergonomic Workspace",
    count: 29,
    image:
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=600&q=80",
  },
];

const Categories = () => {
  return (
    <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
            {/* Heading row */}
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-xs text-stone-500">Spatial Taxonomy</p>
                    <h2 className="mt-1 text-2xl font-semibold text-stone-900">
                        Explore Curated Disciplines
                    </h2>
                </div>
                <p className="max-w-sm text-sm text-stone-500">
                    Archetypes conceived with structural honesty, refined finishes, and
                    tactile human warmth.
                </p>
            </div>

            {/* Cards grid: mobile 1, tablet 2, desktop 4 columns */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              image={item.image}
              title={item.title}
              count={item.count}
            />
          ))}
        </div>
        </div>
    </section>
  )
}

export default Categories
