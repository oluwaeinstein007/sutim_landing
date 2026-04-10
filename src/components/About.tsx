const values = [
  { emoji: "💙", title: "Compassion", desc: "We genuinely care about every person we support." },
  { emoji: "🤝", title: "Respect", desc: "We honour the dignity and individuality of each client." },
  { emoji: "✨", title: "Dignity", desc: "Every interaction is delivered with the utmost respect." },
  { emoji: "⭐", title: "Integrity", desc: "Honest, transparent, and trustworthy in everything we do." },
  { emoji: "🕐", title: "Reliability", desc: "Consistent, dependable support you can count on." },
];

const galleryPhotos = [
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    alt: "Caregiver bringing a meal to elderly client at home",
    caption: "Meal Preparation",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
    alt: "Caregiver in conversation with elderly lady",
    caption: "Companionship",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
    alt: "Supportive care professional with senior client",
    caption: "Home Support",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
    alt: "Caregiver assisting with daily tasks",
    caption: "Daily Assistance",
    span: "col-span-2 row-span-1",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: photo gallery grid */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[420px]">
              {galleryPhotos.map((photo, i) => (
                <div
                  key={i}
                  className={`relative ${photo.span} rounded-2xl overflow-hidden group cursor-default`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* caption overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-sky-600/80 backdrop-blur-sm px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {photo.caption}
                  </span>
                </div>
              ))}
            </div>

            {/* Floating mission card */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl p-5 shadow-2xl border border-sky-100 max-w-[220px]">
              <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center mb-2">
                <span className="text-lg">🎯</span>
              </div>
              <p className="text-sky-800 font-bold text-sm mb-1">Our Mission</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Compassionate care that enhances quality of life at home.
              </p>
            </div>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Who We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
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

            {/* Quick highlights row */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { emoji: "🏠", label: "Home-based Care" },
                { emoji: "💬", label: "Person-Centred" },
                { emoji: "🛡️", label: "Safe & Trusted" },
                { emoji: "🌟", label: "High Quality" },
              ].map(({ emoji, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-sky-50 border border-sky-100 rounded-full px-4 py-2 hover:bg-sky-100 hover:border-sky-200 transition-colors duration-200 cursor-default"
                >
                  <span>{emoji}</span>
                  <span className="text-sky-800 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-5">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:border-sky-200 hover:bg-sky-50/40 hover:shadow-md transition-all duration-200 cursor-default group"
                >
                  <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-200">{v.emoji}</span>
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
