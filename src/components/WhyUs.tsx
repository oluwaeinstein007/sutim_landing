const reasons = [
  {
    icon: "🎓",
    title: "Experienced Healthcare Background",
    desc: "Our team brings real-world healthcare expertise to every visit, ensuring professional and skilled support.",
  },
  {
    icon: "🧡",
    title: "Person-Centred Approach",
    desc: "Every care plan is built around you — your needs, preferences, and goals are at the heart of everything.",
  },
  {
    icon: "✅",
    title: "Reliable & Trustworthy",
    desc: "We show up on time, every time. You can count on us to be there when you need us most.",
  },
  {
    icon: "🔧",
    title: "Flexible Care Plans",
    desc: "Whether you need a few hours a week or daily support, we adapt around your schedule and lifestyle.",
  },
  {
    icon: "🛡️",
    title: "Commitment to Dignity",
    desc: "We treat every client with the highest respect — because everyone deserves to feel valued.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "We Treat You Like Family",
    desc: "It's not just a job for us. We genuinely care about the people we support and their families.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            We Go{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
              Beyond
            </span>{" "}
            Basic Support
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            At Sutim Healthcare Services Ltd, we don&apos;t just provide care — we build
            lasting relationships built on trust and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="relative group"
            >
              {/* Number badge */}
              <span className="absolute -top-3 -left-3 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                {i + 1}
              </span>
              <div className="h-full bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:border-sky-200 hover:shadow-xl hover:bg-sky-50/20 transition-all duration-300">
                <span className="text-4xl mb-4 block">{r.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote banner */}
        <div className="mt-16 bg-gradient-to-r from-sky-700 to-cyan-700 rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />
          <p className="relative text-2xl sm:text-3xl font-bold mb-2 italic">
            &ldquo;We treat every client like family.&rdquo;
          </p>
          <p className="relative text-sky-200 text-sm">— Sutim Healthcare Services Ltd</p>
        </div>

        {/* Areas */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">📍 Areas We Cover</h3>
          <p className="text-gray-500 mb-4">We proudly serve individuals and families across:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Pembrokeshire", "Narberth", "Surrounding Areas"].map((area) => (
              <span key={area} className="bg-sky-100 text-sky-800 font-semibold px-5 py-2 rounded-full text-sm border border-sky-200">
                {area}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Contact us to confirm if we cover your location.
          </p>
        </div>
      </div>
    </section>
  );
}
