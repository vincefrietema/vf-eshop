const categories = [
  {
    title: "Smartphones & Tablets",
    description: "Latest models, bulk pricing available. Apple, Samsung, and more.",
    badge: "In Stock",
    icon: "📱",
  },
  {
    title: "Laptops & Computers",
    description: "Business-grade hardware at competitive B2B rates. Mixed lots available.",
    badge: "In Stock",
    icon: "💻",
  },
  {
    title: "Audio & Accessories",
    description: "Headphones, earbuds, chargers, cables — high volume, low prices.",
    badge: "In Stock",
    icon: "🎧",
  },
  {
    title: "Gaming",
    description: "Consoles, controllers, and games. Great margins for resellers.",
    badge: "Limited",
    icon: "🎮",
  },
  {
    title: "General Merchandise",
    description: "Rotating stock of mixed goods. Contact us for the latest manifest.",
    badge: "Rotating",
    icon: "📦",
  },
  {
    title: "Custom Orders",
    description: "Looking for something specific? We source it. Contact Vince directly.",
    badge: "On Request",
    icon: "🤝",
  },
];

export default function Offers() {
  return (
    <section id="offers" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3">
            B2B Product Categories
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            We source and supply a wide range of products. Stock changes regularly —
            sign up below to get notified first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-[#111] border border-gray-800 hover:border-green-700 rounded-2xl p-6 flex flex-col gap-3 transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{cat.icon}</span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  cat.badge === "In Stock"
                    ? "bg-green-900 text-green-400"
                    : cat.badge === "Limited"
                    ? "bg-yellow-900 text-yellow-400"
                    : "bg-gray-800 text-gray-400"
                }`}>
                  {cat.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Want to see current pricing and stock lists?{" "}
            <a href="#contact" className="text-green-400 hover:underline">
              Contact us directly
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
