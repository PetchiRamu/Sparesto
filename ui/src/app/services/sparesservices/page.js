import Link from "next/link";
import Header from "../../components/header";

export default function SparesServicesPage() {
  return (
    <div className="min-h-screen bg-[#f4f6f6]">
      <Header />

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <span className="mb-6 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-teal-700">
            ● UNDER CONSTRUCTION
          </span>

          {/* Title */}
          <h1 className="mb-6 text-5xl font-bold text-slate-900">
            Spares Services
          </h1>

          {/* Description */}
          <p className="mb-12 max-w-3xl text-slate-600 leading-8">
            Delivering genuine industrial spare parts and procurement support
            for uninterrupted operations. Ensuring quality, availability, and
            timely supply across critical equipment needs.
          </p>

          {/* Image Card */}
          <div className="mb-12 w-full max-w-4xl rounded-[28px] bg-white p-5 shadow-xl">
            <img
              src="/spareserviceimg.png"
              alt="Spares Services"
              className="w-full rounded-2xl"
            />
          </div>

          {/* Bottom Text */}
          <p className="mb-10 text-slate-500">
            We're currently preparing detailed information about our spare parts
            solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-teal-600 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-teal-700"
            >
              🏠 Back to Home
            </Link>

            <Link
              href="/contactus"
              className="rounded-full border border-teal-600 bg-white px-8 py-3 text-sm font-medium text-teal-600 transition-all duration-300 hover:bg-teal-600 hover:text-white"
            >
              ✉ Contact Us
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}