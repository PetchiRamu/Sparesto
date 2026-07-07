// reports/page.js (or pages/reports.js)

import React from 'react';
import BuyerHeader from '../components/buyerheader';
import BuyerSidebar from '../components/buyersidebar';

// --- MOCK DATA ---
const STATS = [
  { id: 1, title: "Total Spend", value: "$1,234,567", metric: null },
  { id: 2, title: "Total Orders", value: "890", metric: null },
  { id: 3, title: "Top Purchased Item", value: "SKU-XYZ-001", metric: null },
];

const SPEND_OVER_TIME = {
  total: "$124,567.89",
  change: "+5.2%",
  data: [15, 20, 60, 25], // Mock bar heights (0-100 scale)
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
};

const TABLE_DATA = [
  { date: 'Oct 28, 2023', order: '#ORD-5543', po: 'PO-98765', item: 'SKU-ABC-123', category: 'Electronics', quantity: 15, unitPrice: '$250.00', total: '$3,750.00' },
  { date: 'Oct 25, 2023', order: '#ORD-5542', po: 'PO-98764', item: 'SKU-XYZ-001', category: 'Office Supplies', quantity: 200, unitPrice: '$12.50', total: '$2,500.00' },
  { date: 'Oct 24, 2023', order: '#ORD-5541', po: 'PO-98763', item: 'SKU-DEF-456', category: 'Hardware', quantity: 50, unitPrice: '$75.20', total: '$3,760.00' },
  { date: 'Oct 22, 2023', order: '#ORD-5540', po: 'PO-98762', item: 'SKU-GHI-789', category: 'Software', quantity: 5, unitPrice: '$999.00', total: '$4,995.00' },
  { date: 'Oct 21, 2023', order: '#ORD-5539', po: 'PO-98761', item: 'SKU-JKL-101', category: 'Furniture', quantity: 8, unitPrice: '$450.00', total: '$3,600.00' },
];

// --- REUSABLE SUB-COMPONENTS (Defined within the file) ---

const FilterDropdown = ({ label }) => (
  <button className="flex items-center justify-between px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition min-w-[150px] w-full sm:w-auto">
    {label}
    {/* Chevron Down Icon (placeholder) */}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>
);

const StatsCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
    <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
  </div>
);

// --- MAIN DASHBOARD COMPONENT ---

const ReportsDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className='w-64'>
        <BuyerSidebar/>
      </div>

   

      {/* 2. Main Content Area */}
      <main className="p-4 md:p-8 max-w-7xl mx-auto">
        
        {/* Title and Download Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition duration-150">
            {/* Download Icon (placeholder) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download CSV
          </button>
        </div>

        {/* 3. Report Filters: Responsive Stacking */}
        <div className="flex flex-col space-y-3 mb-6 sm:flex-row sm:space-y-0 sm:space-x-4">
          <FilterDropdown label="Date Range: Last 30 Days" />
          <FilterDropdown label="Product Category" />
          <FilterDropdown label="SKU" />
          <FilterDropdown label="Purchase Order #" />
        </div>

        {/* 4. Stats Grid: Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-3">
          {STATS.map(stat => (
            <StatsCard key={stat.id} title={stat.title} value={stat.value} />
          ))}
        </div>

        {/* 5. Spend Over Time Chart Area */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Spend Over Time</h3>
              <p className="text-sm text-gray-500">Last 30 Days</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-900">{SPEND_OVER_TIME.total}</p>
              <span className="text-green-600 font-medium text-sm">{SPEND_OVER_TIME.change}</span>
            </div>
          </div>
          
          {/* Chart Visualization (Mock Bars) */}
          <div className="h-40 flex items-end space-x-6 pb-2 border-b border-gray-200">
            {SPEND_OVER_TIME.data.map((height, index) => (
              <div key={index} className="flex-1 h-full flex flex-col justify-end items-center">
                <div 
                  className={`w-full rounded-t-lg transition-all duration-500 ${index === 2 ? 'bg-blue-600 shadow-lg' : 'bg-blue-100'}`}
                  style={{ height: `${height}%` }} 
                />
              </div>
            ))}
          </div>

          {/* Chart Labels */}
          <div className="flex justify-between text-xs font-medium text-gray-500 pt-2">
            {SPEND_OVER_TIME.labels.map((label, index) => (
              <span key={index} className="flex-1 text-center">{label}</span>
            ))}
          </div>
        </div>

        {/* 6. Data Table: Responsive Scroll */}
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
          
          {/* Search Bar */}
          <input 
            type="text" 
            placeholder="Search orders..." 
            className="mb-4 p-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg w-full text-sm"
          />

          {/* Table Container - Critical for responsiveness */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {['Date', 'Order #', 'PO #', 'Item/SKU', 'Category', 'Quantity', 'Unit Price', 'Total'].map((header) => (
                    <th 
                      key={header}
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {TABLE_DATA.map((row, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{row.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-600 font-medium">{row.order}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{row.po}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{row.item}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{row.category}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-right">{row.quantity}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-right">{row.unitPrice}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-gray-900 text-right">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-2 sm:mb-0">Showing 1 to 5 of 890 results</p>
            <div className="space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition">Previous</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition">Next</button>
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default ReportsDashboard;