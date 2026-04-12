"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const services = [
  "Cleaning Services",
  "Companionship",
  "Shopping Assistance",
  "Meal Preparation",
  "Appointment Escort",
  "Sitting Services",
  "Other / Not Sure",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production this would POST to an API route
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            We&apos;re Here to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
              Help
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Reach out today for a free, no-obligation consultation. We&apos;re available
            24/7 — just give us a call or fill in the form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact details */}
          <div className="lg:col-span-2 space-y-5">
            {/* Care photo */}
            <div className="relative h-44 rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80"
                alt="Caregiver providing compassionate home support"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-sm">Ready to help you today</p>
                <p className="text-sky-200 text-xs">Compassionate care you can count on</p>
              </div>
            </div>
            {[
              {
                icon: Phone,
                label: "Phone (24/7)",
                lines: ["07881 189990", "07881 189989"],
                href: "tel:07881189990",
                color: "bg-sky-100 text-sky-700",
              },
              {
                icon: Mail,
                label: "Email",
                lines: ["info@sutimhealthcare.co.uk"],
                href: "mailto:info@sutimhealthcare.co.uk",
                color: "bg-blue-100 text-blue-700",
              },
              {
                icon: MapPin,
                label: "Office Address",
                lines: ["5, 6 Market Square,", "Narberth, Pembrokeshire"],
                color: "bg-cyan-100 text-cyan-700",
              },
              {
                icon: Clock,
                label: "Availability",
                lines: ["24 hours / 7 days a week"],
                color: "bg-amber-100 text-amber-700",
              },
            ].map(({ icon: Icon, label, lines, href, color }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-sky-200 transition-all duration-200"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium mb-1">{label}</p>
                  {lines.map((line) =>
                    href ? (
                      <a
                        key={line}
                        href={href}
                        className="block text-gray-800 font-semibold text-sm hover:text-sky-600 transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-gray-800 font-semibold text-sm">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <CheckCircle className="w-16 h-16 text-sky-500" />
                <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                <p className="text-gray-500 max-w-xs">
                  Your enquiry has been received. We&apos;ll be in touch very soon — usually
                  within a few hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", message: "" }); }}
                  className="mt-4 text-sky-600 font-semibold text-sm underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  📝 Enquiry Form
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="07xxx xxxxxx"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Type of Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a little about your situation and what kind of support you're looking for…"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-sky-300/30 hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4" />
                    Submit Enquiry
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    We&apos;ll respond promptly — usually within a few hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
