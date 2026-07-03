// pages/new-rfq.js
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function NewRFQ() {
  const [quantity, setQuantity] = useState(500);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('Standard Shipping');
  const [notes, setNotes] = useState('');
  const targetPrice = 150;
  const estimatedTotal = targetPrice * quantity;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
  

      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">New Request for Quote</h1>

      {/* Product Card */}
      <div className="bg-white p-4 rounded-md shadow-sm flex items-center mb-6">
        <div className="w-16 h-16 mr-4 relative">
          <Image
            src="/industrial-widget.png" // Replace with your image path
            alt="Industrial Grade Widget"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="font-semibold text-gray-800">Industrial Grade Widget</h2>
          <p className="text-gray-500 text-sm">SKU: IND-WID-789</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section - Offer Details */}
        <div className="lg:col-span-2 bg-white p-6 rounded-md shadow-sm space-y-4">
          <h3 className="font-semibold text-gray-800 mb-2">Your Offer Details</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Target Price per Unit</label>
              <input
                type="text"
                value={`USD ${targetPrice.toFixed(2)}`}
                readOnly
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Delivery Preference</label>
              <select
                value={deliveryOption}
                onChange={(e) => setDeliveryOption(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option>Standard Shipping</option>
                <option>Express Shipping</option>
                <option>Pickup</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Required By Date</label>
              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-600 text-sm mb-1">Attach Files</label>
            <div className="border border-dashed border-gray-300 rounded-md p-6 text-center text-gray-500 cursor-pointer hover:border-gray-400">
              <p>Click to upload or drag and drop</p>
              <p className="text-xs mt-1">PDF, DOCX, PNG, JPG (Max. 5MB)</p>
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-gray-600 text-sm mb-1">Additional Notes or Specifications</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter any special instructions or details here..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 h-24"
            />
          </div>
        </div>

        {/* Right Section - Summary & Actions */}
        <div className="bg-white p-6 rounded-md shadow-sm flex flex-col justify-between">
          <div className="space-y-2 mb-6">
            <h3 className="font-semibold text-gray-800">RFQ Summary</h3>
            <div className="flex justify-between text-gray-700">
              <span>Target Price:</span>
              <span className="font-medium">${targetPrice.toFixed(2)} / unit</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Quantity:</span>
              <span className="font-medium">{quantity}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Delivery By:</span>
              <span className="font-medium">{deliveryDate || 'Select Date'}</span>
            </div>
            <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between text-gray-800 font-semibold">
              <span>Estimated Total:</span>
              <span>${estimatedTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-2">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium">
              Submit RFQ
            </button>
            <button className="w-full border border-gray-300 hover:bg-gray-100 py-3 rounded-md font-medium">
              Save as Draft
            </button>
            <button className="w-full text-gray-500 py-3 rounded-md font-medium hover:underline">
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Negotiation History */}
      <div className="bg-white p-6 rounded-md shadow-sm mt-6">
        <h3 className="font-semibold text-gray-800 mb-4">Negotiation History</h3>
        <div className="border-l-2 border-blue-600 pl-4">
          <p className="text-gray-700 font-medium">Your Initial Request</p>
          <p className="text-gray-500 text-sm mb-2">Pending Submission</p>
          <p className="text-gray-400 text-sm">Your offer details will appear here once the request is submitted.</p>
        </div>
      </div>
    </div>
  );
}
