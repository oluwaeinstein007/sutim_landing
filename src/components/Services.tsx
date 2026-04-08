const services = [
  {
    emoji: "🤝",
    title: "Companionship",
    desc: "Friendly companionship to reduce loneliness and promote emotional well-being. We're here to listen, share, and brighten your day.",
    color: "from-pink-50 to-rose-50",
    border: "border-pink-200",
    badge: "bg-pink-100 text-pink-700",
  },
  {
    emoji: "🧹",
    title: "Domestic Support",
    desc: "Helping with everyday household tasks such as cleaning, laundry, and maintaining a safe, comfortable home environment.",
    color: "from-blue-50 to-sky-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    emoji: "🛒",
    title: "Shopping Assistance",
    desc: "Support with grocery shopping and running errands so daily necessities are always taken care of.",
    color: "from-amber-50 to-yellow-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    emoji: "🍲",
    title: "Meal Preparation",
    desc: "Assistance with preparing nutritious, home-cooked meals to support healthy living and a good quality of life.",
    color: "from-green-50 to-emerald-50",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
  },
  {
    emoji: "🚗",
    title: "Appointment Escort",
    desc: "Helping clients attend medical appointments, social outings, or community activities with ease and confidence.",
    color: "from-violet-50 to-purple-50",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    emoji: "🪑",
    title: "Sitting Services",
    desc: "Short-term supervision and support giving family members peace of mind when they need a break or have commitments.",
    color: "from-teal-50 to-cyan-50",
    border: "border-teal-200",
    badge: "bg-teal-100 text-teal-700",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
              Services
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            A range of non-regulated care services tailored specifically to your needs,
            delivered with compassion and professionalism.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group bg-gradient-to-br ${s.color} border ${s.border} rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${s.badge} text-3xl mb-5`}>
                {s.emoji}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 mb-4">Not sure which service you need?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-teal-300/40 transition-all hover:scale-105"
          >
            Talk to Us — It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  );
}
