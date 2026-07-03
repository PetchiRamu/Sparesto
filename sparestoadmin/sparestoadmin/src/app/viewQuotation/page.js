import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import Image from "next/image";

export default function ViewQuotation() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="p-6">

          {/* Breadcrumb */}
          <p className="text-sm text-gray-400 mb-4">
            Dashboard &gt; Quotation &gt; View Quotation
          </p>

          {/* Heading */}
          <div className="flex justify-between items-center mb-8">

            <div>

              <h1 className="text-4xl font-bold text-gray-800">
                Quotation Details
              </h1>

              <p className="text-gray-500 mt-1">
                Q001
              </p>

            </div>

            <div className="flex gap-4">

              <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg shadow">
                ✏ Edit
              </button>

              <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg shadow">
                Export
              </button>

            </div>

          </div>

          {/* Quotation Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-10">

            <div className="flex justify-between items-start">

              {/* Logo */}
              <Image
                src="/orginallogo.png"
                alt="Sparesto"
                width={220}
                height={60}
              />

              {/* Right Side */}
              <div className="text-right">

                <h2 className="text-5xl font-bold text-gray-700">
                  QUOTATION
                </h2>

                <p className="mt-4 text-gray-600">
                  Quote #: QT-2024-001
                </p>

                <p className="mt-2 text-gray-600">
                  Date: 2026-06-17
                </p>

                <p className="mt-2 text-gray-600">
                  Valid Until: 2026-07-17
                </p>

                <span className="inline-block mt-3 bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                  Sent
                </span>

              </div>

            </div>

            {/* Customer Details */}
<div className="grid grid-cols-2 gap-12 mt-16">

  {/* Bill To */}
  <div>

    <h3 className="text-2xl font-bold text-gray-700 mb-5">
      Bill To:
    </h3>

    <p className="font-semibold text-lg">
      Lava Info PVT Ltd.
    </p>

    <p className="text-gray-600 mt-2 leading-8">
      Plot No.45,
      Industrial Area,
      Phase-II,
      Pune,
      Maharashtra - 411019
    </p>

    <p className="mt-4 text-gray-700">
      <span className="font-semibold">
        GST :
      </span>{" "}
      2756301547999
    </p>

  </div>

  {/* Contact Details */}
  <div className="border-l border-gray-300 pl-10">

    <h3 className="text-2xl font-bold text-gray-700 mb-5">
      Contact Details:
    </h3>

    <p className="text-gray-700 mb-3">
      <span className="font-semibold">
        Customer Name :
      </span>{" "}
      Kumar
    </p>

    <p className="text-gray-700 mb-3">
      <span className="font-semibold">
        Email :
      </span>{" "}
      lavainfo@gmail.com
    </p>

    <p className="text-gray-700">
      <span className="font-semibold">
        Phone :
      </span>{" "}
      9524530001
    </p>

  </div>

</div>

{/* Product Table */}
<div className="mt-10 overflow-x-auto">

  <table className="w-full border-collapse">

    <thead className="bg-[#EAF7FB]">

      <tr>

        <th className="text-left px-6 py-4 text-gray-700 font-semibold">
          Product Name
        </th>

        <th className="text-left px-6 py-4 text-gray-700 font-semibold">
          Qty
        </th>

        <th className="text-left px-6 py-4 text-gray-700 font-semibold">
          Unit Price
        </th>

        <th className="text-right px-6 py-4 text-gray-700 font-semibold">
          Amount
        </th>

      </tr>

    </thead>

    <tbody>

      <tr className="border-b">

        <td className="px-6 py-5">
          Hydraulic Pump Assembly
        </td>

        <td className="px-6 py-5">
          50
        </td>

        <td className="px-6 py-5">
          ₹12,500
        </td>

        <td className="px-6 py-5 text-right">
          ₹625,000
        </td>

      </tr>

      <tr className="border-b">

        <td className="px-6 py-5">
          Control Valve
        </td>

        <td className="px-6 py-5">
          20
        </td>

        <td className="px-6 py-5">
          ₹8,000
        </td>

        <td className="px-6 py-5 text-right">
          ₹160,000
        </td>

      </tr>

      <tr>

        <td className="px-6 py-5">
          Bearing Kit
        </td>

        <td className="px-6 py-5">
          15
        </td>

        <td className="px-6 py-5">
          ₹3,500
        </td>

        <td className="px-6 py-5 text-right">
          ₹52,500
        </td>

      </tr>

    </tbody>

  </table>

</div>

          </div>

        </div>

      </div>

    </div>
  );
}