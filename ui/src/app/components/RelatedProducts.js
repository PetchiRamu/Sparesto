"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function RelatedProducts() {

  const relatedProducts = [
    {
      id: 1,
      title: "CX-Force Radiator",
      category: "COOLING UNIT",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 2,
      title: "TX-Flex Shaft Joint",
      category: "COUPLINGS",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 3,
      title: "VibeCheck Sensor Kit",
      category: "MONITORING",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 4,
      title: "Lube-Set Install",
      category: "MAINTENANCE",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 5,
      title: "Hydraulic Pump",
      category: "HYDRAULICS",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 6,
      title: "Control Module",
      category: "ELECTRONICS",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 7,
      title: "Bearing Assembly",
      category: "MECHANICAL",
      image: "https://via.placeholder.com/400x250",
    },
  ];

  return (
    <div className="mt-16">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Related Components
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Commonly requested with the VX-900 Gearbox
          </p>
        </div>

      </div>

      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >

        {relatedProducts.map((item) => (

          <SwiperSlide key={item.id}>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg duration-300">

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">

                <p className="text-xs uppercase text-teal-600 font-semibold mb-2">
                  {item.category}
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  {item.title}
                </h3>

                <Link
                  href={`/product/${item.id}`}
                  className="text-teal-700 font-medium text-sm hover:underline"
                >
                  View Product →
                </Link>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  );
}