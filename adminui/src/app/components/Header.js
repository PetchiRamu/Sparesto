"use client";

import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b px-6 py-3 flex items-center justify-between">
      
      {/* Search Box */}
      <div className="relative w-[450px]">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <button className="relative">
          <Bell size={22} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Admin Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-semibold">
            A
          </div>

          <div>
            <h4 className="text-sm font-semibold">Admin</h4>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
        </div>

      </div>
    </header>
  );
}