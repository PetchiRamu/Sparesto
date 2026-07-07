"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const serviceOptions = [
    "Strategic Sourcing & Procurement",
    "Manpower Service",
     "E-Auction",
    "Component Testing & Servicing",
      "Inventory Liquidation",
  ];

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: serviceOptions[0],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: serviceOptions[0],
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="bg-[#F4FAF9] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="space-y-4 text-center mb-12">
          <span className="inline-flex rounded-full bg-[#E8F8F6] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#0F8E84]">
            Contact Us
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Let's Work Together
          </h2>

          <p className="mx-auto max-w-3xl text-base text-slate-600 leading-8">
            Reach out for procurement queries, partnership opportunities or to
            a customized quote tailored to your requirements.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] items-start">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[#D8F0EE] bg-white p-8 shadow-sm">
              {/* <p className="text-sm uppercase tracking-[0.35em] text-slate-40 text-[#0F8E84]">
                Sparesto Solutions Private Limited
              </p> */}

              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#0A6D66]">
  Sparesto Solutions Private Limited
</p>

              <div className="mt-8 space-y-6 text-slate-700">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-[#E8F8F6] p-3 text-[#0F8E84]">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Registered Office Address
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      110/A3-6, Valliyoor, Radhapuram Tirunelveli – 627111,
                      Tamil Nadu, India
                    </p>
                  </div>

                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-[#E8F8F6] p-3 text-[#0F8E84]">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Business Address
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      No. 773A/1 (Part Portion),
                      8th Main Street,
                      Kamachi Nagar,
                      Near Maharasi Mahal,
                      K.T.C. Nagar,
                      Tirunelveli – 627011,
                      Tamil Nadu, India
                    </p>
                  </div>

                </div>


                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-[#E8F8F6] p-3 text-[#0F8E84]">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      +91 73580 05843
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-[#E8F8F6] p-3 text-[#0F8E84]">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      purchase@sparesto.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#D8F0EE] bg-[#E8F8F6] p-8 shadow-sm">
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0F8E84] shadow-sm">
                  <MapPin className="h-7 w-7" />
                </div>

                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                  Our Presence
                </p>

                <p className="mt-4 text-lg font-semibold text-slate-900">
                  Tirunelveli, Tamil Nadu
                </p>

                <p className="text-sm text-slate-600">Radhapuram, India</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-[2rem] border border-[#D8F0EE] bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-5 text-[#0A6D66]">
              Start The conversation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full rounded-3xl border border-[#D8F0EE] bg-[#F7FBFB] px-4 py-3 text-sm outline-none focus:border-[#0E8E84] focus:ring-2 focus:ring-[#E8F6F3]"
                />

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full rounded-3xl border border-[#D8F0EE] bg-[#F7FBFB] px-4 py-3 text-sm outline-none focus:border-[#0E8E84] focus:ring-2 focus:ring-[#E8F6F3]"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@address.com"
                  className="w-full rounded-3xl border border-[#D8F0EE] bg-[#F7FBFB] px-4 py-3 text-sm outline-none focus:border-[#0E8E84] focus:ring-2 focus:ring-[#E8F6F3]"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-3xl border border-[#D8F0EE] bg-[#F7FBFB] px-4 py-3 text-sm outline-none focus:border-[#0E8E84] focus:ring-2 focus:ring-[#E8F6F3]"
                />
              </div>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-3xl border border-[#D8F0EE] bg-[#F7FBFB] px-4 py-3 text-sm outline-none focus:border-[#0E8E84] focus:ring-2 focus:ring-[#E8F6F3]"
              >
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Share Your Requirements..."
                className="w-full resize-none rounded-3xl border border-[#D8F0EE] bg-[#F7FBFB] px-4 py-3 text-sm outline-none focus:border-[#0E8E84] focus:ring-2 focus:ring-[#E8F6F3]"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-[#0F8E84] to-[#16B7A8] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0F8E84]/20 transition hover:brightness-110 flex items-center justify-center gap-2"
              >
                Let's Connect
                <Send size={18} />
              </button>

              {submitted && (
                <p className="text-center text-sm text-[#0F8E84]">
                  Thank you! Your message has been sent and our team will
                  contact you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}