// import React from 'react';
// // import Header from '../../components/header';


// export default async function ProductDetailPage({ params }) {
//   // Read dynamic URL parameter parameter
//   const { id } = await params;

//   // Single mockup matching the detailed asset page state (VX-900)
//   const product = {
//     title: "VX-900 Planetary Gearbox",
//     status: "In Stock",
//     brand: "VortexTech",
//     model: "VX-900-P-24",
//     category: "DRIVE SYSTEMS",
//     id: "575678",
//     description: "The VX-900 is a high-performance planetary gearbox engineered specifically for multi-megawatt wind turbines. This refurbished unit has undergone rigorous 48-point diagnostic testing and complete seal replacement to ensure 99.8% operational uptime in harsh offshore environments.",
//     features: [
//       { name: "Precision Gearing", desc: "Case-hardened gears for maximum durability and fatigue resistance under variable loads." },
//       { name: "Advanced Lubrication", desc: "Integrated cooling and filtration circuits to extend lubricant life and component health." },
//       { name: "Compact Form Factor", desc: "Designed for easy integration into nacelle spaces with minimal weight penalty." },
//       { name: "Vibration Damping", desc: "Specialized housing geometry to mitigate resonant frequencies during operation." }
//     ],
//     specs: [
//       { label: "Torque Range", val: "50,000 - 900,000 Nm" },
//       { label: "Gear Ratios", val: "1:60 to 1:120 (Standard)" },
//       { label: "Weight", val: "4,250 kg" },
//       { label: "Efficiency", val: "> 97% at full load" },
//       { label: "Oil Capacity", val: "120 Liters (ISO VG 320)" },
//       { label: "Operating Temp", val: "-30°C to +55°C" }
//     ]
//   };

//   return (

//     <div>

//     <div className="max-w-7xl mx-auto px-4 py-8">
//       {/* Breadcrumb breadcrumb navigation context */}

//       <nav className="text-xs text-slate-400 mb-6 flex gap-2">
//         <span className="hover:underline cursor-pointer">Home</span> &gt; 
//         <span className="hover:underline cursor-pointer">Spare Parts</span> &gt; 
//         <span className="text-slate-600 font-medium">{product.title}</span>
//       </nav>

//       {/* Main Container Split */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
//         {/* Left Side: Product Images Section */}
//         <div>
//           <div className="bg-slate-900 rounded-xl overflow-hidden aspect-[4/3] mb-4 border border-slate-200">
//             <img src="https://via.placeholder.com/600x450" alt={product.title} className="w-full h-full object-cover opacity-90" />
//           </div>
//           {/* Thumbnails list */}
//           <div className="grid grid-cols-4 gap-3">
//             {[1, 2, 3, 4].map((num, idx) => (
//               <div key={idx} className={`aspect-square rounded-lg border-2 overflow-hidden bg-white cursor-pointer ${idx === 0 ? 'border-teal-600' : 'border-slate-200'}`}>
//                 <img src="https://via.placeholder.com/150" alt="thumbnail" className="w-full h-full object-cover" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Identity Core Actions Info Card */}
//         <div className="flex flex-col justify-between">
//           <div>
//             <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">{product.category}</span>
//             <h1 className="text-3xl font-bold text-slate-800 mt-1 mb-2">{product.title}</h1>

//             {/* Metadata Tags Row */}
//             <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4 bg-slate-100/60 py-1.5 px-3 rounded-md w-fit">
//               <span>🟢 {product.status}</span>
//               <span>Brand: <strong className="text-slate-700">{product.brand}</strong></span>
//               <span>Model: <strong className="text-slate-700">{product.model}</strong></span>
//             </div>

//             <p className="text-sm leading-relaxed text-slate-600 mb-6">{product.description}</p>

//             {/* Verification highlights list block */}
//             <ul className="text-xs space-y-2.5 border-t border-slate-200 pt-4 text-slate-600">
//               <li className="flex items-center gap-2">🛡️ OEM Certified refurbishment with 12-month warranty</li>
//               <li className="flex items-center gap-2">⚡ Optimized for high torque density and low noise vibration</li>
//               <li className="flex items-center gap-2">⚙️ Compatible with GE, Siemens, and Vestas turbine architectures</li>
//             </ul>
//           </div>

