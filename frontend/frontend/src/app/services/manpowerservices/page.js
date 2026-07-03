import Link from "next/link";
import Header from "../../components/header";

export default function ManpowerPage() {
  return (
    <div className="min-h-screen bg-[#f4f6f6]">
      <Header />

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <span className="mb-6 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-teal-700">
            ● Under Construction
          </span>


          <div>
  <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
    Manpower Supply
  </span>

  <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
    Manpower Supply for
    <span className="block text-teal-600">Wind Industry</span>
  </h2>

  <p className="mt-6 text-lg leading-8 text-slate-600">
    Providing skilled manpower solutions for wind turbine installation,
    operation, maintenance and technical support services.
  </p>

  <div className="mt-10 grid gap-6 sm:grid-cols-2">
    <div>
      <h3 className="text-lg font-bold text-slate-900">
        Skilled Wind Turbine Technicians
      </h3>
      <p className="mt-2 text-slate-600 leading-7">
        Qualified and certified technicians for installation, inspection and
        troubleshooting.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-bold text-slate-900">
        Maintenance &amp; Service Support
      </h3>
      <p className="mt-2 text-slate-600 leading-7">
        Expert workforce for PM, Breakdown support and Optimisation.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-bold text-slate-900">
        Site Operations Workforce
      </h3>
      <p className="mt-2 text-slate-600 leading-7">
        Reliable workforce for on-site operations, logistics, and field
        support.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-bold text-slate-900">
        Safety and Compliance Experts
      </h3>
      <p className="mt-2 text-slate-600 leading-7">
        Skilled in HSE practice for safe and reliable wind turbine operations.
      </p>
    </div>

    <div className="sm:col-span-2">
      <h3 className="text-lg font-bold text-slate-900">
        Experienced Wind Energy Teams
      </h3>
      <p className="mt-2 text-slate-600 leading-7">
        Delivering long-term value with experienced teams dedicated to wind
        energy excellence.
      </p>
    </div>
  </div>
</div>

          

          {/* Image Card */}
          <div className="mb-12 w-full max-w-4xl rounded-[28px] bg-white p-5 shadow-xl mt-10">
            <img
              src="/manpowerimg.png"
              alt="Manpower Services"
              className="w-full rounded-2xl"
            />
          </div>

          {/* Bottom Text */}
          <p className="mb-10 text-slate-500">
            We're currently preparing detailed information about our manpower
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