'use client';

import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const serviceOptions = [
  "Strategic Sourcing & Procurement",
  "Manpower Service",
  "E-Auction",

  "Component Testing & Servicing",


  "Inventory Liquidation",
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: serviceOptions[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', company: '', email: '', phone: '', service: serviceOptions[0], message: '' });
  };

  return (
    <div className="min-h-screen bg-[#F4FAF9] text-[#102227]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center mb-12">
          <span className="inline-flex rounded-full bg-[#E8F8F6] px-4 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-[#0F8E84]">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Let's Work Together
          </h1>
          <p className="mx-auto max-w-3xl text-base text-slate-600 leading-8">
            Reach out for procurement queries, partnership opportunities or to
            a customized quote tailored to your requirements.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[#D8F0EE] bg-white p-8 shadow-sm">

              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#0A6D66]">
                Sparesto Solutions Private Limited
              </p>

              <div className="mt-8 space-y-6 text-slate-700">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-[#E8F8F6] p-3 text-[#0F8E84]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">Registered Office Address</p>
                    <p className="mt-1 text-sm text-slate-600">110/A3-6, Valliyoor, Radhapuram Tirunelveli – 627111, Tamil Nadu, India</p>
                  </div>


                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-[#E8F8F6] p-3 text-[#0F8E84]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>


                  <div>
                    <p className="text-sm font-semibold text-slate-900">Business Address</p>
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
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.35 12.35 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 007 7l1.26-1.26a2 2 0 012.11-.45 12.35 12.35 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Phone</p>
                    <p className="mt-1 text-sm text-slate-600">+91 73580 05843</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-[#E8F8F6] p-3 text-[#0F8E84]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16v16H4z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Email</p>
                    <p className="mt-1 text-sm text-slate-600">purchase@sparesto.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#D8F0EE] bg-[#E8F8F6] p-8 shadow-sm">
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0F8E84] shadow-sm">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Our Presence</p>
                <p className="mt-4 text-lg font-semibold text-slate-900">Tirunelveli, Tamil Nadu</p>
                <p className="text-sm text-slate-600">Radhapuram, India</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#D8F0EE] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-5">Start The conversation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Name*
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-3xl border border-[#D8F0EE] bg-[#F7FBFB] px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0E8E84] focus:ring-2 focus:ring-[#E8F6F3]"
                    placeholder="Your Name"
                  />
                </label>
                <label className="block text-sm font-semibold text-slate-700">
                  Company
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-3xl border border-[#D8F0EE] bg-[#F7FBFB] px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0E8E84] focus:ring-2 focus:ring-[#E8F6F3]"
                    placeholder="Company Name"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Email*
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-3xl border border-[#D8F0EE] bg-[#F7FBFB] px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0E8E84] focus:ring-2 focus:ring-[#E8F6F3]"
                    placeholder="email@address.com"
                  />
                </label>
                <label className="block text-sm font-semibold text-slate-700">
                  Phone*
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-3xl border border-[#D8F0EE] bg-[#F7FBFB] px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0E8E84] focus:ring-2 focus:ring-[#E8F6F3]"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </label>
              </div>

              <div className="space-y-2 text-sm font-semibold text-slate-700">
                <label>Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-[#D8F0EE] bg-[#F7FBFB] px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0E8E84] focus:ring-2 focus:ring-[#E8F6F3]"
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 text-sm font-semibold text-slate-700">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-3xl border border-[#D8F0EE] bg-[#F7FBFB] px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0E8E84] focus:ring-2 focus:ring-[#E8F6F3] resize-none"
                  placeholder="Share Your Requirements.."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-[#0F8E84] to-[#16B7A8] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0F8E84]/20 transition hover:brightness-110"
              >
                Lets Connect
              </button>

              {submitted && (
                <p className="text-center text-sm text-[#0F8E84]">
                  Thank you! Your message has been sent and our team will contact you shortly.
                </p>
              )}
            </form>
          </div>
        </div>

      </main>


    </div>
  );
}
