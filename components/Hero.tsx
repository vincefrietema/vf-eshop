export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,197,94,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <span className="text-green-400 text-sm font-semibold tracking-[0.3em] uppercase border border-green-800 px-4 py-1.5 rounded-full">
          B2B Supplier · Electronics & More
        </span>

        <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-tight text-white">
          Your Trusted <br />
          <span className="text-green-400">B2B Partner</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed">
          VF E-Shop supplies electronics and other products at competitive B2B prices.
          We work directly with businesses — fast, reliable, and always stocked.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#offers"
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            View Current Offers
          </a>
          <a
            href="#notify"
            className="border border-green-700 hover:border-green-400 text-green-400 font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Get Stock Alerts
          </a>
        </div>

        <div className="flex gap-10 mt-12 text-center">
          <div>
            <p className="text-3xl font-bold text-green-400">B2B</p>
            <p className="text-gray-500 text-sm mt-1">Exclusive Pricing</p>
          </div>
          <div className="border-l border-gray-800" />
          <div>
            <p className="text-3xl font-bold text-green-400">Fast</p>
            <p className="text-gray-500 text-sm mt-1">Reliable Shipping</p>
          </div>
          <div className="border-l border-gray-800" />
          <div>
            <p className="text-3xl font-bold text-green-400">Fresh</p>
            <p className="text-gray-500 text-sm mt-1">New Stock Weekly</p>
          </div>
        </div>
      </div>
    </section>
  );
}
