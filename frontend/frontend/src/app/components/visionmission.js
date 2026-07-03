"use client";

const EyeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const TargetIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export default function VisionMission() {
  return (
    <section className="bg-[#EEF5F4] py-14 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          {/* <span className="inline-flex px-5 py-2 rounded-full bg-[#DDEFEA] text-[#1DA8A1] text-sm font-medium">
            Vision & Mission
          </span> */}

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1D1E]">
            Vision & Mission
          </h2>

          {/* <p className="mt-5 text-lg md:text-xl text-gray-600">
            Guided by purpose. Driven by commitment.
          </p> */}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Vision Card */}
          <div className="rounded-[30px] bg-gradient-to-br from-[#0F6B67] to-[#238B84] p-8 md:p-12 text-white">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-10">
              <EyeIcon />
            </div>

            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              Our Vision
            </h3>

            <p className="text-lg leading-9 text-white/90">
              To be a trusted global
              partner in procurement
              and supply solutions,
              delivering high value
              through expertise,
              reliability and innovation.
            </p>
          </div>

          {/* Mission Card */}
          <div className="rounded-[30px] bg-gradient-to-br from-[#249F99] to-[#42C7C3] p-8 md:p-12 text-white">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-10">
              <TargetIcon />
            </div>

            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              Our Mission
            </h3>

            <p className="text-lg leading-9 text-white/90">
              To provide efficient,
              cost-effective and
              high-quality sourcing
              solutions that support our
              clients’ operational
              excellence and long-term
              growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}