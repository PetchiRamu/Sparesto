// components/Sidebar.jsx
"use client";

import Link from "next/link";
import { Gauge, ShoppingBag, Box, FileText, Settings, LogOut } from "lucide-react";

// You can update the href routes based on your project pages
const navItems = [
  { name: "Dashboard", icon: Gauge, href: "/buyerdashboard" },
  { name: "Orders Tracking", icon: ShoppingBag, href: "/ordertracking" },
  { name: "Products", icon: Box, href: "/product" },
  { name: "Returns & RMA", icon: FileText, href: "/rmaform" },
  { name: "Reports", icon: FileText, href: "/reports" },
  { name: "Invoices & Payments", icon: FileText, href: "/invoiceandpayments" },
  { name: "Terms and Conditions", icon: FileText, href: "/termsandcondition" },
  { name: "Bulk Order", icon: FileText, href: "/quickbulkorder" },
  { name: "Request For Quote", icon: FileText, href: "/rfqform" },


];

export default function BuyerSidebar() {
  return (
    <div className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-100">
      
      {/* Logo Section */}
      <div className="p-6">
        <h1 className="text-xl font-bold text-blue-600">B2B Platform</h1>
      </div>

      {/* Primary Navigation */}
      <nav className="flex-1 space-y-2 px-4 py-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Settings & Logout */}
      <div className="p-4 border-t border-gray-100 space-y-1">
        <Link
          href="/settings"
          className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>

        <Link
          href="/logout"
          className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </Link>
      </div>
    </div>
  );
}
