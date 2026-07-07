// "use client";
// import { useState } from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/sidebar";

// export default function Dashboard() {
//     const [openModal, setOpenModal] = useState(false);
//     return (
//         <div className="flex min-h-screen bg-gray-100">
//             <Sidebar />

//             <div className="flex-1">
//                 <Header />

//                 <div className="p-6">
//                     {/* Heading */}
//                     <div className="flex justify-between items-center mb-6">
//                         <div>
//                             <h1 className="text-4xl font-bold text-gray-800">
//                                 Dashboard
//                             </h1>

//                             <p className="text-gray-500 mt-1">
//                                 Welcome Back! Here's What's Happening Today.
//                             </p>
//                         </div>

//                         <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg shadow">
//                             Export
//                         </button>
//                     </div>

//                     {/* Dashboard Cards */}

//                     {/* Dashboard Cards */}
//                     <div className="grid grid-cols-4 gap-6 mb-8">

//                         {/* Total Enquiries */}
//                         <div className="bg-white rounded-2xl shadow-sm p-5 border cursor-pointer hover:shadow-lg transition">
//                             <div className="flex justify-between items-start">
//                                 <div>
//                                     <p className="text-gray-500 text-sm">Total Enquiries</p>
//                                     <h2 className="text-4xl font-bold mt-2">170</h2>
//                                 </div>

//                                 <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                                     📄
//                                 </div>
//                             </div>

//                             <div className="flex gap-2 mt-5">
//                                 <button className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
//                                     Week
//                                 </button>

//                                 <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
//                                     Month
//                                 </button>

//                                 <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
//                                     Year
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Total Registration */}
//                         <div onClick={() => setOpenModal(true)}
//                             className="bg-white rounded-2xl shadow-sm p-5 border cursor-pointer hover:shadow-lg transition">
//                             <div className="flex justify-between items-start">
//                                 <div>
//                                     <p className="text-gray-500 text-sm">Total Registration</p>
//                                     <h2 className="text-4xl font-bold mt-2">250</h2>
//                                 </div>

//                                 <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
//                                     👤
//                                 </div>
//                             </div>

//                             <div className="flex gap-2 mt-5">
//                                 <button className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
//                                     Week
//                                 </button>

//                                 <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
//                                     Month
//                                 </button>

//                                 <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
//                                     Year
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Total Sales */}
//                         <div className="bg-white rounded-2xl shadow-sm p-5 border cursor-pointer hover:shadow-lg transition">
//                             <div className="flex justify-between items-start">
//                                 <div>
//                                     <p className="text-gray-500 text-sm">Total Sales</p>
//                                     <h2 className="text-4xl font-bold mt-2">3000</h2>
//                                 </div>

//                                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//                                     💰
//                                 </div>
//                             </div>

//                             <div className="flex gap-2 mt-5">
//                                 <button className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
//                                     Week
//                                 </button>

//                                 <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
//                                     Month
//                                 </button>

//                                 <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
//                                     Year
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Total Quotations */}
//                         <div className="bg-white rounded-2xl shadow-sm p-5 border cursor-pointer hover:shadow-lg transition">
//                             <div className="flex justify-between items-start">
//                                 <div>
//                                     <p className="text-gray-500 text-sm">Total Quotations</p>
//                                     <h2 className="text-4xl font-bold mt-2">180</h2>
//                                 </div>

//                                 <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
//                                     📑
//                                 </div>
//                             </div>

//                             <div className="flex gap-2 mt-5">
//                                 <button className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
//                                     Week
//                                 </button>

//                                 <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
//                                     Month
//                                 </button>

//                                 <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
//                                     Year
//                                 </button>
//                             </div>
//                         </div>

//                     </div>

//                     {/* Enquiry Table */}


//                     {/* All Enquiries Table */}
//                     <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-8">

//                         {/* Title */}
//                         <div className="px-5 py-4 border-b border-gray-200">
//                             <h2 className="text-lg font-medium text-gray-700">
//                                 All Enquiries
//                             </h2>
//                         </div>

//                         <div className="overflow-x-auto">

//                             <table className="w-full border-collapse">

