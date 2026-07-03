// "use client";

// import { FaQuoteLeft, FaQuoteRight, FaUserTie } from "react-icons/fa";

// const leaderMessage = {
//   quote:
//     "At Sparesto Solutions, we deliver trusted wind turbine spare solutions that keep renewable energy moving forward. Our foundation is built on expertise, quality, and reliable sourcing. We are committed to providing the right solution at the right time with speed and precision. Integrity, customer trust, and service excellence guide every decision we make. Through strong partnerships and continuous growth, we create lasting value for our customers. Together, we are building a more sustainable future.",
//   designation: "Director / Managing Director",
//   company: "Sparesto Solutions Private Limited",
// };

// const testimonials = [
//   {
//     quote:
//       "At Sparesto Solutions, integrity, trust, and reliability are at the heart of everything we do. Our technical expertise, strategic sourcing, and unwavering commitment to quality set us apart.",
//     designation: "Director",
//     company: "Sparesto Solutions Private Limited",
//   },
//   {
//     quote:
//       "At Sparesto Solutions, integrity is our principle, customer satisfaction is our purpose, and service reliability is our promise. Driven by technical expertise, trusted sourcing, and uncompromising quality, we consistently deliver value and confidence to our customers.",
//     designation: "Director",
//     company: "Sparesto Solutions Private Limited",
//   },
//   {
//     quote:
//       "Sparesto Solutions delivers reliable wind turbine spare solutions, driven by integrity, trust, and service excellence. We ensure quality and timely delivery. We focus on responsive support and customer satisfaction. Through strong partnerships and continuous improvement, we drive renewable energy growth.",
//     designation: "Director",
//     company: "Sparesto Solutions Private Limited",
//   },
//   {
//     quote:
//       "Sparesto Solutions was built on a single, powerful truth, talent drives transformation. We empower global industries with skilled professionals who deliver peak performance and exceptional value. Guided by integrity, excellence, and trust, we are working together with our partners to build a stronger, more sustainable future.",
//     designation: "Additional Director – Workforce & Strategy",
//     company: "Sparesto Solutions Private Limited",
//   },
// ];

// export default function MessageFromDirector() {
//   return (
//     <section className="bg-[#dfe8e8] py-20">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Top Section */}
//         <div className="grid items-center gap-20 lg:grid-cols-[500px_1fr]">
//           {/* Main Leader Icon */}
//           <div className="relative flex justify-center lg:justify-start">
//             <div className="relative flex h-[520px] w-[340px] items-center justify-center overflow-hidden rounded-[24px] border-[8px] border-white bg-gradient-to-br from-cyan-500 to-slate-800 shadow-2xl md:h-[620px] md:w-[420px]">
//               <FaUserTie className="text-[180px] text-white opacity-90 md:text-[220px]" />
//             </div>

//             <div className="absolute bottom-[-14px] right-[40px] flex h-16 w-16 items-center justify-center rounded-xl bg-cyan-500 shadow-xl">
//               <FaQuoteRight className="text-3xl text-white" />
//             </div>
//           </div>

//           {/* Main Leader Content */}
//           <div>
//             <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-teal-700">
//               Leadership
//             </p>

//             <h2 className="mb-8 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
//               Message from the
//               <br />
//               Leader
//             </h2>

//             <div className="relative">
//               <FaQuoteLeft className="absolute -top-5 left-0 text-6xl text-[#c5d8d8]" />

//               <p className="relative z-10 pl-10 text-xl italic leading-10 text-slate-700">
//                 {leaderMessage.quote}
//               </p>
//             </div>

//             <div className="mt-10">
//               <h4 className="text-lg font-semibold text-slate-900">
//                 {leaderMessage.designation}
//               </h4>

//               <p className="mt-1 text-sm font-medium text-cyan-500">
//                 {leaderMessage.company}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Other Leadership Messages */}
//         <div className="mt-24">
//           {/* <h3 className="mb-12 text-center text-3xl font-bold text-slate-900">
//             Leadership Team
//           </h3> */}

//           <div className="grid gap-10 md:grid-cols-2">
//             {testimonials.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex gap-5 rounded-2xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
//               >
//                 <div className="shrink-0">
//                   <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-cyan-500">
//                     <FaUserTie className="text-4xl text-white" />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="relative">
//                     <FaQuoteLeft className="absolute -left-1 -top-1 text-3xl text-[#d4dcdc]" />

//                     <p className="pl-8 text-sm italic leading-7 text-slate-700">
//                       {item.quote}
//                     </p>
//                   </div>

