"use client";
import React, { useState } from "react";
import Header from "../../components/header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
// import { fetchAddToCart } from "../../apiservices/apiServices";

// Mock Data matching your UI
const PRODUCTS = [
  {
    id: "ge-883-x1",
    name: "Main Shaft Bearing",
    manufacturer: "GE RENEWABLE",
    // price: "$4,850",
    code: "GE-883-X1",
    status: "IN STOCK",
    img: "/details1.jpeg",
  },
  {
    id: "vst-44-act",
    name: "Pitch Actuator H-...",
    manufacturer: "VESTAS SOLUTIONS",
    // price: "$2,120",
    code: "VST-44-ACT",
    status: "LOW STOCK",
    img: "/details2.jpeg",
  },
  {
    id: "sie-an-990",
    name: "Anemometer Pro v4",
    manufacturer: "SIEMENS ENERGY",
    // price: "$895",
    code: "SIE-AN-990",
    status: "",
    img: "/details3.jpeg",
  },
  {
    id: "nx-pwr-inv",
    name: "Power Inverter...",
    manufacturer: "NORDEX GROUP",
    // price: "$12,400",
    code: "NX-PWR-INV",
    status: "NEW",
    img: "/details4.jpeg",
  },
];

export default function EcommerceListingPage() {
  const router = useRouter();
  const [addingProductId, setAddingProductId] = useState(null);

  const handleAddToCart = async (product) => {
    const token = Cookies.get("token");

    // Login check
    if (!token) {
      alert("Please login to add products to cart.");
      router.push("/login"); // Change this if you use a login modal
      return;
    }

    setAddingProductId(product.id);

    try {
      const cartData = {
        productId: product.id,
        quantity: 1,
        name: product.name,
        price: product.price,
        img: product.img,
        manufacturer: product.manufacturer,
        code: product.code,
      };

      await fetchAddToCart(cartData, token);

      alert("Item added to cart successfully");
      router.push("/cart");
    } catch (error) {
      console.error("Add to cart error:", error);
      alert(error.message || "Unable to add item to cart");
    } finally {
      setAddingProductId(null);
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        {/* Top Breadcrumb / Title bar */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Industrial Spare Parts
            </h1>
            <p className="text-sm text-slate-500">
              Showing 1-12 of 156 results
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Link
              href="/services/ecommerce"
              className="bg-teal-700 text-white px-3 py-1.5 rounded text-sm font-medium"
            >
              New
            </Link>

            <Link
              href="/services/ecommerce/refurbished"
              className="border border-slate-200 bg-white text-slate-600 px-3 py-1.5 rounded text-sm"
            >
              Refurbished
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Sidebar Filters */}
          <aside className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm h-fit">
            <div className="flex justify-between items-center mb-4 pb-2 border-b">
              <h3 className="font-bold text-slate-700">Filters</h3>
              <button className="text-xs text-teal-600 hover:underline">
                Reset
              </button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Categories
              </span>
              {[
                "Turbine Components",
                "Hydraulic Systems",
                "Bearings & Gears",
                "Sensors & Controls",
              ].map((cat, i) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 text-sm text-slate-600 mb-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    defaultChecked={i === 1}
                    className="accent-teal-700 rounded"
                  />
                  {cat}
                </label>
              ))}
            </div>

            {/* Price Range Input */}
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Price Range
              </span>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full border border-slate-200 rounded px-2 py-1 text-sm bg-slate-50"
                />
                <span className="text-slate-400">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full border border-slate-200 rounded px-2 py-1 text-sm bg-slate-50"
                />
              </div>
            </div>
          </aside>

          {/* Right Products Grid */}
          <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
              >
                <div className="relative bg-slate-100 aspect-video w-full">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.status && (
                    <span
                      className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${product.status === "IN STOCK"
                          ? "bg-emerald-500"
                          : product.status === "LOW STOCK"
                            ? "bg-orange-400"
                            : "bg-teal-600"
                        }`}
                    >
                      {product.status}
                    </span>
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                      {product.manufacturer}
                    </span>
                    <div className="flex justify-between items-baseline mt-1">
                      <h4 className="font-semibold text-slate-800 text-base truncate pr-2">
                        {product.name}
                      </h4>
                      <span className="text-teal-700 font-bold text-base whitespace-nowrap">
                        {product.price}
                      </span>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded text-xs text-slate-500 py-1 px-2 my-3 flex justify-between">
                      <span>OEM Code:</span>
                      <span className="font-mono font-semibold text-slate-700">
                        {product.code}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mt-auto">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      disabled={addingProductId === product.id}
                      className={`w-full text-xs py-2 rounded font-medium transition-colors inline-flex items-center justify-center text-center ${addingProductId === product.id
                          ? "bg-slate-300 text-slate-600 cursor-not-allowed"
                          : "bg-teal-800 hover:bg-teal-900 text-white"
                        }`}
                    >
                      {addingProductId === product.id
                        ? "Adding..."
                        : "🛒 Add to Cart"}
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/services/ecommerce/${product.id}`}
                        className="text-center border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs py-1.5 rounded transition-colors"
                      >
                        Details
                      </Link>
                      {/* <Link
                        href={`/enquiry`}
                        className="text-center border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs py-1.5 rounded transition-colors"
                      >
                        Enquiry
                      </Link> */}

                      <button
                        onClick={() => {
                          const token = Cookies.get("token");

                          if (!token) {
                            alert("Please login to continue with enquiry.");
                            router.push("/login");
                            return;
                          }

                          router.push("/enquiry");
                        }}
                        className="text-center border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs py-1.5 rounded transition-colors"
                      >
                        Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
