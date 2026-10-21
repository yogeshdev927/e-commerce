import React from 'react'

const features = [
  {
    id: 1,
    icon: "◎",
    title: "Complimentary Worldwide",
    text: "Carbon-neutral delivery across 45 countries on every order exceeding $150.",
  },
  {
    id: 2,
    icon: "⌂",
    title: "30-Day In-Home Trial",
    text: "Live with our pieces in your natural space. Seamless prepaid return logistics if uninspired.",
  },
  {
    id: 3,
    icon: "✦",
    title: "Master Craft Integrity",
    text: "Built from certified FSC timbers, circular cast aluminum, and traceable organic yarns.",
  },
  {
    id: 4,
    icon: "☎",
    title: "Dedicated Concierge",
    text: "Direct access to spatial designers and product specialists 24/7 for tailored guidance.",
  },
];

function Features() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.id}
            className="rounded-xl border border-stone-200 bg-white p-5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100 text-lg text-stone-700">
              {f.icon}
            </div>
            <h3 className="mt-4 text-sm font-semibold text-stone-900">
              {f.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-stone-500">
              {f.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
Features