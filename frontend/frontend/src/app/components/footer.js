
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#EDF6F5] py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <div className="mb-5">
              <Image
  src="/orginallogo.png"
  alt="Sparesto Solutions"
  width={160}
  height={120}
  className="object-contain opacity-80 hover:opacity-100 transition duration-300"
  priority
/>
            </div>

            <p className="text-gray-600 leading-7 mb-6">
              Your trusted partner for renewable procurement and tailored
              solutions delivering quality products and exceptional services.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61587124725608&sk=photos"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#0F766E] hover:text-white transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/sparestosolutions/"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#0F766E] hover:text-white transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/sparestosolutions/"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#0F766E] hover:text-white transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://x.com/sparesto1981"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#0F766E] hover:text-white transition"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[#0F766E] font-semibold uppercase mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="#">Strategic Sourcing & Procurement</Link>
              </li>

              <li>
                <Link href="#">Manpower Supply</Link>
              </li>

              <li>
                <Link href="#">E-Auction</Link>
              </li>
              <li>
                <Link href="# ">Component Testing & Servicing</Link>
              </li>
              <li>
                <Link href="# ">inventory liquidation</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[#0F766E] font-semibold uppercase mb-5">
              Support
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/tradeinyourspare">
                  Trade In Your Spare
                </Link>
              </li>

              <li>
                <Link href="/codeofconduct">
                  Supplier Code Of Conduct
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-[#0F766E] font-semibold uppercase mb-5">
              Newsletter
            </h3>

            <p className="text-gray-600 mb-5">
              Get the latest availability updates directly.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 h-11 px-4 rounded-l-lg border border-gray-200 outline-none"
              />

              <button className="bg-[#0F766E] text-white px-5 rounded-r-lg">
                Connect
              </button>
            </div>
          </div>
        </div>

<div className="mt-12 text-center text-gray-600 text-sm">
  <Link
    href="/termsofservice"
    className="hover:text-[#0F766E] transition"
  >
    Terms of Service
  </Link>

  <span className="mx-2">|</span>

  <Link
    href="/privacyploicy"
    className="hover:text-[#0F766E] transition"
  >
    Privacy Policy
  </Link>
</div>



        {/* Bottom Line */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500">
          © 2026 Sparesto Solutions Pvt Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}