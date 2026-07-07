'use client'; 

import React, { useState } from 'react';
import BuyerSidebar from '../components/buyersidebar';

// --- Reusable Form Input Component ---
const FormInput = ({ id, label, type = 'text', placeholder = '' }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="mb-2 text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      required
      className="rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
    />
  </div>
);

export default function RMAFormPage() {
  const [returnReason, setReturnReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("RMA Request Submitted. Reason:", returnReason);
    alert('RMA Request Submitted Successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* ---------------- LEFT SIDEBAR ---------------- */}
      <div className="w-64 hidden md:block bg-white shadow-lg border-r">
        <BuyerSidebar />
      </div>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="flex-1 p-4 md:p-10">

        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-6 md:p-10 lg:p-12">

          {/* Header */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            Product Return/RMA Request
          </h1>
          <p className="text-gray-600 mb-8 border-b pb-4">
            Please fill out all required fields to initiate your return authorization.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section 1 */}
            <h2 className="text-xl font-bold text-indigo-600">Order Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput id="orderId" label="Order ID / Invoice Number" placeholder="e.g., ORD-2025-00123" />
              <FormInput id="productSKU" label="Product SKU / Model" placeholder="e.g., ABC-456-XY" />
              <FormInput id="email" label="Contact Email" type="email" placeholder="you@example.com" />
              <FormInput id="phone" label="Contact Phone" type="tel" placeholder="(555) 555-1234" />
            </div>

            {/* Section 2 */}
            <h2 className="text-xl font-bold text-indigo-600 pt-4">Return Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Reason */}
              <div className="flex flex-col">
                <label htmlFor="reason" className="mb-2 text-sm font-medium text-gray-700">
                  Reason for Return
                </label>
                <select
                  id="reason"
                  name="reason"
                  required
                  value={returnReason}
                  onChange={(e) => setReturnReason(e.target.value)}
                  className="rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                  <option value="" disabled>Select a reason...</option>
                  <option value="defective">Defective/Does Not Work</option>
                  <option value="wrongItem">Received Wrong Item/Size</option>
                  <option value="unwanted">No Longer Wanted/Needed</option>
                  <option value="damage">Damaged During Shipping</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <FormInput id="purchaseDate" label="Original Purchase Date" type="date" />
            </div>

            {/* Comments */}
            <div className="flex flex-col">
              <label htmlFor="comments" className="mb-2 text-sm font-medium text-gray-700">
                Detailed Description of Issue (Required)
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                required
                placeholder="Describe the issue, defect, or reason for return in detail."
                className="rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg shadow-md text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 transform hover:scale-[1.005]"
              >
                Submit RMA Request
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