//                                 {/* Table Header */}
//                                 <thead className="bg-[#EAF7FB]">

//                                     <tr className="text-[12px] text-gray-600">

//                                         <th className="px-4 py-3 text-left border-b">
//                                             Enquiry ID
//                                         </th>

//                                         <th className="px-4 py-3 text-left border-b">
//                                             Customer ID
//                                         </th>

//                                         <th className="px-4 py-3 text-left border-b">
//                                             Customer Name
//                                         </th>

//                                         <th className="px-4 py-3 text-left border-b">
//                                             Company Name
//                                         </th>

//                                         <th className="px-4 py-3 text-left border-b">
//                                             Product Name
//                                         </th>

//                                         <th className="px-4 py-3 text-left border-b">
//                                             Qty
//                                         </th>

//                                         <th className="px-4 py-3 text-left border-b">
//                                             Date Time
//                                         </th>

//                                         <th className="px-4 py-3 text-left border-b">
//                                             Status
//                                         </th>

//                                         <th className="px-4 py-3 text-center border-b">
//                                             Action
//                                         </th>

//                                     </tr>

//                                 </thead>

//                                 <tbody>
//                                     <tr className="text-sm border-b hover:bg-gray-50">
//                                         <td className="px-4 py-3">E001</td>
//                                         <td className="px-4 py-3">SP001</td>
//                                         <td className="px-4 py-3">Kumar</td>
//                                         <td className="px-4 py-3">Lava Info</td>
//                                         <td className="px-4 py-3">Hydraulic Pump</td>
//                                         <td className="px-4 py-3">10</td>
//                                         <td className="px-4 py-3">
//                                             30-06-2026
//                                             <br />
//                                             12.30PM
//                                         </td>

//                                         <td className="px-4 py-3">
//                                             <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
//                                                 New
//                                             </span>
//                                         </td>

//                                         <td className="px-4 py-3 text-center">
//                                             👁️ ✏️ 🗑️
//                                         </td>
//                                     </tr>

//                                     <tr className="text-sm border-b hover:bg-gray-50">
//                                         <td className="px-4 py-3">E002</td>
//                                         <td className="px-4 py-3">SP002</td>
//                                         <td className="px-4 py-3">Kumar</td>
//                                         <td className="px-4 py-3">Lava Info</td>
//                                         <td className="px-4 py-3">Hydraulic Pump</td>
//                                         <td className="px-4 py-3">10</td>
//                                         <td className="px-4 py-3">
//                                             30-06-2026
//                                             <br />
//                                             12.30PM
//                                         </td>

//                                         <td className="px-4 py-3">
//                                             <span className="bg-yellow-200 text-yellow-700 text-xs px-3 py-1 rounded">
//                                                 Follow-up
//                                             </span>
//                                         </td>

//                                         <td className="px-4 py-3 text-center">
//                                             👁️ ✏️ 🗑️
//                                         </td>
//                                     </tr>

//                                     <tr className="text-sm border-b hover:bg-gray-50">
//                                         <td className="px-4 py-3">E003</td>
//                                         <td className="px-4 py-3">SP003</td>
//                                         <td className="px-4 py-3">Kumar</td>
//                                         <td className="px-4 py-3">Lava Info</td>
//                                         <td className="px-4 py-3">Hydraulic Pump</td>
//                                         <td className="px-4 py-3">10</td>
//                                         <td className="px-4 py-3">
//                                             30-06-2026
//                                             <br />
//                                             12.30PM
//                                         </td>

//                                         <td className="px-4 py-3">
//                                             <span className="bg-pink-200 text-pink-700 text-xs px-3 py-1 rounded">
//                                                 Quoted
//                                             </span>
//                                         </td>

//                                         <td className="px-4 py-3 text-center">
//                                             👁️ ✏️ 🗑️
//                                         </td>
//                                     </tr>

//                                     <tr className="text-sm border-b hover:bg-gray-50">
//                                         <td className="px-4 py-3">E004</td>
//                                         <td className="px-4 py-3">SP004</td>
//                                         <td className="px-4 py-3">Kumar</td>
//                                         <td className="px-4 py-3">Lava Info</td>
//                                         <td className="px-4 py-3">Hydraulic Pump</td>
//                                         <td className="px-4 py-3">10</td>
//                                         <td className="px-4 py-3">
//                                             30-06-2026
//                                             <br />
//                                             12.30PM
//                                         </td>