//                   <h5 className="mt-6 text-base font-semibold text-slate-900">
//                     {item.designation}
//                   </h5>

//                   <p className="mt-1 text-sm font-medium text-cyan-600">
//                     {item.company}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  FaQuoteLeft,
  FaQuoteRight,
  FaUserTie,
  FaFemale,
} from "react-icons/fa";

const leaderMessage = {
  quote:
    "At Sparesto Solutions, we deliver trusted wind turbine spare solutions that keep renewable energy moving forward. Our foundation is built on expertise, quality, and reliable sourcing. We are committed to providing the right solution at the right time with speed and precision. Integrity, customer trust, and service excellence guide every decision we make. Through strong partnerships and continuous growth, we create lasting value for our customers. Together, we are building a more sustainable future.",
  designation: " Managing Director",
  company: "Sparesto Solutions Private Limited",
};

const testimonials = [
  {
    quote:
      "At Sparesto Solutions, integrity, trust, and reliability are at the heart of everything we do. Our technical expertise, strategic sourcing, and unwavering commitment to quality set us apart.",
    designation: "Director",
    company: "Sparesto Solutions Private Limited",
    isFemale: false,
  },
  {
    quote:
      "At Sparesto Solutions, integrity is our principle, customer satisfaction is our purpose, and service reliability is our promise. Driven by technical expertise, trusted sourcing, and uncompromising quality, we consistently deliver value and confidence to our customers.",
    designation: "Director",
    company: "Sparesto Solutions Private Limited",
    isFemale: true,
  },
  {
    quote:
      "Sparesto Solutions delivers reliable wind turbine spare solutions, driven by integrity, trust, and service excellence. We ensure quality and timely delivery. We focus on responsive support and customer satisfaction. Through strong partnerships and continuous improvement, we drive renewable energy growth.",
    designation: "Director",
    company: "Sparesto Solutions Private Limited",
    isFemale: true,
  },
  {
    quote:
      "Sparesto Solutions was built on a single, powerful truth, talent drives transformation. We empower global industries with skilled professionals who deliver peak performance and exceptional value. Guided by integrity, excellence, and trust, we are working together with our partners to build a stronger, more sustainable future.",
    designation: "Additional Director – Workforce & Strategy",
    company: "Sparesto Solutions Private Limited",
    isFemale: true,
  },
];

export default function MessageFromDirector() {
  return (
    <section className="bg-[#dfe8e8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Section */}
        <div className="grid items-center gap-20 lg:grid-cols-[500px_1fr]">
          {/* Main Leader Icon */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative flex h-[520px] w-[340px] items-center justify-center overflow-hidden rounded-[24px] border-[8px] border-white bg-gradient-to-br from-cyan-500 to-slate-800 shadow-2xl md:h-[620px] md:w-[420px]">
              <FaUserTie className="text-[180px] text-white opacity-90 md:text-[220px]" />
            </div>

            <div className="absolute bottom-[-14px] right-[40px] flex h-16 w-16 items-center justify-center rounded-xl bg-cyan-500 shadow-xl">
              <FaQuoteRight className="text-3xl text-white" />
            </div>
          </div>

          {/* Main Leader Content */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-teal-700">
              Leadership
            </p>

            <h2 className="mb-8 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              Message from the
              <br />
              Leader
            </h2>

            <div className="relative">
              <FaQuoteLeft className="absolute -top-5 left-0 text-6xl text-[#c5d8d8]" />

              <p className="relative z-10 pl-10 text-xl italic leading-10 text-slate-700">
                {leaderMessage.quote}
              </p>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-semibold text-slate-900">
                {leaderMessage.designation}
              </h4>

              <p className="mt-1 text-sm font-medium text-cyan-500">
                {leaderMessage.company}
              </p>
            </div>
          </div>
        </div>

        {/* Other Leadership Messages */}
        <div className="mt-24">
          <div className="grid gap-10 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 rounded-2xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="shrink-0">
                  <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-cyan-500">
                    {item.isFemale ? (
                      <FaFemale className="text-4xl text-white" />
                    ) : (
                      <FaUserTie className="text-4xl text-white" />
                    )}
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <FaQuoteLeft className="absolute -left-1 -top-1 text-3xl text-[#d4dcdc]" />

                    <p className="pl-8 text-sm italic leading-7 text-slate-700">
                      {item.quote}
                    </p>
                  </div>

                  <h5 className="mt-6 text-base font-semibold text-slate-900">
                    {item.designation}
                  </h5>

                  <p className="mt-1 text-sm font-medium text-cyan-600">
                    {item.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}