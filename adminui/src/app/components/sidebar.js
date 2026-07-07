// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import {
//     LayoutDashboard,
//     FileText,
//     Package,
//     ShoppingCart,
//     Truck,
//     Settings,
// } from "lucide-react";

// export default function Sidebar() {
//     return (
//         <aside className="w-64 min-h-screen bg-teal-700 text-white flex flex-col">


//             {/* <div className="p-4 border-b border-teal-600 bg-white">
//                 <Image
//                     src="/orginallogo.png"
//                     alt="Sparesto Logo"
//                     width={190}
//                     height={60}
//                     priority
//                 />
//             </div> */}

//             <div className="bg-white h-20 flex items-center px-4"
//      style={{
//        clipPath: "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)"
//      }}
// >
//   <img
//     src="/orginallogo.png"
//     alt="Sparesto Logo"
//     className="w-44 h-auto"
//   />
// </div>

//             {/* Menu */}
//             <nav className="flex-1 px-3 py-5">

//                 <Link
//                     href="/adminDashboard"
//                     className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-teal-600 mb-2"
//                 >
//                     <LayoutDashboard size={20} />
//                     Dashboard
//                 </Link>

//                 <Link
//                     href="/enquiryManagement"
//                     className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-teal-600 mb-2"
//                 >
//                     <FileText size={20} />
//                     Enquiry Management
//                 </Link>

//                 <Link
//                     href="/quotation"
//                     className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-teal-600 mb-2"
//                 >
//                     <FileText size={20} />
//                     Quote Management
//                 </Link>

//                 <Link
//                     href="/productMaster"
//                     className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-teal-600 mb-2"
//                 >
//                     <Package size={20} />
//                     Product Master
//                 </Link>

//                 <Link
//                     href="/orders"
//                     className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-teal-600 mb-2"
//                 >
//                     <ShoppingCart size={20} />
//                     Orders Overview
//                 </Link>

//                 <Link
//                     href="/couriersPartner"
//                     className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-teal-600 mb-2"
//                 >
//                     <Truck size={20} />
//                     Courier Partner
//                 </Link>

//                 <Link
//                     href="/reports"
//                     className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-teal-600"
//                 >
//                     <Settings size={20} />
//                     Reports
//                 </Link>

//             </nav>

//             {/* Profile */}
//             <div className="border-t border-teal-600 p-4 flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-white text-teal-700 flex items-center justify-center font-bold">
//                     A
//                 </div>

//                 <div>
//                     <p className="font-semibold">Admin</p>
//                     <p className="text-xs text-gray-200">Super Admin</p>
//                 </div>
//             </div>

//         </aside>
//     );
// }

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   LayoutDashboard,
//   FileText,
//   Package,
//   ShoppingCart,
//   Truck,
//   Settings,
//   Briefcase,
//   Wrench,
//   Gavel,
//   ShoppingBag,
// } from "lucide-react";

// export default function Sidebar() {
//   const [activeModule, setActiveModule] = useState("ecom");

//   return (
//     <div className="flex h-screen">

//       {/* Left Module Bar */}
//       <div className="w-20 bg-[#065f5b] text-white flex flex-col items-center py-5 gap-6">

//         <button
//           onClick={() => setActiveModule("ecom")}
//           className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center text-xs ${
//             activeModule === "ecom" ? "bg-white text-[#065f5b]" : ""
//           }`}
//         >
//           <ShoppingBag size={22} />
//           <span className="text-[10px] mt-1">E-Com</span>
//         </button>

//         <button
//           onClick={() => setActiveModule("manpower")}
//           className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center text-xs ${
//             activeModule === "manpower" ? "bg-white text-[#065f5b]" : ""
//           }`}
//         >
//           <Briefcase size={22} />
//           <span className="text-[10px] mt-1">Man</span>
//         </button>

//         <button
//           onClick={() => setActiveModule("service")}
//           className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center text-xs ${
//             activeModule === "service" ? "bg-white text-[#065f5b]" : ""
//           }`}
//         >
//           <Wrench size={22} />
//           <span className="text-[10px] mt-1">Service</span>
//         </button>

