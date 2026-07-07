// invoices/page.js (or pages/invoices.js)

import React from 'react';
import BuyerSidebar from '../components/buyersidebar';

// --- MOCK DATA ---
const INVOICE_DATA = [
  { invoice: 'INV-2023-001', order: 'ORD-101', issueDate: '2023-10-26', dueDate: '2023-11-25', amount: 2500.00, status: 'Paid' },
  { invoice: 'INV-2023-002', order: 'ORD-102', issueDate: '2023-10-20', dueDate: '2023-11-19', amount: 1230.50, status: 'Due' },
  { invoice: 'INV-2023-003', order: 'ORD-103', issueDate: '2023-09-15', dueDate: '2023-10-15', amount: 850.00, status: 'Overdue' },
  { invoice: 'INV-2023-004', order: 'ORD-104', issueDate: '2023-09-10', dueDate: '2023-10-10', amount: 5100.75, status: 'Paid' },
  { invoice: 'INV-2023-005', order: 'ORD-105', issueDate: '2023-08-30', dueDate: '2023-09-29', amount: 975.00, status: 'Paid' },
];

// Helper to format currency
const formatCurrency = (amount) => `$${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

// Helper to determine status badge styles
const getStatusBadge = (status) => {
  let classes = 'inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ';
  switch (status) {
    case 'Paid':
      classes += 'bg-green-100 text-green-800';
      break;
    case 'Due':
      classes += 'bg-yellow-100 text-yellow-800';
      break;
    case 'Overdue':
      classes += 'bg-red-100 text-red-800';
      break;
    default:
      classes += 'bg-gray-100 text-gray-800';
  }
  return <span className={classes}>{status}</span>;
};


// --- MAIN DASHBOARD COMPONENT ---

const InvoicesDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* 1. Static Sidebar (Hidden on Mobile, Visible on MD and up) */}
    <BuyerSidebar/>

      {/* 2. Main Content Area */}
      <div className="flex-1 p-4 md:p-8">
        
        {/* Header/Title Block */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Invoices & Payments</h1>
            <p className="text-gray-500 mt-1">View, manage, and download your invoices.</p>
          </div>
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 mt-4 sm:mt-0 whitespace-nowrap">
            {/* Pay Icon (placeholder) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 11H4v-3h12v3zM4 8V6h12v2H4z" />
            </svg>
            Pay All Due Invoices
          </button>
        </div>
        
        {/* 3. Filters Section */}
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 mb-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-6 items-end">
            
            {/* Search Input (Takes up 2 columns on small screens, full on mobile) */}
            <div className="sm:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Search Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search"
                  className="block w-full pl-10 py-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Search by Invoice #, Order ID..."
                />
              </div>
            </div>

            {/* Status Dropdown */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
              <select
                id="status"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
              >
                <option>All</option>
                <option>Paid</option>
                <option>Due</option>
                <option>Overdue</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 mt-auto">
              <button className="w-1/2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition">
                Apply
              </button>
              <button className="w-1/2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition">
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* 4. Data Table Section */}
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
          
          {/* Table Container - Critical for responsiveness: overflow-x-auto */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {['Invoice #', 'Order ID', 'Issue Date', 'Due Date', 'Amount', 'Status', 'Actions'].map((header) => (
                    <th 
                      key={header}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {INVOICE_DATA.map((invoice, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{invoice.invoice}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{invoice.order}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.issueDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.dueDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{formatCurrency(invoice.amount)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{getStatusBadge(invoice.status)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer">
                      {/* Download Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-2 sm:mb-0">Showing 1 to 5 of 20 results</p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">Previous</button>
              {[1, 2, 3].map(page => (
                <button 
                  key={page}
                  className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    page === 1 ? 'bg-blue-600 text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default InvoicesDashboard;