import React, { useEffect, useState } from 'react'

// Chhota helper: 5 ko "05" bana deta hai
const pad = (n) => String(n).padStart(2, "0");

// Ek countdown box (HOURS / MINUTES / SECS). Isse 3 baar reuse karenge.
function TimeBox({ value, label }) {
  return (
    <div className="text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-2xl font-semibold text-white">
        {pad(value)}
      </div>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-white/50">
        {label}
      </p>
    </div>
  );
}

function Promo() {
    // Total bache hue seconds: 8 ghante 42 minute 5 second
    const [secondsLeft, setSecondsLeft] = useState(8 * 3600 + 42 * 60 + 5)

   useEffect(() => {
    // Har 1 second (1000ms) mein ek second ghatao
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
 
    // Cleanup: component hatne par timer band kar do
    return () => clearInterval(timer);
  }, []); // [] matlab: ye sirf ek baar (page load par) chalega

  // Total seconds ko ghante / minute / second mein todo
  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <section className="bg-slate-50 px-6 py-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-2xl bg-slate-900 p-8 lg:grid-cols-2 lg:p-12">
            {/* ---------- LEFT: offer text ---------- */}
            <div>
                <span className="inline-block rounded-full border border-orange-400/40 bg-orange-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-orange-300">
                Limited Studio Bundle
                </span>
                <h2 className="mt-5 text-3xl font-semibold leading-tight text-white">
                    The Complete Acoustic Workstation Set
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
                Curated set featuring the Spatial Over-Ear Headphones, Solid Walnut
                Desktop Stand, and Anodized Cable Organizer. Save $110 on the
                bundle.
                </p>

                {/* Countdown */}
                <div className="mt-8 flex items-start gap-3">
                    <TimeBox value={hours} label="Hours" />
                    <span className="mt-3 text-2xl text-white/40">:</span>
                    <TimeBox value={minutes} label="Minutes" />
                    <span className="mt-3 text-2xl text-white/40">:</span>
                    <TimeBox value={seconds} label="Secs" />
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button className="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">
                        Claim Studio Bundle • $395
                    </button>
                    <span className="text-xs text-white/50">Only 14 sets remaining</span>
                </div>
            </div>
            {/* ---------- RIGHT: image ---------- */}
            <div className="relative overflow-hidden rounded-xl">
                <img
                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80"
                alt="Acoustic workstation bundle"
                className="h-72 w-full object-cover lg:h-96 hover:scale-103"
                />
                <span className="absolute right-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-semibold text-white">
                    Selling Fast
                </span>
            </div>
        </div>
    </section>
  )
}

export default Promo
