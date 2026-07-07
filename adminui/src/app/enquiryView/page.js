import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import Link from "next/link";

export default function EnquiryView() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="p-6">

          {/* Breadcrumb */}
          <p className="text-sm text-gray-400 mb-4">
            Dashboard &gt; Enquiry &gt; View Enquiry
          </p>

          {/* Top Header */}
          <div className="flex justify-between items-center mb-6">

            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                View Enquiry
              </h1>

              <p className="text-gray-500 mt-1">
                Enquiry ID : E001
              </p>
            </div>

            <div className="flex gap-3">

              <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
                Export
              </button>

              <Link
  href="/editEnquiry"
  className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg"
>
  Edit
</Link>

            </div>

          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-3 gap-6">

            {/* Customer Information */}
            <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm">

              <div className="bg-[#EAF7FB] px-5 py-4 border-b rounded-t-xl">
                <h2 className="text-lg font-semibold">
                  Customer Information
                </h2>
              </div>

              <div className="p-6">

                <div className="grid grid-cols-2 gap-6">

                  <div>
                    <p className="text-sm text-gray-500">
                      Customer ID
                    </p>

                    <p className="font-semibold mt-1">
                      SP001
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Company Name
                    </p>

                    <p className="font-semibold mt-1">
                      Lava Info Pvt Ltd
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Customer Name
                    </p>

                    <p className="font-semibold mt-1">
                      Kumar
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Phone Number
                    </p>

                    <p className="font-semibold mt-1">
                      9876543210
                    </p>
                  </div>

                  <div className="col-span-2">

                    <p className="text-sm text-gray-500">
                      Address
                    </p>

                    <p className="font-semibold mt-1">
                      No.12, Anna Nagar,
                      Chennai - 600001
                    </p>

                  </div>

                </div>

              </div>

            </div>
                        {/* Enquiry Status */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-fit">

              <div className="bg-[#EAF7FB] px-5 py-4 border-b rounded-t-xl">
                <h2 className="text-lg font-semibold">
                  Enquiry Status
                </h2>
              </div>

              <div className="p-6 space-y-5">

                <div>
                  <p className="text-sm text-gray-500">
                    Status
                  </p>

                  <span className="inline-block mt-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    New
                  </span>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Enquiry Date
                  </p>

                  <p className="font-semibold mt-1">
                    30-06-2026
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Time
                  </p>

                  <p className="font-semibold mt-1">
                    12:30 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Product Information */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-6">

            <div className="bg-[#EAF7FB] px-5 py-4 border-b rounded-t-xl">
              <h2 className="text-lg font-semibold">Product Information</h2>
                          </div>

            <div className="p-6">

              <table className="w-full">

                <thead className="bg-gray-100">

                  <tr>

                    <th className="text-left px-4 py-3">Product</th>

                    <th className="text-left px-4 py-3">Quantity</th>

                    <th className="text-left px-4 py-3">Unit</th>

                    <th className="text-left px-4 py-3">Remarks</th>

                  </tr>

                </thead>

                <tbody>

                  <tr className="border-t">

                    <td className="px-4 py-3">
                      Hydraulic Pump
                    </td>

                    <td className="px-4 py-3">
                      10
                    </td>

                    <td className="px-4 py-3">
                      Nos
                    </td>

                    <td className="px-4 py-3">
                      Urgent Requirement
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