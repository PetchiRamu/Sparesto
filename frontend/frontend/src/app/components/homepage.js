"use client";
import { useState } from "react"; // Added
import { useRouter } from "next/navigation"; // Added
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import Link from "next/link";
import FeaturesSection from "./featuresection";
import CategorySection from "./category";
import ProcurementProcess from "./ProcurementProcess";
import WhyChooseUs from "./whychooseus";
import VisionMission from "./visionmission";
import MessageFromDirector from "./MessageFromDirector";
import Slide from "./slide";
import ContactSection from "./contactsection";



import {
  ShoppingCart,
  Users,
  Gavel,
  Wrench,
  ChevronRight,
} from "lucide-react";



export default function Home() {
  const [query, setQuery] = useState(""); // Added state
  const router = useRouter(); // Added router

  const handleSearch = () => {
    if (query.trim()) {
      // Navigates to the products page with the search term as a query parameter
      router.push(`/product?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Header />
      {/* ================= HERO SECTION ================= */}
      <section
  className="relative min-h-screen flex items-center overflow-hidden"
  style={{
    backgroundImage: "url('/bannerimg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Side */}

      <div>


        <h1 className="text-4xl md:text-6xl font-bold text-white mt-8 leading-tight">

          Reliable


          <span className="block text-cyan-400">

            Procurement

          </span>

        </h1>

        <span className="block text-cyan-400 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
  Trusted Supply.
  <br />
  Proven Experience.
</span>

        <p className="mt-6 max-w-xl text-lg md:text-xl lg:text-2xl leading-8 lg:leading-10 text-slate-300">

         Your trusted partner for renewable 
procurement and tailored solutions.

        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          <Link
            href="/services/ecommerce"
            className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold"
          >
            Explore Products
          </Link>

          <Link
            href="/enquiry"
            className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold"
          >
            Submit Enquiry
          </Link>

        </div>

      </div>


      {/* Right Side */}

   <div className="space-y-7">

  <Link href="#">
    <div className="h-24 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl px-6 flex items-center justify-between hover:bg-white/20 transition-all duration-300 my-10">

      <div className="flex items-center gap-5">

        <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center ">
          <ShoppingCart className="w-7 h-7 text-cyan-400" />
        </div>

        <h3 className="text-white text-lg font-medium">
          Strategic Sourcing & Procurement
        </h3>

      </div>

      <ChevronRight className="w-6 h-6 text-white/70" />

    </div>
  </Link>


  <Link href="#">
    <div className="h-24 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl px-6 flex items-center justify-between hover:bg-white/20 transition-all duration-300 my-10">

      <div className="flex items-center gap-5 ">

        <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center">
          <Users className="w-7 h-7 text-cyan-400" />
        </div>

        <h3 className="text-white text-lg font-medium">
          Manpower Supply
        </h3>

      </div>

      <ChevronRight className="w-6 h-6 text-white/70" />

    </div>
  </Link>


  <Link href="#">
    <div className="h-24 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl px-6 flex items-center justify-between hover:bg-white/20 transition-all duration-300 mp-10">

      <div className="flex items-center gap-5">

        <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center">
          <Gavel className="w-7 h-7 text-cyan-400" />
        </div>

        <h3 className="text-white text-lg font-medium">
          E-AUCTION
        </h3>

      </div>

      <ChevronRight className="w-6 h-6 text-white/70" />

    </div>
  </Link>


  <Link href="#">
    <div className="h-24 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl px-6 flex items-center justify-between hover:bg-white/20 transition-all duration-300 my-10">

      <div className="flex items-center gap-5">

        <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center">
          <Wrench className="w-7 h-7 text-cyan-400" />
        </div>

        <h3 className="text-white text-lg font-medium">
          Component Testing & Servicing
        </h3>

      </div>

      <ChevronRight className="w-6 h-6 text-white/70" />

    </div>
  </Link>

</div>

    </div>

  </div>

</section>

      {/* feature section */}
      <FeaturesSection />

      {/* Category section */}
      <CategorySection />
      <ProcurementProcess />

      

     

      <WhyChooseUs/>

      <VisionMission/>
      <MessageFromDirector/>

      <Slide />
      <ContactSection/>

      
      
      {/* Adding Footer as it was imported but not used in the original snippet */}
      {/* <Footer /> */}
    </div>
  );
}













// "use client";
// import { useState } from "react"; // Added
// import { useRouter } from "next/navigation"; // Added
// import Image from "next/image";
// import Header from "./header";
// import Footer from "./footer";
// import Link from "next/link";
// import FeaturesSection from "./featuresection";
// import CategorySection from "./category";

// export default function Home() {
//   const [query, setQuery] = useState(""); // Added state
//   const router = useRouter(); // Added router

//   const handleSearch = () => {
//     if (query.trim()) {
//       // Navigates to the products page with the search term as a query parameter
//       router.push(`/product?search=${encodeURIComponent(query)}`);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-white text-gray-900">
//       <Header />
//       {/* ================= HERO SECTION ================= */}
//       <section className="relative w-full py-16 md:py-24 lg:py-32 flex items-center justify-center text-center overflow-hidden min-h-[500px] md:min-h-[600px]">
//         {/* Background Image with Overlay */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: `url('bgimage.jpg')`, 
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* This overlay ensures text is readable */}
//           <div className="absolute inset-0 bg-[#1f807b]/80 mix-blend-multiply"></div>
//         </div>

//         <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
//           {/* Responsive Heading: smaller on mobile, larger on tablet+ */}
//           <h1 className="text-xl xs:text-4xl sm:text-5xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
//             Site Under Construction.... <br />
//             {/* <span className="text-white">Delivered.</span> */}
//           </h1>

//           {/* Responsive Paragraph: adjusted max-width and font size */}
//           {/* <p className="text-slate-200 text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-2xl mx-auto font-medium">
//             The one-stop platform for Windmill spare parts, Solar components,
//             and efficient ordering across the energy sector.
//           </p> */}

//           {/* Search Component: Fully responsive stacking and padding */}
//           {/* <div className="flex flex-col sm:flex-row p-1.5 sm:p-2 bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-lg md:max-w-3xl mx-auto gap-2">
//             <input
//               type="text"
//               placeholder="Search for parts..."
//               value={query} // Linked to state
//               onChange={(e) => setQuery(e.target.value)} // Update state on change
//               onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Support Enter key
//               className="flex-grow px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl text-slate-900 outline-none text-sm md:text-base"
//             />
//             <button 
//               onClick={handleSearch} // Trigger navigation
//               className="bg-[#1F7F7A] hover:bg-[#155E5A] text-white px-6 md:px-10 py-3 md:py-4 rounded-lg md:rounded-xl font-bold transition-all text-sm md:text-base whitespace-nowrap"
//             >
//               Search Now
//             </button>
//           </div> */}
//         </div>
//       </section>

//       {/* feature section */}
//       {/* <FeaturesSection /> */}

//       {/* Category section */}
//       {/* <CategorySection /> */}
      
//       {/* Adding Footer as it was imported but not used in the original snippet */}
//       {/* <Footer /> */}
//     </div>
//   );
// }