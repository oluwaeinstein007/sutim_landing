const values = [
  { emoji: "💚", title: "Compassion", desc: "We genuinely care about every person we support." },
  { emoji: "🤝", title: "Respect", desc: "We honour the dignity and individuality of each client." },
  { emoji: "✨", title: "Dignity", desc: "Every interaction is delivered with the utmost respect." },
  { emoji: "⭐", title: "Integrity", desc: "Honest, transparent, and trustworthy in everything we do." },
  { emoji: "🕐", title: "Reliability", desc: "Consistent, dependable support you can count on." },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: illustration / visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-10 relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-teal-200/40 rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-emerald-200/40 rounded-full" />

              <div className="relative space-y-6">
                <div className="text-6xl text-center mb-2">👩‍⚕️</div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-teal-100">
                  <h3 className="text-teal-800 font-bold text-lg mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To deliver compassionate, reliable, and person-centred care that
                    enhances the quality of life for every individual we support.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { emoji: "🏠", label: "Home-based Care" },
                    { emoji: "💬", label: "Person-Centred" },
                    { emoji: "🛡️", label: "Safe & Trusted" },
                    { emoji: "🌟", label: "High Quality" },
                  ].map(({ emoji, label }) => (
                    <div
                      key={label}
                      className="bg-white border border-teal-100 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm"
                    >
                      <span className="text-xl">{emoji}</span>
                      <span className="text-gray-700 text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Who We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                Are
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sutim Healthcare Services Ltd was founded with a passion for providing
              high-quality, compassionate care and support to individuals who need
              assistance in their daily lives.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              With a professional background in healthcare, we understand the importance
              of treating every individual with dignity, respect, and kindness. Our goal
              is to promote independence while offering the support needed to live
              comfortably and safely at home.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-5">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:border-teal-200 hover:bg-teal-50/30 transition-colors"
                >
                  <span className="text-2xl mt-0.5">{v.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{v.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
