import React from 'react'

const photos = [
  {
    id: 1,
    alt: "Studio desk setup",
    src: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    alt: "Warm modern interior",
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    alt: "Man in a wool coat",
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    alt: "Library bookshelf",
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80",
  },
];

function Gallery() {
  return (
    <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="flex items-end justify-between">
                <div>
                    <p className="text-xs text-orange-600">Social Chronicle</p>
                    <h2 className="mt-1 text-2xl font-semibold text-stone-900">
                        Styled in the Wild
                    </h2>
                </div>
                <a
                href="#"
                className="text-xs text-stone-500 transition hover:text-stone-900"
                >
                    Follow our dispatches @shoppingbasket.objects
                </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {photos.map((photo) => (
                    <div key={photo.id} className="group aspect-square overflow-hidden rounded-xl bg-stone-200">
                        <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Gallery
Gallery