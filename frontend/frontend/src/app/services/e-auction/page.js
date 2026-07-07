// import Link from "next/link";
// import Header from "../../components/header";


// export default function EAuctionPage() {
//   return (
//     // <section className="min-h-screen bg-[#f5f7f7] flex flex-col items-center justify-center px-4 py-16">
//     <section className="min-h-screen bg-[#f5f7f7] flex flex-col items-center justify-center px-4 pt- pb-16">
//       <Header />
//       {/* Badge */}
//       <div className="mb-6">
//         {/* <span className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-teal-700 bg-teal-50 border border-teal-200 rounded-full">
//           ● Under Construction
//         </span> */}
//       </div>

//       {/* Title */}
//       {/* <h1 className="text-5xl font-bold text-slate-900 mb-6">
//         E-Auction
//       </h1> */}

//       {/* Description */}
//       {/* <p className="max-w-2xl text-center text-slate-600 leading-7 mb-12">
//         Streamline your procurement process with our secure and transparent
//         e-auction platform. Achieve competitive pricing, faster sourcing, and
//         efficient vendor participation.
//       </p> */}


//       <div>
//   <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
//     E-Auctions
//   </span>

//   <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
//     E-Auctions of
//     <span className="block text-teal-600">Industrial Scraps</span>
//   </h2>

//   <p className="mt-6 text-lg leading-8 text-slate-600">
//     Supporting sourcing, recycling, disposal and value recovery solutions
//     for renewable energy and industrial sectors.
//   </p>

//   <p className="mt-4 text-lg leading-8 text-slate-600">
//     Transparent and efficient E-auction solutions for Wind Turbine and
//     Industrial Scrap Materials.
//   </p>

//   <div className="mt-10">
//     <h3 className="mb-4 text-xl font-semibold text-slate-900">
//       Online Bidding For:
//     </h3>

//     <ul className="grid gap-4 text-lg text-slate-700 sm:grid-cols-2">
//       <li className="flex items-center gap-3">
//         <span className="h-2 w-2 rounded-full bg-teal-600"></span>
//         Lubricants
//       </li>

//       <li className="flex items-center gap-3">
//         <span className="h-2 w-2 rounded-full bg-teal-600"></span>
//         Steel &amp; Iron Scrap
//       </li>

//       <li className="flex items-center gap-3">
//         <span className="h-2 w-2 rounded-full bg-teal-600"></span>
//         Copper Materials
//       </li>

//       <li className="flex items-center gap-3">
//         <span className="h-2 w-2 rounded-full bg-teal-600"></span>
//         FRP Materials
//       </li>

//       <li className="flex items-center gap-3">
//         <span className="h-2 w-2 rounded-full bg-teal-600"></span>
//         Electrical Components
//       </li>

      
//     </ul>
//   </div>
// </div>




//       {/* Image Card */}
//       <div className="bg-white rounded-3xl shadow-xl p-5 mb-12 max-w-3xl  mt-10">
//         <img
//           src="/eactionimg.png"
//           alt="E Auction"
//           className="rounded-2xl w-full"
//         />
//       </div>

//       {/* Bottom Text */}
//       <h3 className="text-teal-700 font-medium mb-2">
//         Something powerful is coming.
//       </h3>

//       <p className="text-slate-500 text-center mb-8">
//         This service page will be available soon. We're fine-tuning the auction
//         engine to serve you better.
//       </p>

//       {/* Buttons */}
//       <div className="flex flex-wrap items-center justify-center gap-4">
//         <Link
//           href="/"
//           className="px-8 py-3 rounded-full bg-teal-600 text-white border border-teal-600 transition-all duration-300 hover:bg-teal-700 hover:border-teal-700"
//         >
//           🏠 Back to Home
//         </Link>

//         <Link
//           href="/contactus"
//           className="px-8 py-3 rounded-full bg-white text-teal-600 border border-teal-600 transition-all duration-300 hover:bg-teal-600 hover:text-white"
//         >
//           ✉ Contact Us
//         </Link>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";
import Header from "../../components/header";


export default function EAuctionPage() {
  return (
    <section className="relative min-h-screen bg-[#f5f7f7] overflow-hidden">

      <Header />

      {/* UNDER CONSTRUCTION WATERMARK */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">

       <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

 <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
  <h1
    className="
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      -rotate-[28deg]
      text-[45px]
      sm:text-[60px]
      md:text-[85px]
      lg:text-[110px]
      xl:text-[135px]
      font-black
      uppercase
      tracking-tight
      text-gray-400
      opacity-20
      whitespace-nowrap
      select-none
    "
  >
    UNDER CONSTRUCTION
  </h1>
</div>

</div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">

        <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
          E-Auctions
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
          E-Auctions of
          <span className="block text-teal-600">
            Industrial Scraps
          </span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Supporting sourcing, recycling, disposal and value recovery
          solutions for renewable energy and industrial sectors.
        </p>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Transparent and efficient E-auction solutions for Wind Turbine
          and Industrial Scrap Materials.
        </p>

        <div className="mt-10">

          <h3 className="mb-4 text-xl font-semibold text-slate-900">
            Online Bidding For:
          </h3>

          <ul className="grid gap-4 text-lg text-slate-700 sm:grid-cols-2">

            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-teal-600"></span>
              Lubricants
            </li>

            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-teal-600"></span>
              Steel &amp; Iron Scrap
            </li>

            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-teal-600"></span>
              Copper Materials
            </li>

            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-teal-600"></span>
              FRP Materials
            </li>

            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-teal-600"></span>
              Electrical Components
            </li>

          </ul>
        </div>
                {/* Image Card */}
        <div className="relative bg-white rounded-3xl shadow-xl p-5 mb-12 max-w-3xl mx-auto mt-10">

          <img
            src="/eactionimg.png"
            alt="E Auction"
            className="rounded-2xl w-full opacity-40"
          />

        </div>

        {/* Bottom Text */}
        <div className="text-center">

          <h3 className="text-teal-700 text-xl font-semibold mb-3">
            Something powerful is coming.
          </h3>

          <p className="text-slate-500 text-center max-w-2xl mx-auto mb-10">
            This service page will be available soon. We're fine-tuning the
            auction engine to serve you better.
          </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">

          <Link
            href="/"
            className="px-8 py-3 rounded-full bg-teal-600 text-white border border-teal-600 transition-all duration-300 hover:bg-teal-700 hover:border-teal-700"
          >
            🏠 Back to Home
          </Link>

          <Link
            href="/contactus"
            className="px-8 py-3 rounded-full bg-white text-teal-600 border border-teal-600 transition-all duration-300 hover:bg-teal-600 hover:text-white"
          >
            ✉ Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}