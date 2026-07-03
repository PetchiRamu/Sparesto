// "use client";

// import Link from "next/link";
// import {
//   ShoppingCart,
//   Users,
//   Gavel,
//   Settings2,
//   ArrowRight,
// } from "lucide-react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// const services = [
//   {
//     title: "Strategic Sourcing & Procurement",
//     description:
//       "Navigating global markets to find precision-engineered spare parts for all major wind turbine brands.",
//     icon: ShoppingCart,
//     link: "/procurement",
//   },
//   {
//     title: "Technical Manpower Supply",
//     description:
//       "Expert technicians and engineers specialized in wind energy infrastructure installation and maintenance.",
//     icon: Users,
//     link: "/manpower",
//   },
//   {
//     title: "E-Auction Solutions",
//     description:
//       "Proprietary platform for transparent bidding and liquidation of surplus inventory or high-value assets.",
//     icon: Gavel,
//     link: "/e-auction",
//   },
//   {
//     title: "Component Testing & Servicing",
//     description:
//       "Advanced diagnostic testing and refurbishment of critical wind turbine electronics and mechanical units.",
//     icon: Settings2,
//     link: "/component-testing",
//   },
//   {
//     title: "Component Testing & Servicing",
//     description:
//       "Advanced diagnostic testing and refurbishment of critical wind turbine electronics and mechanical units.",
//     icon: Settings2,
//     link: "/component-testing",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="bg-[#E9F6F6] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-14">
//           <p className="uppercase tracking-[4px] text-[#0f766e] text-sm font-medium">
//             OUR SERVICES
//           </p>

//           <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
//             End-to-End Energy Solutions
//           </h2>
//         </div>

//         {/* Carousel */}
//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           spaceBetween={24}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             640: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//             1280: {
//               slidesPerView: 4,
//             },
//           }}
//         >
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <SwiperSlide key={index} className="h-auto">
//                 <div className="bg-white rounded-[24px] border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full">

//                   {/* Icon */}
//                   <div className="w-16 h-16 rounded-2xl bg-[#f2f6f5] flex items-center justify-center mb-8">
//                     <Icon className="w-7 h-7 text-[#0f766e]" />
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-[28px] leading-[1.2] font-semibold text-slate-900 mb-5 min-h-[100px]">
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-gray-600 leading-7 flex-grow">
//                     {service.description}
//                   </p>

                 

//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>

//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import {
  Handshake,
  Cog,
  PackageSearch,
  Network,
  BadgeDollarSign,
  Users,
  Gavel,
  Wrench,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// const services = [
//   {
//     title: " Strategic Sourcing & Procurement",
//     description:
//       "Supplying Critical Spares  for efficient Operations of Wind Turbines.",
//     icon: Handshake,
//     link: "/procurement",
//   },
//   {
//     title: "Supply of Industrial Spare Parts",
//     description:
//       "High quality spares for a wide range of OEM applications.",
//     icon: Cog,
//     link: "/industrial-spares",
//   },
//   {
//     title: "Equivalent & Alternative Product Solutions",
//     description:
//       "Cost effective solutions without compromising quality and performance.",
//     icon: PackageSearch,
//     link: "/product-solutions",
//   },
//   {
//     title: "Vendor Identification & Development",
//     description:
//       "Access to reliable global vendors and continuous vendor development.",
//     icon: Network,
//     link: "/vendor-development",
//   },
//   {
//     title: "Cost Optimization & Supply Chain Support",
//     description:
//       "Reduce costs and improve efficiency across your supply chain.",
//     icon: BadgeDollarSign,
//     link: "/cost-optimization",
//   },
//   {
//     title: "Manpower Supply",
//     description:
//       "Skilled and reliable workforce to support your project needs.",
//     icon: Users,
//     link: "/manpower",
//   },
//   {
//     title: "E-Auction",
//     description:
//       "Transparent and efficient bidding through a secure digital platform.",
//     icon: Gavel,
//     link: "/e-auction",
//   },
//   {
//     title: "Component Testing & Servicing",
//     description:
//       "End-to-end WTG component testing, repair and servicing.",
//     icon: Wrench,
//     link: "/component-testing",
//   },
// ];

const services = [
  {
    title: "Strategic Sourcing & Procurement",
    description:
      "Supplying Critical Spares for efficient Operations of Wind Turbines.",
    icon: Handshake,
    link: "/procurement",
  },
  {
    title: "Supply of Industrial Spare Parts",
    description:
      "High Quality Spares for a wide range of OEM applications.",
    icon: Cog,
    link: "/industrial-spares",
  },
  {
    title: "Equivalent & Alternative Product Solutions",
    description:
      "Cost effective solutions without compromising quality and performance.",
    icon: PackageSearch,
    link: "/product-solutions",
  },
  {
    title: "Vendor Identification & Development",
    description:
      "Access to reliable global vendors and continuous vendor development.",
    icon: Network,
    link: "/vendor-development",
  },
  {
    title: "Cost Optimization & Supply Chain Support",
    description:
      "Reduce costs and improve efficiency across your supply chain.",
    icon: BadgeDollarSign,
    link: "/cost-optimization",
  },
  {
    title: "Manpower Supply",
    description:
      "Skilled and reliable workforce to support your project and operational needs.",
    icon: Users,
    link: "/manpower",
  },
  {
    title: "E-Auction",
    description:
      "Proprietary platform for transparent bidding and liquidation of surplus inventory, scrap or high-value assets.",
    icon: Gavel,
    link: "/e-auction",
  },
  {
    title: "Component Testing & Servicing",
    description:
      "End-to-End Solutions for WTG Component Testing, Repair and Reliability.",
    icon: Wrench,
    link: "/component-testing",
  },
];
export default function ServicesSection() {
  return (
    <section className="bg-[#E9F6F6] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-[#0f766e] text-sm font-medium">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Comprehensive Energy Solutions
          </h2>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={24}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <SwiperSlide key={index} className="h-full">
                <div className="bg-white rounded-[24px] border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 flex flex-col min-h-[430px]">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#f2f6f5] flex items-center justify-center mb-8">
                    <Icon className="w-7 h-7 text-[#0f766e]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[28px] leading-[1.2] font-semibold text-slate-900 mb-5 min-h-[120px]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-7 flex-1">
                    {service.description}
                  </p>

                 

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
}