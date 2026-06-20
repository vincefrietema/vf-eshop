"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="notify" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">
          Never Miss a Deal
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3">
          Get Stock Alerts
        </h2>
        <p className="text-gray-400 mt-4 text-lg leading-relaxed">
          New stock drops weekly. Enter your email and be the first to know
          when fresh products are available — before they sell out.
        </p>

        {submitted ? (
          <div className="mt-10 bg-green-900/30 border border-green-700 rounded-2xl px-8 py-10">
            <p className="text-green-400 text-2xl font-bold">You&apos;re in!</p>
            <p className="text-gray-400 mt-2">
              We&apos;ll notify you at <span className="text-white font-medium">{email}</span> when new stock arrives.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-[#111] border border-gray-700 focus:border-green-500 outline-none text-white placeholder-gray-600 px-5 py-4 rounded-full text-base transition-colors"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full text-base transition-colors whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
        )}

        <p className="text-gray-600 text-xs mt-4">
          No spam. Only new stock notifications. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
