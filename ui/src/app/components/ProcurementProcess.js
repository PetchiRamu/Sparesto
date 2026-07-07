import {
  ClipboardList,
  Search,
  ShieldCheck,
  Package,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "PLAN",
    description:
      "Understanding your requirements in detail and planning the right procurement strategy.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "SOURCE",
    description:
      "Sourcing from trusted global vendors to ensure quality and competitiveness.",
    icon: Search,
  },
  {
    number: "03",
    title: "VERIFICATION",
    description:
      "Robust quality and technical evaluation to ensure reliability and compliance.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "DELIVERY",
    description:
      "Efficient delivery with comprehensive documents.",
    icon: Package,
  },
];

export default function ProcurementProcess() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0f6c69] via-[#1b8f8c] to-[#38c3c3] py-24">
      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          {/* <div className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm uppercase tracking-wide text-white backdrop-blur-md">
            OUR PROCUREMENT PROCESS
          </div> */}
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-center text-4xl font-bold text-white md:text-6xl">
          OUR PROCUREMENT PROCESS
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-white/80">
          
          A structured approach, transparent process, efficient
          execution and reliable service.
        </p>

        {/* Timeline */}
        <div className="relative mt-24 hidden lg:block">
          <div className="absolute left-[8%] right-[8%] top-10 h-[2px] bg-cyan-200/30" />
        </div>

        {/* Steps */}
        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                {/* Icon Box */}
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md">
                  <Icon size={34} className="text-white" />

                  {/* Number Badge */}
                  <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content Card */}
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition duration-300 hover:bg-white/15">
                  <h3 className="text-2xl font-medium tracking-wide text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-white/75">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pamphlet Download Section */}
      <div className="mt-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-10 text-center backdrop-blur-md">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            Company Brochure
          </span>

          <h3 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Download Our Company Pamphlet
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Get detailed information about our products, procurement services,
            wind energy solutions, and company capabilities in PDF format.
          </p>

          <a
            href="/pamphlet.pdf"
            download
            className="mt-8 inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-[#0F766E] transition hover:bg-slate-100"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>


  );
}