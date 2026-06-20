export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0d0d0d] border-t border-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <p className="text-green-400 font-bold text-xl tracking-widest uppercase">VF E-Shop</p>
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            B2B supplier of electronics and general merchandise. Competitive prices, reliable stock.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold mb-4">Quick Links</p>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <a href="#offers" className="hover:text-green-400 transition-colors">B2B Offers</a>
            <a href="#notify" className="hover:text-green-400 transition-colors">Stock Alerts</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
        </div>

        <div>
          <p className="text-white font-semibold mb-4">Contact</p>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <p>Vince Frietema</p>
            <a
              href="mailto:vince.frietema@gmail.com"
              className="hover:text-green-400 transition-colors"
            >
              vince.frietema@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-600 text-xs">
        © 2025 VF E-Shop. All rights reserved.
      </div>
    </footer>
  );
}