//         <button
//           onClick={() => setActiveModule("auction")}
//           className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center text-xs ${
//             activeModule === "auction" ? "bg-white text-[#065f5b]" : ""
//           }`}
//         >
//           <Gavel size={22} />
//           <span className="text-[10px] mt-1">Auction</span>
//         </button>
//       </div>

//       {/* Right Sidebar */}
//       <aside className="w-64 bg-teal-700 text-white flex flex-col">

//         {/* Logo */}
//         <div
//           className="bg-white h-20 flex items-center px-4"
//           style={{
//             clipPath: "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)",
//           }}
//         >
//           <Image
//             src="/orginallogo.png"
//             alt="Logo"
//             width={180}
//             height={60}
//           />
//         </div>

//         {/* Dynamic Menu */}
//         <nav className="flex-1 px-3 py-5">

//           {activeModule === "ecom" && (
//             <>
//               <Link href="/adminDashboard" className="flex items-center gap-3 p-3 hover:bg-teal-600 rounded-lg mb-2">
//                 <LayoutDashboard size={20} />
//                 Dashboard
//               </Link>

//               <Link href="/enquiryManagement" className="flex items-center gap-3 p-3 hover:bg-teal-600 rounded-lg mb-2">
//                 <FileText size={20} />
//                 Enquiry Management
//               </Link>

//               <Link href="/quotation" className="flex items-center gap-3 p-3 hover:bg-teal-600 rounded-lg mb-2">
//                 <FileText size={20} />
//                 Quote Management
//               </Link>

//               <Link href="/productMaster" className="flex items-center gap-3 p-3 hover:bg-teal-600 rounded-lg mb-2">
//                 <Package size={20} />
//                 Product Master
//               </Link>

//               <Link href="/orders" className="flex items-center gap-3 p-3 hover:bg-teal-600 rounded-lg mb-2">
//                 <ShoppingCart size={20} />
//                 Orders Overview
//               </Link>

//               <Link href="/couriersPartner" className="flex items-center gap-3 p-3 hover:bg-teal-600 rounded-lg mb-2">
//                 <Truck size={20} />
//                 Courier Partner
//               </Link>

//               <Link href="/reports" className="flex items-center gap-3 p-3 hover:bg-teal-600 rounded-lg">
//                 <Settings size={20} />
//                 Reports
//               </Link>
//             </>
//           )}

//           {activeModule === "manpower" && (
//             <div className="space-y-3">
//               <h3 className="font-semibold">Man Power Module</h3>
//               <p>Employee Management</p>
//               <p>Attendance</p>
//               <p>Payroll</p>
//             </div>
//           )}

//           {activeModule === "service" && (
//             <div className="space-y-3">
//               <h3 className="font-semibold">Spare Service Module</h3>
//               <p>Service Requests</p>
//               <p>Technicians</p>
//               <p>Reports</p>
//             </div>
//           )}

//           {activeModule === "auction" && (
//             <div className="space-y-3">
//               <h3 className="font-semibold">E-Auction Module</h3>
//               <p>Auctions</p>
//               <p>Bids</p>
//               <p>Winners</p>
//             </div>
//           )}

//         </nav>

//         {/* Profile */}
//         <div className="border-t border-teal-600 p-4 flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-white text-teal-700 flex items-center justify-center font-bold">
//             A
//           </div>

//           <div>
//             <p className="font-semibold">Admin</p>
//             <p className="text-xs text-gray-200">Super Admin</p>
//           </div>
//         </div>

//       </aside>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//     LayoutDashboard,
//     FileText,
//     Package,
//     ShoppingCart,
//     Truck,
//     Settings,
//     ShoppingBag,
//     Briefcase,
//     Wrench,
//     Gavel,
// } from "lucide-react";

// export default function Sidebar() {
//     const [activeModule, setActiveModule] = useState("ecom");

