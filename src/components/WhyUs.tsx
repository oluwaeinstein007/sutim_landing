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

const photoRow = [
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=80",
    alt: "Person preparing a home-cooked meal in the kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=500&q=80",
    alt: "Caregiver sharing a warm moment with elderly lady",
  },
  {
    src: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&w=500&q=80",
    alt: "Caregiver sitting with and supporting an elderly client",
  },
  {
    src: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&w=500&q=80",
    alt: "Elderly person and young adult walking together outdoors",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden">
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

        {/* Photo strip */}
        <div className="grid grid-cols-4 gap-3 mb-16 h-40">
          {photoRow.map((photo, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden group cursor-default"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-sky-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="relative group cursor-default"
            >
              {/* Number badge */}
              <span className="absolute -top-3 -left-3 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md z-10 group-hover:bg-sky-700 group-hover:scale-110 transition-all duration-200">
                {i + 1}
              </span>
              <div className="h-full bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:border-sky-200 hover:shadow-xl hover:bg-sky-50/30 transition-all duration-300">
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-200">{r.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote banner with background photo */}
        <div className="mt-16 relative rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1400&q=80"
            alt="Caring professional with elderly client"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 via-sky-800/85 to-cyan-900/80" />
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: "30px 30px" }}
          />
          <div className="relative p-12 text-center text-white">
            <p className="text-2xl sm:text-3xl font-bold mb-3 italic">
              &ldquo;We treat every client like family.&rdquo;
            </p>
            <p className="text-sky-200 text-sm mb-6">— Sutim Healthcare Services Ltd</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-sky-800 font-bold px-6 py-3 rounded-full hover:bg-sky-50 transition-all hover:scale-105 shadow-lg text-sm"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>

        {/* Areas */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">📍 Areas We Cover</h3>
          <p className="text-gray-500 mb-4">We proudly serve individuals and families across:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Pembrokeshire", "Narberth", "Surrounding Areas"].map((area) => (
              <span
                key={area}
                className="bg-sky-100 text-sky-800 font-semibold px-5 py-2 rounded-full text-sm border border-sky-200 hover:bg-sky-200 hover:scale-105 transition-all duration-200 cursor-default"
              >
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
