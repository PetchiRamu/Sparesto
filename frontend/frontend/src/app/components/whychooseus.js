"use client";

import Image from "next/image";

/* ---------- Custom SVG Icons ---------- */

const ExperienceIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#006D68"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h8v8H4z" />
    <path d="M12 8l4-4 4 4" />
    <path d="M16 4v12" />
  </svg>
);

const QualityIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#006D68"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l3 3 4-1 1 4 3 3-3 3-1 4-4-1-3 3-3-3-4 1-1-4-3-3 3-3 1-4 4 1z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const PricingIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#006D68"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const CustomerIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#006D68"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
    <circle cx="12" cy="11" r="2.5" />
  </svg>
);

const DeliveryIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#006D68"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="6" width="13" height="10" />
    <path d="M14 9h4l3 3v4h-7z" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
  </svg>
);

/* ---------- Data ---------- */

const features = [
  {
    icon: <ExperienceIcon />,
    title: "25 Years of Proven experience ",
    description:
      "Over 2.5 decades of expertise in procurement and supply solutions.",
  },
  {
    icon: <QualityIcon />,
    title: "QUALITY-DRIVEN APPROACH",
    description:
      "Committed to providing high-quality , reliable and tested products. ",
  },
  {
    icon: <PricingIcon />,
    title: "COMPETITIVE PRICING",
    description:
      "Delivering the best value through cost-effective sourcing strategies.",
  },
  {
    icon: <CustomerIcon />,
    title: "CUSTOMER-CENTRIC SOLUTIONS",
    description:
      "Tailored solutions that meets unique business requirements",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">

          {/* Left Image */}
          <div className="order-1">
            <div className="relative overflow-hidden rounded-2xl md:rounded-[30px] shadow-xl">
              <Image
                src="/whychooseimg.jpg"
                alt="Warehouse"
                width={700}
                height={600}
                className="w-full h-[250px] sm:h-[350px] md:h-[420px] lg:h-[520px] object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#006D68]">Why Choose Us </span>
              <span className="text-[#2DB7B0]">Sparesto</span>
              <br />
              {/* <span className="text-[#006D68]">Solutions</span> */}
            </h2>

            {/* <p className="mt-4 md:mt-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
             Reliable Procurement. Efficient Supply Chains. Exceptional Results.
            </p> */}

            <p className="mt-4 md:mt-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed font-bold">
  Reliable Procurement.  Efficient Supply Chains.  Exceptional Results.
</p>

            {/* Top 4 Cards */}
            <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-4">{item.icon}</div>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Card */}
            <div className="mt-4 md:mt-5 border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-6 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <DeliveryIcon />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                COMMITMENT TO
                TIMELY DELIVERY
              </h3>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                A strong logistics and
                vendor network ensures
                consistent on-time
                delivery.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}