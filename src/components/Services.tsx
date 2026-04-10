import { ArrowRight } from "lucide-react";

const services = [
  {
    emoji: "🤝",
    title: "Companionship",
    desc: "Friendly companionship to reduce loneliness and promote emotional well-being. We're here to listen, share, and brighten your day.",
    photo: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Caregiver in warm conversation with elderly client at home",
    accent: "sky",
  },
  {
    emoji: "🧹",
    title: "Domestic Support",
    desc: "Helping with everyday household tasks such as cleaning, laundry, and maintaining a safe, comfortable home environment.",
    photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Professional providing domestic help and household support",
    accent: "blue",
  },
  {
    emoji: "🛒",
    title: "Shopping Assistance",
    desc: "Support with grocery shopping and running errands so daily necessities are always taken care of.",
    photo: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Caregiver helping elderly client with shopping",
    accent: "cyan",
  },
  {
    emoji: "🍲",
    title: "Meal Preparation",
    desc: "Assistance with preparing nutritious, home-cooked meals to support healthy living and a good quality of life.",
    photo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Caregiver bringing a nutritious meal tray to elderly client",
    accent: "sky",
  },
  {
    emoji: "🚗",
    title: "Appointment Escort",
    desc: "Helping clients attend medical appointments, social outings, or community activities with ease and confidence.",
    photo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Caregiver accompanying elderly person to appointment",
    accent: "blue",
  },
  {
    emoji: "🪑",
    title: "Sitting Services",
    desc: "Short-term supervision and support giving family members peace of mind when they need a break or have commitments.",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Caregiver sitting with and supporting an elderly client",
    accent: "cyan",
  },
];

const accentMap: Record<string, { badge: string; pill: string; arrow: string }> = {
  sky: {
    badge: "bg-sky-100 text-sky-700",
    pill: "group-hover:bg-sky-600",
    arrow: "bg-sky-600 hover:bg-sky-700",
  },
  blue: {
    badge: "bg-blue-100 text-blue-700",
    pill: "group-hover:bg-blue-600",
    arrow: "bg-blue-600 hover:bg-blue-700",
  },
  cyan: {
    badge: "bg-cyan-100 text-cyan-700",
    pill: "group-hover:bg-cyan-600",
    arrow: "bg-cyan-600 hover:bg-cyan-700",
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
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
          {services.map((s) => {
            const a = accentMap[s.accent];
            return (
              <div
                key={s.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Photo header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.photo}
                    alt={s.photoAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute top-3 left-3 inline-flex items-center justify-center w-10 h-10 rounded-xl ${a.badge} text-xl shadow-sm`}>
                    {s.emoji}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold text-white ${a.arrow} px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-md`}
                  >
                    Enquire
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 mb-4">Not sure which service you need?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-sky-300/40 transition-all hover:scale-105"
          >
            Talk to Us — It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  );
}