//           <div className="pt-6 border-t border-slate-100 mt-6 lg:mt-0">
//             <span className="text-xs text-slate-400 block mb-3">Product ID: {product.id}</span>
//             <button className="w-full sm:w-auto bg-teal-800 hover:bg-teal-900 text-white font-medium px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm">
//               ✉️ Send Enquiry
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Grid Features and Specs */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Features Card Component */}
//         <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
//           <h3 className="text-md font-bold text-slate-800 mb-4 flex items-center gap-2 border-b pb-2">⚙️ Key Features</h3>
//           <div className="space-y-4">
//             {product.features.map((feat) => (
//               <div key={feat.name}>
//                 <h4 className="text-xs font-bold text-slate-800">{feat.name}: <span className="font-normal text-slate-600">{feat.desc}</span></h4>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Technical Specification Table View */}
//         <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
//           <h3 className="text-md font-bold text-slate-800 mb-4 flex items-center gap-2 border-b pb-2">📊 Technical Specifications</h3>
//           <div className="divide-y divide-slate-100 text-xs">
//             {product.specs.map((spec) => (
//               <div key={spec.label} className="grid grid-cols-2 py-2">
//                 <span className="text-slate-500 font-medium">{spec.label}</span>
//                 <span className="text-slate-800 font-semibold text-right sm:text-left">{spec.val}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>


//     </div>
//   );
// }



import React from 'react';
import Link from 'next/link';
// import Header from "../../components/header";

import Header from "../../../components/header";




