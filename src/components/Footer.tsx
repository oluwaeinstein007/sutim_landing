import { Heart, Phone, Mail, MapPin } from "lucide-react";

const policies = [
  {
    title: "Privacy Policy",
    text: "We respect your privacy and are committed to protecting your personal information. Any details shared with us will be handled securely and confidentially.",
  },
  {
    title: "Safeguarding Statement",
    text: "We are committed to safeguarding and promoting the welfare of all individuals in our care. We take all concerns seriously and act in the best interest of our clients.",
  },
  {
    title: "Terms & Conditions",
    text: "Our services are delivered professionally and with care. Full terms will be provided upon engagement.",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Policies strip */}
      <div className="border-b border-gray-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h3 className="text-xl font-bold mb-8 text-center text-gray-200">
            📄 Our Policies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {policies.map((p) => (
              <div
                key={p.title}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6"
              >
                <h4 className="font-bold text-sky-400 mb-2 text-sm">{p.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-sky-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-bold text-lg">
                Sutim<span className="text-sky-400"> Healthcare</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Compassionate, person-centred non-regulated care services in
              Pembrokeshire. Supporting independence and dignity at home.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                ["#home", "Home"],
                ["#about", "About Us"],
                ["#services", "Our Services"],
                ["#why-us", "Why Choose Us"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-sky-400 text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>
                  <a href="tel:07881189990" className="hover:text-sky-400 transition-colors">
                    07881 189990
                  </a>{" "}
                  /{" "}
                  <a href="tel:07881189989" className="hover:text-sky-400 transition-colors">
                    07881 189989
                  </a>
                  <br />
                  <span className="text-gray-500 text-xs">Available 24/7</span>
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:info@sutimhealthcare.co.uk" className="hover:text-sky-400 transition-colors">
                  info@sutimhealthcare.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>5, 6 Market Square,<br />Narberth, Pembrokeshire</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Sutim Healthcare Services Ltd. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for those we care for.
          </p>
        </div>
      </div>
    </footer>
  );
}
