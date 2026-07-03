

// import Image from "next/image";
// import Link from "next/link";

// export default function AboutSection() {
//   return (
//     <section className="bg-[#EEF5F4] py-16 lg:py-24">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left Side */}
//           <div className="relative">

//             {/* Main Image */}
//             <div className="relative overflow-hidden rounded-2xl">
//               <Image
//                 src="/wind-turbine.jpg"
//                 alt="Wind Turbine"
//                 width={600}
//                 height={500}
//                 className="w-full h-[500px] object-cover rounded-2xl"
//               />
//             </div>

//             {/* Top Small Card */}
//             <div className="absolute -top-6 -left-4 bg-white p-2 rounded-xl shadow-xl border">
//               <Image
//                 src="/warehouse.jpg"
//                 alt="Warehouse"
//                 width={120}
//                 height={80}
//                 className="rounded-lg object-cover"
//               />
//             </div>

//             {/* Bottom Experience Card */}
//             <div className="absolute -bottom-6 right-6 bg-white rounded-2xl shadow-xl px-8 py-5 flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-[#E6F7F5] flex items-center justify-center">
//                 <span className="text-[#0F766E] text-xl">✦</span>
//               </div>

//               <div>
//                 <h3 className="text-3xl font-bold text-[#0F766E]">
//                   25+ Years
//                 </h3>
//                 <p className="text-gray-500 text-sm">
//                   of Excellence
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* Right Side */}
//           <div>

//             <span className="inline-flex px-4 py-2 rounded-full bg-[#DDEFEA] text-[#0F766E] text-sm font-semibold">
//               About Sparesto Solutions
//             </span>

//             <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//               Your Trusted Partner in
//               <span className="block text-[#11837D]">
//                 Industrial Procurement
//               </span>
//             </h2>

//             <p className="mt-8 text-lg text-gray-600 leading-8">
//               Sparesto Solutions is a trusted procurement and supply
//               partner with over 25 years of expertise in the wind
//               industry, delivering high-quality industrial spares,
//               sourcing solutions and reliable supply chain support.
//             </p>

//             <p className="mt-6 text-lg text-gray-600 leading-8">
//               From strategic sourcing and vendor development to
//               manpower supply and digital procurement, we bring
//               end-to-end capability that powers industrial operations
//               and renewable energy infrastructure across India and
//               beyond.
//             </p>

//             <Link
//               href="/about"
//               className="inline-flex items-center gap-3 mt-8 text-[#0F766E] font-semibold hover:gap-5 transition-all"
//             >
//               Learn more about our values
//               <span>→</span>
//             </Link>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// } 

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#EEF5F4] py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Side */}
          <div className="relative pb-12 sm:pb-16 lg:pb-8">

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/aboutimg.jpg"
                alt="Wind Turbine"
                width={600}
                height={500}
                className="w-full h-[280px] sm:h-[380px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl"
              />
            </div>

            {/* Top Small Card */}
            <div className="absolute top-3 left-3 sm:-top-4 sm:-left-4 bg-white p-2 rounded-xl shadow-xl border z-10">
              <Image
                src="/smallcard.png"
                alt="Warehouse"
                width={120}
                height={80}
                className="w-[80px] sm:w-[100px] md:w-[120px] h-auto rounded-lg object-cover"
              />
            </div>

            {/* Bottom Experience Card */}
            <div className="absolute bottom-0 right-2 sm:right-6 bg-white rounded-2xl shadow-xl px-4 sm:px-6 md:px-8 py-3 sm:py-5 flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E6F7F5] flex items-center justify-center">
                <span className="text-[#0F766E] text-lg sm:text-xl">✦</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F766E]">
                  25+ Years
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  of Excellence
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div>

            <span className="inline-flex px-4 py-2 rounded-full bg-[#DDEFEA] text-[#0F766E] text-xs sm:text-sm font-semibold">
              About Us
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Wind Industry
              <span className="block text-[#11837D]">
               Procurement
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">
              Sparesto  is a trusted procurement
              and supply partner with over 25 years of
              expertise in the wind Industry. We specialize in
              Sourcing and deliver high-quality industrial
              spares and equivalent materials providing
              reliable, efficient and cost-effective solutions
              tailored to customer needs.
            </p>


            <Link
              href="/about"
              className="inline-flex items-center gap-3 mt-8 text-[#0F766E] font-semibold hover:gap-5 transition-all"
            >
              Know more
              <span>→</span>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}