//                                         <td className="px-4 py-3">
//                                             <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded">
//                                                 NEW
//                                             </span>
//                                         </td>

//                                         <td className="px-4 py-3 text-center">
//                                             👁️ ✏️ 🗑️
//                                         </td>
//                                     </tr>

//                                     <tr className="text-sm border-b hover:bg-gray-50">
//                                         <td className="px-4 py-3">E005</td>
//                                         <td className="px-4 py-3">SP005</td>
//                                         <td className="px-4 py-3">Kumar</td>
//                                         <td className="px-4 py-3">Lava Info</td>
//                                         <td className="px-4 py-3">Hydraulic Pump</td>
//                                         <td className="px-4 py-3">10</td>
//                                         <td className="px-4 py-3">
//                                             30-06-2026
//                                             <br />
//                                             12.30PM
//                                         </td>

//                                         <td className="px-4 py-3">
//                                             <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded">
//                                                 NEW
//                                             </span>
//                                         </td>

//                                         <td className="px-4 py-3 text-center">
//                                             👁️ ✏️ 🗑️
//                                         </td>
//                                     </tr>

//                                     <tr className="text-sm hover:bg-gray-50">
//                                         <td className="px-4 py-3">E006</td>
//                                         <td className="px-4 py-3">SP006</td>
//                                         <td className="px-4 py-3">Kumar</td>
//                                         <td className="px-4 py-3">Lava Info</td>
//                                         <td className="px-4 py-3">Hydraulic Pump</td>
//                                         <td className="px-4 py-3">10</td>
//                                         <td className="px-4 py-3">
//                                             30-06-2026
//                                             <br />
//                                             12.30PM
//                                         </td>

//                                         <td className="px-4 py-3">
//                                             <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded">
//                                                 NEW
//                                             </span>
//                                         </td>

//                                         <td className="px-4 py-3 text-center">
//                                             👁️ ✏️ 🗑️
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>




//                 </div>



//                 {/* Registration Popup */}
//                 {/* Registration Popup */}
// {openModal && (
//   <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

//     <div className="bg-white rounded-xl w-[700px] shadow-xl">

//       <div className="flex justify-between items-center px-6 py-4 border-b">

//         <h2 className="text-xl font-semibold">
//           All Registration
//         </h2>

//         <button
//           onClick={() => setOpenModal(false)}
//           className="text-2xl text-gray-500 hover:text-red-500"
//         >
//           ×
//         </button>

//       </div>

//       <div className="p-6">

//   <div className="overflow-x-auto rounded-lg border border-gray-200">

//     <table className="w-full text-sm">

//       <thead className="bg-[#EAF7FB]">
//         <tr>
//           <th className="px-4 py-3 text-left">Date</th>
//           <th className="px-4 py-3 text-left">Time</th>
//           <th className="px-4 py-3 text-left">Phone Number</th>
//           <th className="px-4 py-3 text-left">Customer Name</th>
//           <th className="px-4 py-3 text-left">Company Name</th>
//         </tr>
//       </thead>

//       <tbody>

//         {/* 👇 Next part-la rows inga varum */}
//         <tr className="border-b hover:bg-gray-50">
//   <td className="px-4 py-3">30-06-2026</td>
//   <td className="px-4 py-3">12:30 PM</td>
//   <td className="px-4 py-3">9876543210</td>
//   <td className="px-4 py-3">Kumar</td>
//   <td className="px-4 py-3">Lava Info</td>
// </tr>

// <tr className="border-b hover:bg-gray-50">
//   <td className="px-4 py-3">30-06-2026</td>
//   <td className="px-4 py-3">12:45 PM</td>
//   <td className="px-4 py-3">9876543211</td>
//   <td className="px-4 py-3">Raj</td>
//   <td className="px-4 py-3">ABC Pvt Ltd</td>
// </tr>

