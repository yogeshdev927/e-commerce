import React from 'react'

const quotes = [
  {
    id: 1,
    text: "Shopping Basket strikes a rare balance: rigorous industrial discipline coupled with tactile, human comfort.",
    source: "Architectural Digest",
  },
  {
    id: 2,
    text: "Quiet luxury defined for the modern desk and domestic landscape. Object design at its absolute finest.",
    source: "Wallpaper",
  },
  {
    id: 3,
    text: "Every detail from chamfer to switch feedback has been considered with obsessive precision.",
    source: "Monocle Magazine",
  },
];

function Press() {
  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-center text-[11px] font-medium uppercase tracking-widest text-stone-400">
          Featured in International Design Media
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.id}
              className="rounded-xl border border-stone-200 bg-white p-6 text-center"
            >
              <blockquote className="text-sm italic leading-relaxed text-stone-700">
                “{q.text}”
              </blockquote>
              <figcaption className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-orange-600">
                {q.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Press
Press