// components/Header.jsx
import { Search, Bell } from 'lucide-react';

export default function BuyerHeader() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100 p-4 flex items-center justify-between lg:justify-end">
      {/* Logo/Menu for Mobile (Hidden on Desktop) */}
      <div className="lg:hidden text-xl font-bold text-blue-600">B2B Platform</div>

      {/* Search Bar - Hidden on mobile, shown on desktop (next to logo) */}
      <div className="relative flex-1 max-w-lg hidden lg:block mr-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search orders, products..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
        />
      </div>
      
      {/* User Actions */}
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
          <Bell className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            {/* Replace with actual user image */}
            <span className="flex items-center justify-center h-full text-sm font-semibold text-gray-600">AC</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">Alex Chen</p>
            <p className="text-xs text-gray-500">MegaCorp Inc.</p>
          </div>
        </div>
      </div>
    </header>
  );
}