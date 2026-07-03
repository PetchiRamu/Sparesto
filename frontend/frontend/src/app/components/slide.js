"use client";

import Image from "next/image";

const logos = [
  "/clientlogoo1.jpeg",
  "/clientlogo2.png",
  "/clientlogoo2.jpeg",
];

export default function TrustedClients() {
  return (
    <section className="bg-[#EDF6F5] py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Badge */}
        <div className="flex justify-center">
          {/* <span className="rounded-full bg-[#D8F0EE] px-4 py-2 text-sm font-medium text-[#0F766E]">
            Prestigious Clients
          </span> */}
        </div>

        {/* Heading */}
        <h2 className="mt-4 mb-14 text-center text-4xl font-bold text-slate-900 md:text-5xl">
          Prestigious Clients
        </h2>

        {/* Centered Logos */}
        <div className="flex flex-wrap justify-center gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex h-36 w-72 items-center justify-center rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <Image
                src={logo}
                alt={`client-logo-${index + 1}`}
                width={200}
                height={100}
                className="max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}