//     const ecomMenu = [
//         {
//             name: "Dashboard",
//             href: "/adminDashboard",
//             icon: <LayoutDashboard size={18} />,
//         },
//         {
//             name: "Enquiry Management",
//             href: "/enquiryManagement",
//             icon: <FileText size={18} />,
//         },
//         {
//             name: "Quote Management",
//             href: "/quotation",
//             icon: <FileText size={18} />,
//         },
//         {
//             name: "Product Master",
//             href: "/productMaster",
//             icon: <Package size={18} />,
//         },
//         {
//             name: "Orders Overview",
//             href: "/orders",
//             icon: <ShoppingCart size={18} />,
//         },
//         {
//             name: "Reports Configuration",
//             href: "/reports",
//             icon: <Settings size={18} />,
//         },
//         {
//             name: "Courier Partner Config",
//             href: "/couriersPartner",
//             icon: <Truck size={18} />,
//         },
//     ];

//     const manpowerMenu = [
//         { name: "Dashboard", href: "#" },
//         { name: "Employee", href: "#" },
//         { name: "Attendance", href: "#" },
//         { name: "Payroll", href: "#" },
//     ];

//     const serviceMenu = [
//         { name: "Dashboard", href: "#" },
//         { name: "Complaints", href: "#" },
//         { name: "Technician", href: "#" },
//         { name: "Reports", href: "#" },
//     ];

//     const auctionMenu = [
//         { name: "Dashboard", href: "#" },
//         { name: "Auctions", href: "#" },
//         { name: "Bids", href: "#" },
//         { name: "Winners", href: "#" },
//     ];

//     return (
//         <div className="flex h-screen">

//             {/* Left Module Bar */}
//             <div className="w-24 bg-[#0B6F6A] flex flex-col items-center gap-6 ">

//                 {/* Top Space */}
//                 <div className=" h-20"></div>

//                 {/* E-Com */}
//                 <button
//                     onClick={() => setActiveModule("ecom")}
//                     className={`w-full h-20 flex flex-col items-center justify-center transition mb-4 ${activeModule === "ecom"
//                             ? "bg-[#0FA8A0] border-l-4 border-white"
//                             : "hover:bg-[#12847E]"
//                         }`}
//                 >
//                     <ShoppingBag size={40} />
//                     <span className="text-[11px] mt-2">E-Com</span>
//                 </button>

//                 {/* Man Power */}
//                 <button
//                     onClick={() => setActiveModule("manpower")}
//                     className={`w-full h-20 flex flex-col items-center justify-center transition mb-4 ${activeModule === "manpower"
//                             ? "bg-[#0FA8A0] border-l-4 border-white"
//                             : "hover:bg-[#12847E]"
//                         }`}
//                 >
//                     <Briefcase size={40} />
//                     <span className="text-[11px] mt-2 text-center">
//                         Man
//                         <br />
//                         Power
//                     </span>
//                 </button>

//                 {/* Spare Service */}
//                 <button
//                     onClick={() => setActiveModule("service")}
//                     className={`w-full h-20 flex flex-col items-center justify-center transition mb-4${activeModule === "service"
//                             ? "bg-[#0FA8A0] border-l-4 border-white"
//                             : "hover:bg-[#12847E]"
//                         }`}
//                 >
//                     <Wrench size={40} />
//                     <span className="text-[10px] mt-2 text-center">
//                         Spare
//                         <br />
//                         Service
//                     </span>
//                 </button>

//                 {/* Auction */}
//                 <button
//                     onClick={() => setActiveModule("auction")}
//                     className={`w-full h-20 flex flex-col items-center justify-center transition mb-4${activeModule === "auction"
//                             ? "bg-[#0FA8A0] border-l-4 border-white"
//                             : "hover:bg-[#12847E]"
//                         }`}
//                 >
//                     <Gavel size={40} />
//                     <span className="text-[10px] mt-2 text-center">
//                         E-
//                         <br />
//                         Auction
//                     </span>
//                 </button>

//             </div>

//             {/* Right Sidebar */}
//             <aside className="w-72 bg-[#0FA8A0] text-white flex flex-col">

//                 {/* Logo */}
//                 <div
//                     className="bg-white h-20 flex items-center px-4"
//                     style={{
//                         clipPath:
//                             "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)",
//                     }}
//                 >
//                     <Image
//                         src="/orginallogo.png"
//                         alt="Logo"
//                         width={180}
//                         height={60}
//                     />
//                 </div>

