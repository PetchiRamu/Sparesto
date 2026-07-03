// "use client";
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Share2, Globe, Headphones } from 'lucide-react';
// import Header from '../components/header';
// import { fetchGetCart } from '../apiservices/apiServices';
// import Cookies from 'js-cookie';

// export default function CartPage() {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadCart = async () => {
//       const token = Cookies.get('token');
//       try {
//         if (token) {
//           const response = await fetchGetCart(token);
//           setCartItems(response?.data || []);
//         } else if (typeof window !== 'undefined') {
//           const rawCart = localStorage.getItem('sparesto_cart');
//           const localCart = rawCart ? JSON.parse(rawCart) : [];
//           setCartItems(localCart);
//         }
//       } catch (error) {
//         console.error('Failed to load cart:', error);
//         setCartItems([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCart();

//     const handleStorage = () => loadCart();
//     window.addEventListener('storage', handleStorage);
//     return () => window.removeEventListener('storage', handleStorage);
//   }, []);

//   return (
//     <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans antialiased text-slate-700">
      
// <Header />

//       {/* --- MAIN CONTENT AREA --- */}
//       <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
//         {/* Product Information Container Card */}
//         <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
          
//           {/* Section Header Banner */}
//           <div className="bg-teal-50/60 border-b border-slate-100 px-8 py-5">
//             <h2 className="text-xl font-bold text-slate-800 tracking-tight">Product Information</h2>
//           </div>

//           {/* Cart Item Grid/List */}
//           <div className="p-8 space-y-8">
//             {loading ? (
//               <div className="text-center py-20 text-sm text-slate-500">Loading cart items...</div>
//             ) : cartItems.length === 0 ? (
//               <div className="text-center py-20 text-sm text-slate-500">
//                 Your cart is empty.
//               </div>
//             ) : (
//               cartItems.map((item, index) => (
//                 <div 
//                   key={item.id || `${item.productId}-${index}`} 
//                   className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100 last:border-0 last:pb-0"
//                 >
//                   {/* Product Box Details */}
//                   <div className="flex items-start space-x-6">
//                     {/* Image Placeholder Box */}
//                     <div className="w-24 h-24 bg-slate-100 rounded-lg flex-shrink-0 border border-slate-200/60">
//                       {item.img && (
//                         <img
//                           src={item.img}
//                           alt={item.name || item.productId}
//                           className="w-full h-full object-cover rounded-lg"
//                           onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
//                         />
//                       )}
//                     </div>
                    
//                     {/* Title & Info */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 pt-1">
//                       <div>
//                         <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Product Name</span>
//                         <h3 className="text-lg font-bold text-slate-800 mt-0.5">{item.name || item.productId}</h3>
//                       </div>
//                       <div>
//                         <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Quantity Requested</span>
//                         <p className="text-lg font-bold text-slate-800 mt-0.5">{item.quantity}</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Individual Item CTA */}
//                   <div className="flex sm:justify-end w-full sm:w-auto">
//                     <Link 
//                       href="/enquiry"
//                       className="w-full sm:w-auto text-center bg-teal-900 hover:bg-teal-800 text-white text-xs font-bold tracking-wide px-7 py-2.5 rounded-lg transition shadow-sm block"
//                     >
//                       Enquiry
//                     </Link>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//         </div>
//       </main>

//       {/* --- FOOTER --- */}
//       <footer className="bg-teal-50/40 border-t border-teal-100/60 text-slate-600 text-sm mt-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
//           {/* Main Footer Links Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-teal-100/60">
            
//             {/* Branding Column */}
//             <div className="md:col-span-4 space-y-3">
//               <h3 className="font-bold text-slate-900 text-base">SPARESTO</h3>
//               <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
//                 Global specialists in high-performance wind turbine spare parts and refurbishment services for industrial energy grids.
//               </p>
//             </div>

//             {/* Quick Links Column */}
//             <div className="md:col-span-2 space-y-3">
//               <h4 className="font-bold text-xs uppercase tracking-wider text-teal-900">Quick Links</h4>
//               <ul className="space-y-2 text-xs">
//                 <li><Link href="/products" className="hover:text-teal-700 transition">Products</Link></li>
//                 <li><Link href="/e-auction" className="hover:text-teal-700 transition">E-Auction</Link></li>
//                 <li><Link href="/manpower" className="hover:text-teal-700 transition">Manpower Supply</Link></li>
//               </ul>
//             </div>

//             {/* Support Column */}
//             <div className="md:col-span-2 space-y-3">
//               <h4 className="font-bold text-xs uppercase tracking-wider text-teal-900">Support</h4>
//               <ul className="space-y-2 text-xs">
//                 <li><Link href="/services" className="hover:text-teal-700 transition">Spare Parts Services</Link></li>
//                 <li><Link href="/privacy" className="hover:text-teal-700 transition">Privacy Policy</Link></li>
//                 <li><Link href="/terms" className="hover:text-teal-700 transition">Terms of Service</Link></li>
//               </ul>
//             </div>

//             {/* Newsletter Subscription Column */}
//             <div className="md:col-span-4 space-y-3">
//               <h4 className="font-bold text-xs uppercase tracking-wider text-teal-900">Newsletter</h4>
//               <p className="text-xs text-slate-500">Get the latest availability updates directly.</p>
              
//               <div className="flex mt-2 max-w-md shadow-sm">
//                 <input 
//                   type="email" 
//                   placeholder="Email address" 
//                   className="w-full px-4 py-2 text-xs bg-white border border-slate-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-teal-600"
//                 />
//                 <button className="bg-teal-900 hover:bg-teal-800 text-white font-semibold text-xs px-5 rounded-r-md transition tracking-wide">
//                   Join
//                 </button>
//               </div>
//             </div>

//           </div>

//           {/* Sub-Footer Row */}
//           <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
//             <p>&copy; 2026 SPARESTO Solutions. All rights reserved.</p>
            
//             {/* Social/Utility Action Icons */}
//             <div className="flex items-center space-x-5 text-slate-500">
//               <Link href="#" className="hover:text-teal-700 transition"><Share2 size={16} /></Link>
//               <Link href="#" className="hover:text-teal-700 transition"><Globe size={16} /></Link>
//               <Link href="#" className="hover:text-teal-700 transition"><Headphones size={16} /></Link>
//             </div>
//           </div>

//         </div>
//       </footer>

//     </div>
//   );
// }



"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { fetchGetCart } from "../apiservices/apiServices";
import Cart from "../components/Cart";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCart = async () => {
      const token = Cookies.get("token");

      try {
        if (token) {
          const response = await fetchGetCart(token);
          setCartItems(response?.data || []);
        } else if (typeof window !== "undefined") {
          const rawCart = localStorage.getItem("sparesto_cart");
          const localCart = rawCart ? JSON.parse(rawCart) : [];
          setCartItems(localCart);
        }
      } catch (error) {
        console.error("Failed to load cart:", error);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadCart();

    const handleStorage = () => loadCart();

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <Cart
      cartItems={cartItems}
      loading={loading}
    />
  );
}