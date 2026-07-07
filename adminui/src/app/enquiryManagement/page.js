

"use client";

import Link from "next/link";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";

export default function EnquiryManagement() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="p-6">

          {/* Breadcrumb */}
          <p className="text-sm text-gray-400 mb-4">
            Dashboard &gt; Enquiry
          </p>

          {/* Heading */}
          <div className="flex justify-between items-center mb-8">

            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                Enquiry Management
              </h1>

              <p className="text-gray-500 mt-1">
                Manage All Customer Enquiries
              </p>
            </div>

            <Link
              href="/addEnquiry"
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-lg shadow"
            >
              + Add New Enquiry
            </Link>

          </div>

          {/* Filter Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">

            <div className="grid grid-cols-4 gap-5">

              {/* Date Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date Range
                </label>

                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Product ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product ID
                </label>

                <input
                  type="text"
                  placeholder="Enter Product ID"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>

                <input
                  type="text"
                  placeholder="Enter Company Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>

                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>All Status</option>
                  <option>New</option>
                  <option>Follow-up</option>
                  <option>Quoted</option>
                </select>
              </div>

            </div>

            <div className="flex gap-4 mt-6">

              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg">
                Apply Filters
              </button>

              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
                Export
              </button>

            </div>

          </div>{/* Enquiry Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200">

            {/* Table Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b">

              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  All Enquiries
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Total Records : 150
                </p>
              </div>

              <input
                type="text"
                placeholder="Search Enquiry..."
                className="w-72 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"
              />

            </div>

            {/* Table */}
            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-[#EAF7FB]">

                  <tr className="text-left text-sm text-gray-700">

                    <th className="px-4 py-3">Enquiry ID</th>

                    <th className="px-4 py-3">Customer ID</th>

                    <th className="px-4 py-3">Customer Name</th>

                    <th className="px-4 py-3">Company Name</th>

                    <th className="px-4 py-3">Product Name</th>

                    <th className="px-4 py-3">Qty</th>

                    <th className="px-4 py-3">Date</th>

                    <th className="px-4 py-3">Status</th>

                    <th className="px-4 py-3 text-center">Action</th>

                  </tr>

                </thead>

                <tbody>
                  <tr className="border-b hover:bg-gray-50 text-sm">

                    <td className="px-4 py-3">E001</td>

                    <td className="px-4 py-3">SP001</td>

                    <td className="px-4 py-3">Kumar</td>

                    <td className="px-4 py-3">Lava Info</td>

                    <td className="px-4 py-3">Hydraulic Pump</td>

                    <td className="px-4 py-3">10</td>

                    <td className="px-4 py-3">
                      30-06-2026
                      <br />
                      12:30 PM
                    </td>

                    <td className="px-4 py-3">
                      <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        New
                      </span>
                    </td>

                    {/* <td className="px-4 py-3 text-center">
    👁️ ✏️ 🗑️
  </td> */}

                    <td className="px-4 py-3">
                      <div className="flex justify-center items-center gap-3">

                        <Link
                          href="/enquiryView"
                          className="text-blue-600 hover:text-blue-800"
                          title="View"
                        >
                          👁️
                        </Link>

                        {/* <button
                          className="text-green-600 hover:text-green-800"
                          title="Edit"
                        >
                          ✏️
                        </button> */}

                        <Link
                          href="/editEnquiry"
                          className="text-blue-600 hover:text-blue-800"
                          title="Edit"
                        >
                          ✏️
                        </Link>

                        <button
                          className="text-red-600 hover:text-red-800"
                          title="Delete"
                        >
                          🗑️
                        </button>

                      </div>
                    </td>

                  </tr>

                  <tr className="border-b hover:bg-gray-50 text-sm">

                    <td className="px-4 py-3">E002</td>

                    <td className="px-4 py-3">SP002</td>

                    <td className="px-4 py-3">Ramesh</td>

                    <td className="px-4 py-3">ABC Pvt Ltd</td>

                    <td className="px-4 py-3">Gear Box</td>

                    <td className="px-4 py-3">5</td>

                    <td className="px-4 py-3">
                      01-07-2026
                      <br />
                      10:00 AM
                    </td>

                    <td className="px-4 py-3">
                      <span className="bg-yellow-400 text-white text-xs px-3 py-1 rounded-full">
                        Follow-up
                      </span>
                    </td>

                    <td className="px-4 py-3 text-center">
                      👁️ ✏️ 🗑️
                    </td>

                  </tr>

                  <tr className="border-b hover:bg-gray-50 text-sm">

                    <td className="px-4 py-3">E002</td>

                    <td className="px-4 py-3">SP002</td>

                    <td className="px-4 py-3">Ramesh</td>

                    <td className="px-4 py-3">ABC Pvt Ltd</td>

                    <td className="px-4 py-3">Gear Box</td>

                    <td className="px-4 py-3">5</td>

                    <td className="px-4 py-3">
                      01-07-2026
                      <br />
                      10:00 AM
                    </td>

                    <td className="px-4 py-3">
                      <span className="bg-yellow-400 text-white text-xs px-3 py-1 rounded-full">
                        Follow-up
                      </span>
                    </td>

                    <td className="px-4 py-3 text-center">
                      👁️ ✏️ 🗑️
                    </td>

                  </tr>


                  <tr className="border-b hover:bg-gray-50 text-sm">

                    <td className="px-4 py-3">E002</td>

                    <td className="px-4 py-3">SP002</td>

                    <td className="px-4 py-3">Ramesh</td>

                    <td className="px-4 py-3">ABC Pvt Ltd</td>

                    <td className="px-4 py-3">Gear Box</td>

                    <td className="px-4 py-3">5</td>

                    <td className="px-4 py-3">
                      01-07-2026
                      <br />
                      10:00 AM
                    </td>

                    <td className="px-4 py-3">
                      <span className="bg-yellow-400 text-white text-xs px-3 py-1 rounded-full">
                        Follow-up
                      </span>
                    </td>

                    <td className="px-4 py-3 text-center">
                      👁️ ✏️ 🗑️
                    </td>

                  </tr>




                  <tr className="hover:bg-gray-50 text-sm">

                    <td className="px-4 py-3">E003</td>

                    <td className="px-4 py-3">SP003</td>

                    <td className="px-4 py-3">Suresh</td>

                    <td className="px-4 py-3">XYZ Industries</td>

                    <td className="px-4 py-3">Bearing</td>

                    <td className="px-4 py-3">15</td>

                    <td className="px-4 py-3">
                      02-07-2026
                      <br />
                      03:15 PM
                    </td>

                    <td className="px-4 py-3">
                      <span className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                        Quoted
                      </span>
                    </td>

                    <td className="px-4 py-3 text-center">
                      👁️ ✏️ 🗑️
                    </td>

                  </tr>




                </tbody>

              </table>

            </div>

            {/* Pagination */}
            {/* <div className="flex justify-between items-center px-6 py-4 border-t">

    <p className="text-sm text-gray-500">
      Showing 1 to 3 of 150 entries
    </p>

    <div className="flex gap-2">

      <button className="px-3 py-2 border rounded-lg hover:bg-gray-100">
        Previous
      </button>

      <button className="px-3 py-2 bg-teal-600 text-white rounded-lg">
        1
      </button>

      <button className="px-3 py-2 border rounded-lg hover:bg-gray-100">
        2
      </button>

      <button className="px-3 py-2 border rounded-lg hover:bg-gray-100">
        3
      </button>

      <button className="px-3 py-2 border rounded-lg hover:bg-gray-100">
        Next
      </button>

    </div>

  </div> */}

          </div>

        </div>

      </div>

    </div>

  );
}