//                 {/* Menu */}
//                 <nav className="flex-1 px-3 py-6">

//                     {/* E-Com Menu */}
//                     {activeModule === "ecom" &&
//                         ecomMenu.map((item, index) => (
//                             <Link
//                                 key={index}
//                                 href={item.href}
//                                 className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${index === 0
//                                         ? "bg-[#35C9C2] text-white"
//                                         : "hover:bg-[#35C9C2]"
//                                     }`}
//                             >
//                                 {item.icon}
//                                 <span>{item.name}</span>
//                             </Link>
//                         ))}

//                     {/* Man Power Menu */}
//                     {activeModule === "manpower" &&
//                         manpowerMenu.map((item, index) => (
//                             <Link
//                                 key={index}
//                                 href={item.href}
//                                 className="flex items-center gap-3 px-4 py-3 rounded-lg mb-2 hover:bg-[#35C9C2]"
//                             >
//                                 <Briefcase size={18} />
//                                 <span>{item.name}</span>
//                             </Link>
//                         ))}

//                     {/* Spare Service Menu */}
//                     {activeModule === "service" &&
//                         serviceMenu.map((item, index) => (
//                             <Link
//                                 key={index}
//                                 href={item.href}
//                                 className="flex items-center gap-3 px-4 py-3 rounded-lg mb-2 hover:bg-[#35C9C2]"
//                             >
//                                 <Wrench size={18} />
//                                 <span>{item.name}</span>
//                             </Link>
//                         ))}

//                     {/* Auction Menu */}
//                     {activeModule === "auction" &&
//                         auctionMenu.map((item, index) => (
//                             <Link
//                                 key={index}
//                                 href={item.href}
//                                 className="flex items-center gap-3 px-4 py-3 rounded-lg mb-2 hover:bg-[#35C9C2]"
//                             >
//                                 <Gavel size={18} />
//                                 <span>{item.name}</span>
//                             </Link>
//                         ))}
//                 </nav>

//                 {/* Profile */}
//                 <div className="border-t border-teal-500 p-4 flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-full bg-white text-[#0FA8A0] flex items-center justify-center font-bold">
//                         A
//                     </div>

//                     <div>
//                         <p className="font-semibold">Admin</p>
//                         <p className="text-xs text-gray-200">Super Admin</p>
//                     </div>
//                 </div>

//             </aside>

//         </div>
//     );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FileText,
  Package,
  ShoppingCart,
  Truck,
  Settings,
  ShoppingBag,
  Briefcase,
  Wrench,
  Gavel,
} from "lucide-react";

