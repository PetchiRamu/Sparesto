// src/components/QuickBulkOrder.js
'use client';

import { useState } from 'react';
import { Trash2 } from 'lucide-react';

const MOCK_PRODUCTS = {
  'SKU-12345': { name: 'Industrial Widget A', price: 12.5 },
  'SKU-67890': { name: 'Industrial Widget B', price: 25.0 },
  // Add more SKUs here for testing
};

export default function QuickBulkOrder() {
  const [rows, setRows] = useState([
    { sku: '', name: '', quantity: '', price: '', error: false },
  ]);

  const handleSkuChange = (index, value) => {
    const updatedRows = [...rows];
    const product = MOCK_PRODUCTS[value];
    if (product) {
      updatedRows[index] = {
        sku: value,
        name: product.name,
        quantity: '',
        price: product.price,
        error: false,
      };
    } else {
      updatedRows[index] = {
        sku: value,
        name: '',
        quantity: '',
        price: '',
        error: value !== '',
      };
    }
    setRows(updatedRows);
  };

  const handleQuantityChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].quantity = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([...rows, { sku: '', name: '', quantity: '', price: '', error: false }]);
  };

  const deleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const clearAll = () => setRows([{ sku: '', name: '', quantity: '', price: '', error: false }]);

  const subtotal = rows.reduce((sum, row) => {
    const qty = parseInt(row.quantity || 0, 10);
    return row.price && !row.error ? sum + qty * row.price : sum;
  }, 0);

  const gst = subtotal * 0.1;
  const total = subtotal + gst;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-2">Quick/Bulk Order Upload</h1>
      <p className="text-gray-500 mb-6">
        Enter SKUs and quantities below or upload a file to quickly build your order.
      </p>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex border-b mb-4 text-gray-700 font-medium">
          <div className="w-12 p-2">Line</div>
          <div className="flex-1 p-2">SKU/Product Code</div>
          <div className="flex-1 p-2">Product Name</div>
          <div className="w-32 p-2">Quantity</div>
          <div className="w-32 p-2">Unit Price</div>
          <div className="w-12 p-2"></div>
        </div>

        {rows.map((row, index) => (
          <div key={index} className="flex items-center border-b py-2">
            <div className="w-12 p-2">{index + 1}</div>
            <div className="flex-1 p-2">
              <input
                type="text"
                value={row.sku}
                onChange={(e) => handleSkuChange(index, e.target.value)}
                className={`w-full border rounded px-2 py-1 ${
                  row.error ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter SKU"
              />
              {row.error && (
                <p className="text-red-500 text-sm mt-1">Invalid SKU or out of stock.</p>
              )}
            </div>
            <div className="flex-1 p-2">{row.name || '--'}</div>
            <div className="w-32 p-2">
              <input
                type="number"
                value={row.quantity}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
                className="w-full border border-gray-300 rounded px-2 py-1"
                placeholder="Qty"
              />
            </div>
            <div className="w-32 p-2">{row.price ? `$${row.price.toFixed(2)}` : '--'}</div>
            <div className="w-12 p-2 text-center">
              <button onClick={() => deleteRow(index)}>
                <Trash2 className="w-5 h-5 text-gray-500 hover:text-red-500" />
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={addRow}
          className="mt-4 text-blue-600 font-medium hover:underline"
        >
          + Add Row
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-4 w-full md:w-1/3">
        <h2 className="text-lg font-semibold mb-4">Order Estimate</h2>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">GST (10%)</span>
          <span>${gst.toFixed(2)}</span>
        </div>
        <div className="border-t mt-2 pt-2 flex justify-between font-bold">
          <span>Estimated Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <p className="text-gray-500 text-sm mb-4">GST Inclusive</p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mb-2">
          Add to Cart
        </button>
        <button
          onClick={clearAll}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
