import { Phone, ArrowRight, Star, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, label: "Clients Supported", value: "100+" },
  { icon: Star, label: "5-Star Service", value: "★★★★★" },
  { icon: Clock, label: "Support Available", value: "24/7" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-teal-700/10 blur-3xl" />
      </div>

      {/* Floating pattern dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #5eead4 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-teal-400 rounded-full pulse-slow"></span>
            Serving Pembrokeshire &amp; Surrounding Areas
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Care That Feels{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
              Like Home
            </span>
          </h1>

          <p className="text-lg text-teal-100/80 leading-relaxed mb-10 max-w-xl">
            At Sutim Healthcare Services Ltd, we provide compassionate,
            person-centred support so you or your loved one can live
            comfortably, safely, and independently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-teal-800 font-bold px-7 py-4 rounded-full shadow-xl hover:bg-teal-50 transition-all hover:shadow-2xl hover:scale-105"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:07881189990"
              className="inline-flex items-center justify-center gap-2 bg-teal-600/30 border border-teal-400/40 text-white font-semibold px-7 py-4 rounded-full hover:bg-teal-600/50 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-500/20 border border-teal-400/30 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <p className="text-white font-bold">{value}</p>
                  <p className="text-teal-300/70 text-xs">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="hidden lg:flex justify-center">
          <div className="relative">
            {/* Main card */}
            <div className="float bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 w-80 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-teal-500/30 rounded-2xl flex items-center justify-center text-3xl">
                  🏠
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Home Support</p>
                  <p className="text-teal-300 text-sm">Personalised Care</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Companionship & Wellbeing",
                  "Domestic Support",
                  "Meal Preparation",
                  "Appointment Escort",
                  "Shopping Assistance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-teal-500/20 border border-teal-400/30 rounded-xl px-4 py-3 text-center">
                <p className="text-teal-200 text-sm font-medium">
                  Available{" "}
                  <span className="text-white font-bold">24 / 7</span>
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-emerald-500 text-white font-bold text-sm px-4 py-2 rounded-full shadow-lg rotate-3">
              Free Consultation
            </div>

            {/* Floating phone card */}
            <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-teal-700" />
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