export default function Sidebar() {
  const [activeModule, setActiveModule] = useState("ecom");
  const pathname = usePathname();

  const ecomMenu = [
    {
      name: "Dashboard",
      href: "/adminDashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Enquiry Management",
      href: "/enquiryManagement",
      icon: <FileText size={18} />,
    },
    {
      name: "Quote Management",
      href: "/quotation",
      icon: <FileText size={18} />,
    },
    {
      name: "Product Master",
      href: "/productMaster",
      icon: <Package size={18} />,
    },
    {
      name: "Orders Overview",
      href: "/orders",
      icon: <ShoppingCart size={18} />,
    },
    {
      name: "Reports Configuration",
      href: "/reports",
      icon: <Settings size={18} />,
    },
    {
      name: "Courier Partner Config",
      href: "/couriersPartner",
      icon: <Truck size={18} />,
    },
  ];

  const manpowerMenu = [
    { name: "Dashboard", href: "#" },
    { name: "Employee", href: "#" },
    { name: "Attendance", href: "#" },
    { name: "Payroll", href: "#" },
  ];

  const serviceMenu = [
    { name: "Dashboard", href: "#" },
    { name: "Complaints", href: "#" },
    { name: "Technician", href: "#" },
    { name: "Reports", href: "#" },
  ];

  const auctionMenu = [
    { name: "Dashboard", href: "#" },
    { name: "Auctions", href: "#" },
    { name: "Bids", href: "#" },
    { name: "Winners", href: "#" },
  ];

  return (
    <div className="flex h-screen">

  {/* Left Module Bar */}
  <div className="w-24 bg-[#0B6F6A] flex flex-col items-center gap-6">

    <div className="h-20"></div>

    {/* E-Com */}
    <button
      onClick={() => setActiveModule("ecom")}
      className={`w-full h-20 flex flex-col items-center justify-center transition mb-4 ${
        activeModule === "ecom"
          ? "bg-[#0FA8A0] border-l-4 border-white"
          : "hover:bg-[#12847E]"
      }`}
    >
      <ShoppingBag size={40} />
      <span className="text-[11px] mt-2">E-Com</span>
    </button>

    {/* Man Power */}
    <button
      onClick={() => setActiveModule("manpower")}
      className={`w-full h-20 flex flex-col items-center justify-center transition mb-4 ${
        activeModule === "manpower"
          ? "bg-[#0FA8A0] border-l-4 border-white"
          : "hover:bg-[#12847E]"
      }`}
    >
      <Briefcase size={40} />
      <span className="text-[11px] mt-2 text-center">
        Man
        <br />
        Power
      </span>
    </button>

    {/* Spare Service */}
    <button
      onClick={() => setActiveModule("service")}
      className={`w-full h-20 flex flex-col items-center justify-center transition mb-4 ${
        activeModule === "service"
          ? "bg-[#0FA8A0] border-l-4 border-white"
          : "hover:bg-[#12847E]"
      }`}
    >
      <Wrench size={40} />
      <span className="text-[10px] mt-2 text-center">
        Spare
        <br />
        Service
      </span>
    </button>

    {/* Auction */}
    <button
      onClick={() => setActiveModule("auction")}
      className={`w-full h-20 flex flex-col items-center justify-center transition mb-4 ${
        activeModule === "auction"
          ? "bg-[#0FA8A0] border-l-4 border-white"
          : "hover:bg-[#12847E]"
      }`}
    >
      <Gavel size={40} />
      <span className="text-[10px] mt-2 text-center">
        E-
        <br />
        Auction
      </span>
    </button>

  </div>

  {/* Right Sidebar */}
  <aside className="w-72 bg-[#0FA8A0] text-white flex flex-col">

    {/* Logo */}
    <div
      className="bg-white h-20 flex items-center px-4"
      style={{
        clipPath: "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)",
      }}
    >
      <Image
        src="/orginallogo.png"
        alt="Logo"
        width={180}
        height={60}
      />
    </div>

    {/* Menu */}
    <nav className="flex-1 px-3 py-6">
        {/* E-Commerce Menu */}
{activeModule === "ecom" &&
  ecomMenu.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
        pathname === item.href
          ? "bg-[#35C9C2] text-white"
          : "hover:bg-[#35C9C2]"
      }`}
    >
      {item.icon}
      <span>{item.name}</span>
    </Link>
  ))}

{/* Man Power Menu */}
{activeModule === "manpower" &&
  manpowerMenu.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="flex items-center gap-3 px-4 py-3 rounded-lg mb-2 hover:bg-[#35C9C2]"
    >
      <Briefcase size={18} />
      <span>{item.name}</span>
    </Link>
  ))}

{/* Spare Service Menu */}
{activeModule === "service" &&
  serviceMenu.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="flex items-center gap-3 px-4 py-3 rounded-lg mb-2 hover:bg-[#35C9C2]"
    >
      <Wrench size={18} />
      <span>{item.name}</span>
    </Link>
  ))}

{/* Auction Menu */}
{activeModule === "auction" &&
  auctionMenu.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="flex items-center gap-3 px-4 py-3 rounded-lg mb-2 hover:bg-[#35C9C2]"
    >
      <Gavel size={18} />
      <span>{item.name}</span>
    </Link>
  ))}
      </nav>

    {/* Profile */}
    <div className="border-t border-teal-500 p-4 flex items-center gap-3">

      <div className="w-10 h-10 rounded-full bg-white text-[#0FA8A0] flex items-center justify-center font-bold">
        A
      </div>

      <div>
        <p className="font-semibold">Admin</p>
        <p className="text-xs text-gray-200">
          Super Admin
        </p>
      </div>

    </div>

  </aside>

</div>
  );
}


