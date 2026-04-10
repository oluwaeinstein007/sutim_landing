const testimonials = [
  {
    name: "Margaret T.",
    role: "Client's Daughter",
    text: "The team at Sutim have been absolutely wonderful with my mother. She looks forward to every visit and always seems so much happier afterwards. We couldn't be more grateful.",
    stars: 5,
    photo: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=200&q=80",
    service: "Companionship",
  },
  {
    name: "David H.",
    role: "Client",
    text: "I was nervous about getting help at home, but from the very first day I felt completely at ease. They are kind, professional, and genuinely care. Highly recommend.",
    stars: 5,
    photo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=200&q=80",
    service: "Home Support",
  },
  {
    name: "Susan R.",
    role: "Client's Son",
    text: "Reliable, compassionate, and trustworthy. Sutim Healthcare has given our whole family peace of mind. They truly treat Dad like family.",
    stars: 5,
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=200&q=80",
    service: "Sitting Services",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-sky-900 via-sky-800 to-cyan-900 relative overflow-hidden">
      {/* Decorative dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #38bdf8 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blurred background photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=60"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-10 blur-sm"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sky-300 font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            What Our Clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300">
              Say
            </span>
          </h2>
          <p className="text-sky-200/70 text-lg max-w-xl mx-auto">
            Real stories from real people whose lives we&apos;ve had the privilege of touching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/40 transition-all duration-300"
            >
              {/* Top photo strip */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={t.photo}
                  alt={`Care scene representing ${t.service}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 to-transparent" />
                <span className="absolute bottom-3 left-4 text-white text-xs font-semibold bg-sky-600/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {t.service}
                </span>
              </div>

              <div className="p-7">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-sky-400/40 flex-shrink-0">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-sky-300/70 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
          {[
            { value: "100+", label: "Clients Supported" },
            { value: "5★", label: "Average Rating" },
            { value: "24/7", label: "Always Available" },
            { value: "100%", label: "Person-Centred" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group cursor-default">
              <p className="text-3xl font-extrabold text-white group-hover:text-sky-300 transition-colors duration-200">
                {stat.value}
              </p>
              <p className="text-sky-300/60 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
