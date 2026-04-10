const testimonials = [
  {
    name: "Margaret T.",
    role: "Client's Daughter",
    text: "The team at Sutim have been absolutely wonderful with my mother. She looks forward to every visit and always seems so much happier afterwards. We couldn't be more grateful.",
    stars: 5,
    avatar: "👩",
  },
  {
    name: "David H.",
    role: "Client",
    text: "I was nervous about getting help at home, but from the very first day I felt completely at ease. They are kind, professional, and genuinely care. Highly recommend.",
    stars: 5,
    avatar: "👨",
  },
  {
    name: "Susan R.",
    role: "Client's Son",
    text: "Reliable, compassionate, and trustworthy. Sutim Healthcare has given our whole family peace of mind. They truly treat Dad like family.",
    stars: 5,
    avatar: "👩‍🦱",
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
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-500/30 rounded-full flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-sky-300/70 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
