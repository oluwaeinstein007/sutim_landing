export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-sky-900 via-sky-800 to-cyan-900 relative overflow-hidden"
    >
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
        <div className="text-center mb-12">
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
            We&apos;re a new, growing service — and every client&apos;s experience matters deeply to us.
          </p>
        </div>

        {/* Honest placeholder */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 text-center">
            <div className="text-5xl mb-5">💬</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Reviews Coming Soon
            </h3>
            <p className="text-sky-200/80 text-base leading-relaxed mb-8">
              We&apos;re proudly building our reputation one family at a time. Once our clients
              share their experiences, you&apos;ll find their honest words right here.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-sky-800 font-bold px-7 py-3.5 rounded-full hover:bg-sky-50 transition-all hover:scale-105 shadow-lg text-sm"
            >
              Be the First — Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom trust bar — only honest claims */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
          {[
            { value: "24/7", label: "Always Available" },
            { value: "100%", label: "Person-Centred" },
            { value: "Free", label: "Initial Consultation" },
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
