import React, { useState } from 'react'

function Newsletter() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple check: email mein @ aur . hona chahiye
        if (!email.includes("@") || !email.includes(".")) {
      setIsError(true);
      setMessage("Please enter a valid email address.");
      return;
    }
    setIsError(false);
    setMessage("Thank you! Your 15% code is on its way.");
    setEmail(""); // input khaali kar do
    }
  return (
    <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid items-center gap-6 rounded-2xl border border-stone-200 bg-stone-50 p-8 md:grid-cols-2">
                <div>
                    <p className="text-[11px] font-medium uppercase tracking-widest text-orange-600">
                        The Shopping Basket Journal
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-stone-900">
                        Receive 15% off your inaugural order
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                        Dispatches on architecture, functional objects, and private
                        capsule previews.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your personal email"
                    className="min-w-0 flex-1 rounded-md border border-stone-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-stone-900"
                    />
                    <button
                    type="submit"
                    className="rounded-md bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700"
                    >
                        Subscribe
                    </button>
                </form>

                {message && (
                    <p
                    className={`mt-2 text-xs ${
                        isError ? "text-red-600" : "text-green-700"
                    }`}
                    >
                        {message}
                    </p>
            )}
            </div>
        </div>
    </section>
  )
}

export default Newsletter
Newsletter