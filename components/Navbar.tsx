export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-green-900">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-green-400 tracking-widest uppercase">
          VF E-Shop
        </span>
        <div className="hidden sm:flex items-center gap-8 text-sm text-gray-400">
          <a href="#offers" className="hover:text-green-400 transition-colors">Offers</a>
          <a href="#notify" className="hover:text-green-400 transition-colors">Get Notified</a>
          <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
        </div>
        <a
          href="#notify"
          className="bg-green-500 hover:bg-green-400 text-black text-sm font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Join B2B
        </a>
      </div>
    </nav>
  );
}