export default async function ProductDetailPage({ params }) {
  // Read dynamic URL parameter
  const { id } = await params;

  // Single mockup matching the detailed asset page state (VX-900)
  const product = {
    title: "VX-900 Planetary Gearbox",
    status: "In Stock",
    brand: "VortexTech",
    model: "VX-900-P-24",
    category: "DRIVE SYSTEMS",
    id: "575678",
    description: "The VX-900 is a high-performance planetary gearbox engineered specifically for multi-megawatt wind turbines. This refurbished unit has undergone rigorous 48-point diagnostic testing and complete seal replacement to ensure 99.8% operational uptime in harsh offshore environments.",
    features: [
      { name: "Precision Gearing", desc: "Case-hardened gears for maximum durability and fatigue resistance under variable loads." },
      { name: "Advanced Lubrication", desc: "Integrated cooling and filtration circuits to extend lubricant life and component health." },
      { name: "Compact Form Factor", desc: "Designed for easy integration into nacelle spaces with minimal weight penalty." },
      { name: "Vibration Damping", desc: "Specialized housing geometry to mitigate resonant frequencies during operation." }
    ],
    specs: [
      { label: "Torque Range", val: "50,000 - 900,000 Nm" },
      { label: "Gear Ratios", val: "1:60 to 1:120 (Standard)" },
      { label: "Weight", val: "4,250 kg" },
      { label: "Efficiency", val: "> 97% at full load" },
      { label: "Oil Capacity", val: "120 Liters (ISO VG 320)" },
      { label: "Operating Temp", val: "-30°C to +55°C" }
    ]
  };
  const relatedProducts = [
    {
      id: 1,
      title: "CX-Force Radiator",
      category: "COOLING UNIT",
      image: "/details1.jpeg",
    },
    {
      id: 2,
      title: "TX-Flex Shaft Joint",
      category: "COUPLINGS",
      image: "/details2.jpeg",
    },
    {
      id: 3,
      title: "VibeCheck Sensor Kit",
      category: "MONITORING",
      image: "/details3.jpeg",
    },
    {
      id: 4,
      title: "Lube-Set Install",
      category: "MAINTENANCE",
      image: "/details4.jpeg",
    },

    {
      id: 4,
      title: "Lube-Set Install",
      category: "MAINTENANCE",
      image: "/details5.jpeg",
    },


  ];


  return (
    <div>
       <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">

        
        {/* Breadcrumb breadcrumb navigation context */}
        <nav className="text-xs text-slate-400 mb-6 flex gap-2">
          <span className="hover:underline cursor-pointer">Home</span> &gt;
          <span className="hover:underline cursor-pointer">Spare Parts</span> &gt;
          <span className="text-slate-600 font-medium">{product.title}</span>
        </nav>

        {/* Main Container Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Left Side: Product Images Section */}
          <div>
            <div className="bg-slate-900 rounded-xl overflow-hidden aspect-[4/3] mb-4 border border-slate-200">
              <img src="/details1.jpeg" alt={product.title} className="w-full h-full object-cover opacity-90" />
            </div>
            {/* Thumbnails list */}
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((num, idx) => (
                <div key={idx} className={`aspect-square rounded-lg border-2 overflow-hidden bg-white cursor-pointer ${idx === 0 ? 'border-teal-600' : 'border-slate-200'}`}>
                  <img src="/details3.jpeg" alt="thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Identity Core Actions Info Card */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">{product.category}</span>
              <h1 className="text-3xl font-bold text-slate-800 mt-1 mb-2">{product.title}</h1>

              {/* Metadata Tags Row */}
              <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4 bg-slate-100/60 py-1.5 px-3 rounded-md w-fit">
                <span>🟢 {product.status}</span>
                <span>Brand: <strong className="text-slate-700">{product.brand}</strong></span>
                <span>Model: <strong className="text-slate-700">{product.model}</strong></span>
              </div>

              <p className="text-sm leading-relaxed text-slate-600 mb-6">{product.description}</p>

              {/* Verification highlights list block */}
              <ul className="text-xs space-y-2.5 border-t border-slate-200 pt-4 text-slate-600">
                <li className="flex items-center gap-2">🛡️ OEM Certified refurbishment with 12-month warranty</li>
                <li className="flex items-center gap-2">⚡ Optimized for high torque density and low noise vibration</li>
                <li className="flex items-center gap-2">⚙️ Compatible with GE, Siemens, and Vestas turbine architectures</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 lg:mt-0">
              <span className="text-xs text-slate-400 block mb-3">Product ID: {product.id}</span>

              {/* 2. Replaced button with Link component passing parameters via query string */}
              <Link
                href={`/enquiry?productId=${product.id}&productTitle=${encodeURIComponent(product.title)}`}
                className="w-full sm:w-auto inline-flex bg-teal-800 hover:bg-teal-900 text-white font-medium px-8 py-3 rounded-lg items-center justify-center gap-2 transition-all shadow-sm no-underline"
              >
                ✉️ Send Enquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Grid Features and Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Features Card Component */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h3 className="text-md font-bold text-slate-800 mb-4 flex items-center gap-2 border-b pb-2">⚙️ Key Features</h3>
            <div className="space-y-4">
              {product.features.map((feat) => (
                <div key={feat.name}>
                  <h4 className="text-xs font-bold text-slate-800">{feat.name}: <span className="font-normal text-slate-600">{feat.desc}</span></h4>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specification Table View */}
          <div className="mt-20">
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">

              <h3 className="text-2xl font-bold text-slate-800 md:text-3xl">
                📊 Technical Specifications
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Get detailed information about our products, procurement services,
                wind energy solutions, and company capabilities in PDF format.
              </p>

              <a
                href="/pamphlet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-xl bg-teal-600 px-8 py-4 font-semibold text-white transition hover:bg-teal-700"
              >
                View PDF
              </a>

            </div>
          </div>
        </div>



        {/* Related Components */}
        {/* <div className="mt-16">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                Related Components
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Commonly requested with the VX-900 Gearbox
              </p>
            </div>

            <div className="flex gap-2">

              <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100">
                ←
              </button>

              <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100">
                →
              </button>

            </div>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {relatedProducts.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md duration-300"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />


                <div className="p-4">

                  <p className="text-xs uppercase font-semibold text-teal-600 mb-2">
                    {item.category}
                  </p>

                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    {item.title}
                  </h3>

                  <Link
                    href={`/product/${item.id}`}
                    className="text-sm text-teal-700 font-medium hover:underline"
                  >
                    View Product →
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div> */}

        <div className="overflow-x-auto mt-16">
  <div className="flex gap-6 min-w-max">

    {relatedProducts.map((item) => (

      <div
        key={item.id}
        className="w-[280px] bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md duration-300 flex-shrink-0"
      >

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-44 object-cover"
        />

        <div className="p-4">

          <p className="text-xs uppercase font-semibold text-teal-600 mb-2">
            {item.category}
          </p>

          <h3 className="text-lg font-semibold text-slate-800 mb-3">
            {item.title}
          </h3>

          <Link
            href={`/product/${item.id}`}
            className="text-sm text-teal-700 font-medium hover:underline"
          >
            View Product →
          </Link>

        </div>

      </div>

    ))}

  </div>
</div>



      </div>


    </div>
  );
}