import React from 'react'

const reviews = [
  {
    id: 1,
    rating: 5,
    title: "The acoustic isolation transformed my focus hours.",
    text: "I spend 9 hours daily in my architectural studio. The weight distribution on the Spatial series eliminates any fatigue, and the natural timber feel is sublime.",
    name: "Marcus K.",
    location: "Zurich",
  },
  {
    id: 2,
    rating: 5,
    title: "Subtle, sculptural ceramic perfection.",
    text: "The Karso carafe is as much a sculpture as it is a functional drinking vessel. It feels grounded, balanced in hand, and pours with immaculate control.",
    name: "Sophie L.",
    location: "Copenhagen",
  },
  {
    id: 3,
    rating: 4,
    title: "The merino wool drape is truly second to none.",
    text: "It holds its structure without feeling rigid. Ideal layering piece for transatlantic flights or casual evening exhibitions in Tokyo.",
    name: "Elena T.",
    location: "London",
  },
];

// Rating (jaise 4) ko "★★★★☆" mein badalta hai
function Stars({ rating }) {
  return (
    <span className="text-sm tracking-wide text-orange-500">
      {"★".repeat(rating)}
      <span className="text-stone-300">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

// Naam se initials nikalta hai: "Marcus K." -> "MK"
const getInitials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("");

function Reviews() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-stone-900">
            Voices from the Shopping Basket Community
          </h2>
          <p className="hidden text-xs text-stone-500 sm:block">
            Verified Collector Reviews | 1,428+
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.id}
              className="flex flex-col rounded-xl border border-stone-200 bg-white p-6"
            >
              <Stars rating={r.rating} />
              <h3 className="mt-3 text-sm font-semibold text-stone-900">
                {r.title}
              </h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-stone-500">
                {r.text}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-xs font-semibold text-stone-600">
                  {getInitials(r.name)}
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-900">
                    {r.name}
                  </p>
                  <p className="text-[11px] text-stone-400">
                    Verified Collector • {r.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
Reviews