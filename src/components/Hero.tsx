import { Phone, ArrowRight, Clock, MapPin } from "lucide-react";

const stats = [
  { icon: Clock, label: "Support Available", value: "24/7" },
  { icon: MapPin, label: "Based in Pembrokeshire", value: "Local" },
];

const stripPhotos = [
  {
    src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=200&q=80",
    alt: "Caregiver talking with elderly client",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=200&q=80",
    alt: "Caregiver helping with household tasks at home",
  },
  {
    src: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&w=200&q=80",
    alt: "Elderly person walking with a young carer outdoors",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-cyan-900"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sky-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-sky-700/10 blur-3xl" />
      </div>

      {/* Floating pattern dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #38bdf8 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 text-sky-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
            Serving Pembrokeshire &amp; Surrounding Areas
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Care That Feels{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300">
              Like Home
            </span>
          </h1>

          <p className="text-lg text-sky-100/80 leading-relaxed mb-10 max-w-xl">
            At Sutim Healthcare Services Ltd, we provide compassionate,
            person-centred support so you or your loved one can live
            comfortably, safely, and independently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-sky-800 font-bold px-7 py-4 rounded-full shadow-xl hover:bg-sky-50 transition-all hover:shadow-2xl hover:scale-105"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:07881189990"
              className="inline-flex items-center justify-center gap-2 bg-sky-600/30 border border-sky-400/40 text-white font-semibold px-7 py-4 rounded-full hover:bg-sky-600/50 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-500/20 border border-sky-400/30 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                  <p className="text-white font-bold">{value}</p>
                  <p className="text-sky-300/70 text-xs">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo strip */}
          <div className="flex items-center gap-3">
            <p className="text-sky-300/70 text-xs font-medium whitespace-nowrap">Our care in action:</p>
            {stripPhotos.map((photo, i) => (
              <div
                key={i}
                className="w-14 h-14 rounded-xl overflow-hidden border-2 border-white/20 flex-shrink-0 hover:border-sky-400/60 hover:scale-110 transition-all duration-300 cursor-default"
              >
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Visual — photo */}
        <div className="hidden lg:flex justify-center">
          <div className="relative">
            {/* Main photo */}
            <div className="float relative w-[380px] h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=760&q=80"
                alt="Dedicated caregiver bringing a nutritious meal to an elderly client at home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-transparent to-transparent" />

              {/* Overlay service pills */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {["Meal Preparation", "24/7 Available", "Person-Centred"].map((pill) => (
                  <span
                    key={pill}
                    className="bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/20"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-5 left-5 right-5 bg-sky-500/20 border border-sky-400/30 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
                <p className="text-sky-200 text-sm font-medium">
                  Available{" "}
                  <span className="text-white font-bold">24 / 7</span>
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-cyan-500 text-white font-bold text-sm px-4 py-2 rounded-full shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
              Free Consultation
            </div>

            {/* Floating phone card */}
            <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-sky-700" />
              </div>
              <div>
                <p className="text-gray-500 text-xs">Call us anytime</p>
                <p className="text-gray-900 font-bold text-sm">07881 189990</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 72C120 64 240 48 360 42.7C480 37.3 600 42.7 720 48C840 53.3 960 58.7 1080 58.7C1200 58.7 1320 53.3 1380 50.7L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
