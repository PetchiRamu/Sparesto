// "use client";

// const EyeIcon = () => (
//   <svg
//     width="32"
//     height="32"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="white"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
//     <circle cx="12" cy="12" r="3" />
//   </svg>
// );

// const TargetIcon = () => (
//   <svg
//     width="32"
//     height="32"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="white"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <circle cx="12" cy="12" r="10" />
//     <circle cx="12" cy="12" r="6" />
//     <circle cx="12" cy="12" r="2" />
//   </svg>
// );

// export default function VisionMission() {
//   return (
//     <section className="bg-[#EEF5F4] py-14 md:py-20 lg:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div className="text-center mb-12 lg:mb-16">
//           {/* <span className="inline-flex px-5 py-2 rounded-full bg-[#DDEFEA] text-[#1DA8A1] text-sm font-medium">
//             Vision & Mission
//           </span> */}

//           <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1D1E]">
//             Vision & Mission
//           </h2>

//           {/* <p className="mt-5 text-lg md:text-xl text-gray-600">
//             Guided by purpose. Driven by commitment.
//           </p> */}
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//           {/* Vision Card */}
//           <div className="rounded-[30px] bg-gradient-to-br from-[#0F6B67] to-[#238B84] p-8 md:p-12 text-white">
//             <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-10">
//               <EyeIcon />
//             </div>

//             <h3 className="text-3xl md:text-4xl font-semibold mb-6">
//               Our Vision
//             </h3>

//             <p className="text-lg leading-9 text-white/90">
//               To be a trusted global
//               partner in procurement
//               and supply solutions,
//               delivering high value
//               through expertise,
//               reliability and innovation.
//             </p>
//           </div>

//           {/* Mission Card */}
//           <div className="rounded-[30px] bg-gradient-to-br from-[#249F99] to-[#42C7C3] p-8 md:p-12 text-white">
//             <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-10">
//               <TargetIcon />
//             </div>

//             <h3 className="text-3xl md:text-4xl font-semibold mb-6">
//               Our Mission
//             </h3>

//             <p className="text-lg leading-9 text-white/90">
//               To provide efficient,
//               cost-effective and
//               high-quality sourcing
//               solutions that support our
//               clients’ operational
//               excellence and long-term
//               growth.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

const EyeIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
    <circle cx="12" cy="12" r="3.5" fill="white" />
    <path d="M12 2v2" />
    <path d="M6 4l1.5 1.5" />
    <path d="M18 4L16.5 5.5" />
  </svg>
);

const TargetIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0E63B6"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="3" />
    <path d="M15 9l6-6" />
    <path d="M18 3h3v3" />
  </svg>
);

export default function VisionMission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A5A]">
            Vision & Mission
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-md shadow-xl">

          {/* Main Layout */}

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div
              className="relative text-white px-10 lg:px-16 py-20"
              style={{
                background:
                  "linear-gradient(135deg,#062A61,#10396F)",
              }}
            >
              {/* Pattern */}

              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:20px_20px]" />

              <div className="relative z-10">

                <h3 className="text-4xl md:text-5xl font-extrabold uppercase mb-10">
                  Our Vision
                </h3>

                <div className="mb-8">
                  <EyeIcon />
                </div>

                <p className="text-xl md:text-2xl leading-relaxed max-w-md">
                  To be a trusted global partner in procurement and supply
                  solutions, delivering high value through expertise,
                  reliability and innovation.
                </p>

              </div>
            </div>

            {/* RIGHT */}

            <div className="bg-white text-center px-10 lg:px-16 py-20">

              <h3 className="text-4xl md:text-5xl font-extrabold uppercase text-[#0068C9] mb-10">
                Our Mission
              </h3>

              <div className="flex justify-center mb-8">
                <TargetIcon />
              </div>

              <p className="text-xl md:text-2xl leading-relaxed text-[#163A63] max-w-md mx-auto">
                To provide efficient, cost-effective and high-quality sourcing
                solutions that support our clients' operational excellence and
                long-term growth.
              </p>

            </div>

          </div>

          {/* Center Image */}

          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">

            <div className="w-52 h-52  rounded-full bg-white p-2 shadow-2xl">

              <img
                src="/vissionimg.jpg"
                alt="Vision Mission"
                className="w-full h-full rounded-full object-cover border-4 border-[#0A2A5A]"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}