// <tr className="border-b hover:bg-gray-50">
//   <td className="px-4 py-3">30-06-2026</td>
//   <td className="px-4 py-3">01:00 PM</td>
//   <td className="px-4 py-3">9876543212</td>
//   <td className="px-4 py-3">Ravi</td>
//   <td className="px-4 py-3">XYZ Pvt Ltd</td>
// </tr>

// <tr className="hover:bg-gray-50">
//   <td className="px-4 py-3">30-06-2026</td>
//   <td className="px-4 py-3">01:15 PM</td>
//   <td className="px-4 py-3">9876543213</td>
//   <td className="px-4 py-3">Suresh</td>
//   <td className="px-4 py-3">Tech Solutions</td>
// </tr>

//       </tbody>

//     </table>

//   </div>

// </div>






//     </div>

//   </div>
// )}












//             </div>
//         </div>
//     );
// }

"use client";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";

export default function Dashboard() {
    const [openModal, setOpenModal] = useState(false);
    const [popupTitle, setPopupTitle] = useState("");
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1">
                <Header />

                <div className="p-6">
                    {/* Heading */}
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800">
                                Dashboard
                            </h1>

                            <p className="text-gray-500 mt-1">
                                Welcome Back! Here's What's Happening Today.
                            </p>
                        </div>

                        <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg shadow">
                            Export
                        </button>
                    </div>

                    {/* Dashboard Cards */}

                    {/* Dashboard Cards */}
                    <div className="grid grid-cols-4 gap-6 mb-8">

                        {/* Total Enquiries */}
                        <div onClick={() => {
    setPopupTitle("All Enquiries");
    setOpenModal(true);
  }}
  className="bg-white rounded-2xl shadow-sm p-5 border cursor-pointer hover:shadow-lg transition">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-gray-500 text-sm">Total Enquiries</p>
                                    <h2 className="text-4xl font-bold mt-2">170</h2>
                                </div>

                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    📄
                                </div>
                            </div>

                            <div className="flex gap-2 mt-5">
                                <button className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                                    Week
                                </button>

                                <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                                    Month
                                </button>

                                <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                                    Year
                                </button>
                            </div>
                        </div>

                        {/* Total Registration */}
                        <div onClick={() => setOpenModal(true)}
                            className="bg-white rounded-2xl shadow-sm p-5 border cursor-pointer hover:shadow-lg transition">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-gray-500 text-sm">Total Registration</p>
                                    <h2 className="text-4xl font-bold mt-2">250</h2>
                                </div>

                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                    👤
                                </div>
                            </div>

                            <div className="flex gap-2 mt-5">
                                <button className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                                    Week
                                </button>

                                <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                                    Month
                                </button>

                                <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                                    Year
                                </button>
                            </div>
                        </div>

                        {/* Total Sales */}
                        <div onClick={() => {
    setPopupTitle("All Enquiries");
    setOpenModal(true);
  }}
  className="bg-white rounded-2xl shadow-sm p-5 border cursor-pointer hover:shadow-lg transition">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-gray-500 text-sm">Total Sales</p>
                                    <h2 className="text-4xl font-bold mt-2">3000</h2>
                                </div>

                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    💰
                                </div>
                            </div>

                            <div className="flex gap-2 mt-5">
                                <button className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                                    Week
                                </button>

                                <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                                    Month
                                </button>

                                <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                                    Year
                                </button>
                            </div>
                        </div>

                        {/* Total Quotations */}
                        <div onClick={() => {
    setPopupTitle("All Quotations");
    setOpenModal(true);
  }}
  className="bg-white rounded-2xl shadow-sm p-5 border cursor-pointer hover:shadow-lg transition">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-gray-500 text-sm">Total Quotations</p>
                                    <h2 className="text-4xl font-bold mt-2">180</h2>
                                </div>

                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                    📑
                                </div>
                            </div>

                            <div className="flex gap-2 mt-5">
                                <button className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                                    Week
                                </button>

                                <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                                    Month
                                </button>

                                <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                                    Year
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Enquiry Table */}


                    {/* All Enquiries Table */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-8">

                        {/* Title */}
                        <div className="px-5 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-medium text-gray-700">
                                All Enquiries
                            </h2>
                        </div>

                        <div className="overflow-x-auto">

                            <table className="w-full border-collapse">

                                {/* Table Header */}
                                <thead className="bg-[#EAF7FB]">

                                    <tr className="text-[12px] text-gray-600">

                                        <th className="px-4 py-3 text-left border-b">
                                            Enquiry ID
                                        </th>

                                        <th className="px-4 py-3 text-left border-b">
                                            Customer ID
                                        </th>

                                        <th className="px-4 py-3 text-left border-b">
                                            Customer Name
                                        </th>

                                        <th className="px-4 py-3 text-left border-b">
                                            Company Name
                                        </th>

                                        <th className="px-4 py-3 text-left border-b">
                                            Product Name
                                        </th>

                                        <th className="px-4 py-3 text-left border-b">
                                            Qty
                                        </th>

                                        <th className="px-4 py-3 text-left border-b">
                                            Date Time
                                        </th>

                                        <th className="px-4 py-3 text-left border-b">
                                            Status
                                        </th>

                                        <th className="px-4 py-3 text-center border-b">
                                            Action
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>
                                    <tr className="text-sm border-b hover:bg-gray-50">
                                        <td className="px-4 py-3">E001</td>
                                        <td className="px-4 py-3">SP001</td>
                                        <td className="px-4 py-3">Kumar</td>
                                        <td className="px-4 py-3">Lava Info</td>
                                        <td className="px-4 py-3">Hydraulic Pump</td>
                                        <td className="px-4 py-3">10</td>
                                        <td className="px-4 py-3">
                                            30-06-2026
                                            <br />
                                            12.30PM
                                        </td>

                                        <td className="px-4 py-3">
                                            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
                                                New
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 text-center">
                                            👁️ ✏️ 🗑️
                                        </td>
                                    </tr>

                                    <tr className="text-sm border-b hover:bg-gray-50">
                                        <td className="px-4 py-3">E002</td>
                                        <td className="px-4 py-3">SP002</td>
                                        <td className="px-4 py-3">Kumar</td>
                                        <td className="px-4 py-3">Lava Info</td>
                                        <td className="px-4 py-3">Hydraulic Pump</td>
                                        <td className="px-4 py-3">10</td>
                                        <td className="px-4 py-3">
                                            30-06-2026
                                            <br />
                                            12.30PM
                                        </td>

                                        <td className="px-4 py-3">
                                            <span className="bg-yellow-200 text-yellow-700 text-xs px-3 py-1 rounded">
                                                Follow-up
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 text-center">
                                            👁️ ✏️ 🗑️
                                        </td>
                                    </tr>

                                    <tr className="text-sm border-b hover:bg-gray-50">
                                        <td className="px-4 py-3">E003</td>
                                        <td className="px-4 py-3">SP003</td>
                                        <td className="px-4 py-3">Kumar</td>
                                        <td className="px-4 py-3">Lava Info</td>
                                        <td className="px-4 py-3">Hydraulic Pump</td>
                                        <td className="px-4 py-3">10</td>
                                        <td className="px-4 py-3">
                                            30-06-2026
                                            <br />
                                            12.30PM
                                        </td>

                                        <td className="px-4 py-3">
                                            <span className="bg-pink-200 text-pink-700 text-xs px-3 py-1 rounded">
                                                Quoted
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 text-center">
                                            👁️ ✏️ 🗑️
                                        </td>
                                    </tr>

                                    <tr className="text-sm border-b hover:bg-gray-50">
                                        <td className="px-4 py-3">E004</td>
                                        <td className="px-4 py-3">SP004</td>
                                        <td className="px-4 py-3">Kumar</td>
                                        <td className="px-4 py-3">Lava Info</td>
                                        <td className="px-4 py-3">Hydraulic Pump</td>
                                        <td className="px-4 py-3">10</td>
                                        <td className="px-4 py-3">
                                            30-06-2026
                                            <br />
                                            12.30PM
                                        </td>

                                        <td className="px-4 py-3">
                                            <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded">
                                                NEW
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 text-center">
                                            👁️ ✏️ 🗑️
                                        </td>
                                    </tr>

                                    <tr className="text-sm border-b hover:bg-gray-50">
                                        <td className="px-4 py-3">E005</td>
                                        <td className="px-4 py-3">SP005</td>
                                        <td className="px-4 py-3">Kumar</td>
                                        <td className="px-4 py-3">Lava Info</td>
                                        <td className="px-4 py-3">Hydraulic Pump</td>
                                        <td className="px-4 py-3">10</td>
                                        <td className="px-4 py-3">
                                            30-06-2026
                                            <br />
                                            12.30PM
                                        </td>

                                        <td className="px-4 py-3">
                                            <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded">
                                                NEW
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 text-center">
                                            👁️ ✏️ 🗑️
                                        </td>
                                    </tr>

                                    <tr className="text-sm hover:bg-gray-50">
                                        <td className="px-4 py-3">E006</td>
                                        <td className="px-4 py-3">SP006</td>
                                        <td className="px-4 py-3">Kumar</td>
                                        <td className="px-4 py-3">Lava Info</td>
                                        <td className="px-4 py-3">Hydraulic Pump</td>
                                        <td className="px-4 py-3">10</td>
                                        <td className="px-4 py-3">
                                            30-06-2026
                                            <br />
                                            12.30PM
                                        </td>

                                        <td className="px-4 py-3">
                                            <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded">
                                                NEW
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 text-center">
                                            👁️ ✏️ 🗑️
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>




                </div>



                {/* Registration Popup */}
                {/* Registration Popup */}
                {openModal && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                        <div className="bg-white rounded-xl w-[700px] shadow-xl">

                            <div className="flex justify-between items-center px-6 py-4 border-b">

                                <h2 className="text-xl font-semibold">
                                      {popupTitle}
                                </h2>

                                <button
                                    onClick={() => setOpenModal(false)}
                                    className="text-2xl text-gray-500 hover:text-red-500"
                                >
                                    ×
                                </button>

                            </div>

                            <div className="p-6">

                                <div className="overflow-x-auto rounded-lg border border-gray-200">

                                    <table className="w-full text-sm">

                                        <thead className="bg-[#EAF7FB]">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Date</th>
                                                <th className="px-4 py-3 text-left">Time</th>
                                                <th className="px-4 py-3 text-left">Phone Number</th>
                                                <th className="px-4 py-3 text-left">Customer Name</th>
                                                <th className="px-4 py-3 text-left">Company Name</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            {/* 👇 Next part-la rows inga varum */}
                                            <tr className="border-b hover:bg-gray-50">
                                                <td className="px-4 py-3">30-06-2026</td>
                                                <td className="px-4 py-3">12:30 PM</td>
                                                <td className="px-4 py-3">9876543210</td>
                                                <td className="px-4 py-3">Kumar</td>
                                                <td className="px-4 py-3">Lava Info</td>
                                            </tr>

                                            <tr className="border-b hover:bg-gray-50">
                                                <td className="px-4 py-3">30-06-2026</td>
                                                <td className="px-4 py-3">12:45 PM</td>
                                                <td className="px-4 py-3">9876543211</td>
                                                <td className="px-4 py-3">Raj</td>
                                                <td className="px-4 py-3">ABC Pvt Ltd</td>
                                            </tr>

                                            <tr className="border-b hover:bg-gray-50">
                                                <td className="px-4 py-3">30-06-2026</td>
                                                <td className="px-4 py-3">01:00 PM</td>
                                                <td className="px-4 py-3">9876543212</td>
                                                <td className="px-4 py-3">Ravi</td>
                                                <td className="px-4 py-3">XYZ Pvt Ltd</td>
                                            </tr>

                                            <tr className="hover:bg-gray-50">
                                                <td className="px-4 py-3">30-06-2026</td>
                                                <td className="px-4 py-3">01:15 PM</td>
                                                <td className="px-4 py-3">9876543213</td>
                                                <td className="px-4 py-3">Suresh</td>
                                                <td className="px-4 py-3">Tech Solutions</td>
                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                            </div>






                        </div>

                    </div>
                )}












            </div>
        </div>
    );
}