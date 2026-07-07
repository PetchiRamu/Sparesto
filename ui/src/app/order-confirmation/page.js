// This component simulates the order confirmation page
// and uses dummy data for demonstration.

import Link from 'next/link';

// --- Dummy Data (Replace with real data fetching in a production app) ---
const orderData = {
  orderId: '76453857',
  date: '14 May 2024',
  shippingAddress: '123 E-Commerce Blvd, Suite 400, New York, NY 10001',
  paymentMethod: 'Visa ending in 4242',
  shippingMethod: 'Express Shipping (3-5 days)',
  items: [
    { id: 1, name: 'Sleek Laptop Pro', quantity: 1, price: 1299.00, image: 'laptop.jpg' },
    { id: 2, name: 'Wireless Ergonomic Mouse', quantity: 2, price: 35.00, image: 'mouse.jpg' },
  ],
  subtotal: 1369.00,
  shippingCost: 15.00,
  tax: 82.14,
  total: 1466.14,
};

// --- Reusable Item Component ---
const OrderItem = ({ item }) => (
  <div className="flex items-start py-4 border-b border-gray-100 last:border-b-0">
    {/*  */}
    {/* Product Image Placeholder */}
    <div className="flex-shrink-0 h-20 w-20 border border-gray-200 rounded-md overflow-hidden bg-gray-100">
      <img
        src={`/${item.image}`} // Placeholder path
        alt={item.name}
        className="h-full w-full object-cover object-center"
      />
    </div>

    <div className="ml-4 flex flex-col justify-between flex-grow">
      <div>
        <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
        <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
      </div>
      <p className="text-sm font-semibold text-gray-900">${item.price.toFixed(2)}</p>
    </div>
  </div>
);

// --- Main Page Component ---
export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* 1. Header: Confirmation Message */}
        <div className="text-center py-10 bg-white shadow-lg rounded-lg border-t-4 border-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Thank you for your order!
          </h1>
          <p className="mt-2 text-base text-gray-500">
            Your order **#{orderData.orderId}** has been confirmed. A receipt has been sent to your email.
          </p>
        </div>

        {/* 2. Main Content Grid (Responsive Layout) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT/MAIN COLUMN (Takes 2/3 on large screens) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* A. Order Details Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b pb-4 mb-4">
                Order Details
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                
                {/* Shipping Address */}
                <div>
                  <dt className="font-medium text-gray-900">Shipping Address</dt>
                  <dd className="mt-1 text-gray-500">{orderData.shippingAddress}</dd>
                </div>
                
                {/* Shipping Method */}
                <div>
                  <dt className="font-medium text-gray-900">Shipping Method</dt>
                  <dd className="mt-1 text-gray-500">{orderData.shippingMethod}</dd>
                </div>

                {/* Order Date */}
                <div>
                  <dt className="font-medium text-gray-900">Order Date</dt>
                  <dd className="mt-1 text-gray-500">{orderData.date}</dd>
                </div>

                {/* Payment Method */}
                <div>
                  <dt className="font-medium text-gray-900">Payment Method</dt>
                  <dd className="mt-1 text-gray-500">{orderData.paymentMethod}</dd>
                </div>
              </dl>
            </div>
            
            {/* B. Items Ordered Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b pb-4 mb-4">
                Items Ordered ({orderData.items.length})
              </h2>
              <div className="divide-y divide-gray-200">
                {orderData.items.map((item) => (
                  <OrderItem key={item.id} item={item} />
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT/SIDEBAR COLUMN (Takes 1/3 on large screens) */}
          <div className="lg:col-span-1 space-y-8">

            {/* C. Order Summary / Total Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 sticky lg:top-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b pb-4 mb-4">
                Order Summary
              </h2>
              <dl className="space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <dt>Subtotal</dt>
                  <dd>${orderData.subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <dt>Shipping</dt>
                  <dd>${orderData.shippingCost.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <dt>Tax</dt>
                  <dd>${orderData.tax.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-200">
                  <dt className="text-lg font-bold text-gray-900">Order Total</dt>
                  <dd className="text-lg font-bold text-gray-900">${orderData.total.toFixed(2)}</dd>
                </div>
              </dl>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <Link href="/track-order" legacyBehavior>
                  <a className="block w-full text-center py-3 text-white bg-indigo-600 rounded-md font-medium hover:bg-indigo-700 transition duration-150 shadow-md">
                    Track your order
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="block w-full text-center py-3 text-indigo-600 border border-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition duration-150">
                    Continue Shopping
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}