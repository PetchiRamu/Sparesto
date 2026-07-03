"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/header";
import { enquiryForm } from "../apiservices/apiServices";

const categories = [
  "Electrical",
  "Mechanical",
  "Hydraulic",
  "Pneumatic",
  "Instrumentation",
  "Custom OEM",
];

export default function EnquiryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    productName: "",
    productCategory: "",
    additionalRequirements: "",
    attachmentName: "",
  });
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFormData((prev) => ({ ...prev, attachmentName: file.name }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      // await enquiryForm({
      //   fullName: formData.fullName,
      //   companyName: formData.companyName,
      //   email: formData.email,
      //   phone: formData.phone,
      //   productName: formData.productName,
      //   productCategory: formData.productCategory,
      //   attachmentName: formData.attachmentName,
      //   additionalRequirements: formData.additionalRequirements,
      // });
      await enquiryForm({
        fullName: formData.fullName,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        productName: formData.productName,
        productCategory: formData.productCategory,
        attachmentName: formData.attachmentName,
        additionalRequirements: formData.additionalRequirements,
      });
      router.push("/enquiry-success");
    } catch (submitError) {
      setError(
        submitError?.message || "Unable to submit enquiry. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F9F9] text-[#102227]">
      <Header />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_0.9fr] items-start">
          <section className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E9F7F6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F8E84]">
              Business Enquiry
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                Streamline Your{" "}
                <span className="text-[#0F8E84]">Energy Infrastructure</span>
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-slate-600 leading-8">
                Request detailed specifications, bulk pricing, or technical
                datasheets for our premium spare parts and industrial services.
                Our engineers typically respond within 4 business hours.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[#D8EFED] bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#E4F6F4] text-[#0F8E84]">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-900">
                      OEM Certified
                    </p>
                    <p className="text-sm text-slate-500">
                      All parts meet rigorous Tier-1 industrial standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[#D8EFED] bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#E4F6F4] text-[#0F8E84]">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10M7 12h10M7 17h10" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-900">
                      Expert Support
                    </p>
                    <p className="text-sm text-slate-500">
                      Consultations with renewable energy specialists.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#0F8E84] p-8 text-white shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_45%)]" />
              <div className="relative z-10 grid gap-4">
                <p className="text-sm uppercase tracking-[0.3em] opacity-80">
                  Precision Engineering
                </p>
                <h2 className="text-3xl font-black">
                  Supply chain excellence for the future.
                </h2>
              </div>
            </div>
          </section>

          <section>
            <div className="rounded-[2rem] border border-[#D8EFED] bg-white p-8 shadow-sm">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Company Contact Information
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Share your details and we’ll match the right technical team.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm text-slate-700">
                      Full Name
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full rounded-3xl border border-[#D8EFED] bg-[#F9FCFB] px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0F8E84] focus:ring-2 focus:ring-[#D8F3EE]"
                        placeholder="Johnathan Doe"
                      />
                    </label>
                    <label className="space-y-2 text-sm text-slate-700">
                      Company Name
                      <input
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-[#D8EFED] bg-[#F9FCFB] px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0F8E84] focus:ring-2 focus:ring-[#D8F3EE]"
                        placeholder="Global Energy Corp"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2 text-sm text-slate-700">
                      Work Email Address
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-3xl border border-[#D8EFED] bg-[#F9FCFB] px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0F8E84] focus:ring-2 focus:ring-[#D8F3EE]"
                        placeholder="j.doe@company.com"
                      />
                    </label>
                    <label className="space-y-2 text-sm text-slate-700">
                      Phone Number
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-[#D8EFED] bg-[#F9FCFB] px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0F8E84] focus:ring-2 focus:ring-[#D8F3EE]"
                        placeholder="+1 (555) 000-0000"
                      />
                    </label>
                  </div>

                  <div className="mt-4 rounded-[1.75rem] border border-[#D8EFED] bg-[#F9FCFB] p-5">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Inquiry Specifics
                    </h3>
                    <div className="mt-5 grid gap-4">
                      <label className="space-y-2 text-sm text-slate-700">
                        Product Name
                        <input
                          name="productName"
                          value={formData.productName}
                          onChange={handleChange}
                          className="w-full rounded-3xl border border-[#D8EFED] bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0F8E84] focus:ring-2 focus:ring-[#D8F3EE]"
                          placeholder="e.g. VX-900 Wind Turbine Gear"
                        />
                      </label>

                      <label className="space-y-2 text-sm text-slate-700">
                        Product Category
                        <select
                          name="productCategory"
                          value={formData.productCategory}
                          onChange={handleChange}
                          className="w-full rounded-3xl border border-[#D8EFED] bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0F8E84] focus:ring-2 focus:ring-[#D8F3EE]"
                        >
                          <option value="">Select a category</option>
                          {categories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="space-y-2 text-sm text-slate-700">
                        Datasheet / Requirement Document
                        <div className="rounded-3xl border-2 border-dashed border-[#D8EFED] bg-[#F8FCFB] px-4 py-6 text-center text-sm text-slate-500">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx,.zip"
                            onChange={handleFileChange}
                            className="mx-auto block w-full cursor-pointer bg-transparent text-sm text-slate-500"
                          />
                          <p className="mt-3">Drop your files here or browse</p>
                          <p className="mt-1 text-xs text-slate-400">
                            PDF, DOCX, or ZIP (Max 20MB)
                          </p>
                          {fileName && (
                            <p className="mt-3 text-sm text-slate-600">
                              Selected: {fileName}
                            </p>
                          )}
                        </div>
                      </label>

                      <label className="space-y-2 text-sm text-slate-700">
                        Additional Requirements
                        <textarea
                          name="additionalRequirements"
                          rows={4}
                          value={formData.additionalRequirements}
                          onChange={handleChange}
                          className="w-full rounded-3xl border border-[#D8EFED] bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0F8E84] focus:ring-2 focus:ring-[#D8F3EE] resize-none"
                          placeholder="Specify technical requirements, shipping deadlines, or special handling instructions..."
                        />
                      </label>
                    </div>
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-[#0F8E84] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0a6f64] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading
                      ? "Submitting enquiry..."
                      : "Submit Enterprise Enquiry"}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Your data is encrypted and handled securely.
                  </p>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
