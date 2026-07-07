import React from 'react';
import BuyerSidebar from '../components/buyersidebar';

// --- MOCK DATA FOR DEMONSTRATION ---
const orderData = {
  orderId: 'ORD-2023-93721',
  datePlaced: '2023-11-20',
  customerName: 'Ayesha Khan',
  status: 'Shipped', // Current status (Placed, Processing, Shipped, Delivered)
  eta: 'Nov 27, 2023',
  trackingNumber: 'AZ389201L',
  products: [
    {
      id: 1,
      name: 'Ergonomic Office Chair',
      qty: 1,
      price: 249.99,
      image: '/chair.jpg', // Placeholder image path
    },
    {
      id: 2,
      name: 'Wireless Mechanical Keyboard',
      qty: 2,
      price: 89.50,
      image: '/keyboard.jpg', // Placeholder image path
    },
  ],
  totals: {
    subtotal: 428.99,
    shipping: 15.00,
    tax: 34.32,
    total: 478.31,
  },
  billingAddress: '456 Tech Park,\nSilicon Valley, CA 94024, USA',
  shippingAddress: '456 Tech Park,\nSilicon Valley, CA 94024, USA',
};

// --- COMPONENTS (Included in the same file) ---

// 1. Sidebar Component
const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: 'Dashboard Icon' },
    { name: 'Orders', icon: 'Orders Icon', active: true },
    { name: 'Products', icon: 'Products Icon' },
    { name: 'Customers', icon: 'Customers Icon' },
    { name: 'Reports', icon: 'Reports Icon' },
  ];
  return (
    // Responsive: Hidden on mobile (sm:hidden), visible and fixed on large screens (lg:block)
    <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform -translate-x-full lg:relative lg:translate-x-0 transition duration-200 ease-in-out hidden lg:flex lg:flex-col">
      <div className="text-xl font-bold px-4 text-indigo-400">Next Admin</div>
      <nav>
        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`block py-2.5 px-4 rounded transition duration-200 ${
              item.active
                ? 'bg-gray-700 text-indigo-300'
                : 'hover:bg-gray-700 hover:text-indigo-300'
            }`}
          >
            <span className="mr-2">{`[${item.icon}]`}</span>
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  );
};

// 2. Order Tracking Component (Progress Stepper)
const OrderTracker = ({ status }) => {
  const steps = [
    { name: 'Order Placed', statusKey: 'Placed' },
    { name: 'Processing', statusKey: 'Processing' },
    { name: 'Shipped', statusKey: 'Shipped' },
    { name: 'Delivered', statusKey: 'Delivered' },
  ];

  const currentStepIndex = steps.findIndex(step => step.statusKey === status);
  const activeSteps = steps.slice(0, currentStepIndex + 1);
  const progressPercent = currentStepIndex >= 0 ? ((currentStepIndex / (steps.length - 1)) * 100) : 0; 
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Status: {status}</h3>
      
      {/* Horizontal Progress Bar/Stepper for Desktop (md and up) */}
      <div className="hidden md:flex justify-between items-start relative pt-2">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 mx-10">
          <div 
            className="h-1 bg-indigo-600 transition-all duration-500 ease-out" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        
        {steps.map((step, index) => {
          const isActive = index <= currentStepIndex;
          return (
            <div key={step.name} className="flex flex-col items-center z-10 w-1/4">
              <div
                className={`w-4 h-4 rounded-full transition duration-300 ${
                  isActive ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              ></div>
              <p className={`text-center mt-2 text-sm ${isActive ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                {step.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* Vertical Timeline for Mobile (Simplified) */}
      <div className="md:hidden space-y-4">
        {steps.map((step, index) => {
             const isActive = index <= currentStepIndex;
             return (
                <div key={step.name} className="flex items-start">
                  <div className={`w-3 h-3 rounded-full mt-1.5 mr-3 ${isActive ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
                  <p className={`text-base ${isActive ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                    {step.name}
                  </p>
                </div>
             );
        })}
      </div>
    </div>
  );
};

// 3. Information Card Component
const InfoCard = ({ title, value, icon, className = "" }) => (
  <div className={`p-5 bg-white rounded-lg shadow-md ${className}`}>
    <div className="flex justify-between items-start">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <div className="text-indigo-500 text-xl">{`[${icon}]`}</div>
    </div>
    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
  </div>
);

// 4. Address Block Component
const AddressBlock = ({ title, address, icon }) => (
  <div className="p-5 bg-white rounded-lg shadow-md h-full">
    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
      <span className="mr-2 text-indigo-500">{`[${icon}]`}</span>{title}
    </h4>
    {/* whitespace-pre-line preserves line breaks from the mock data */}
    <p className="text-gray-600 whitespace-pre-line">{address}</p>
  </div>
);

// 5. Product Table Component
const ProductTable = ({ products }) => (
  <div className="p-6 bg-white rounded-lg shadow-md overflow-x-auto">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {products.map((product) => (
          <tr key={product.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                {/* Image Placeholder */}
                <div className="h-10 w-10 flex-shrink-0 rounded-full mr-4 bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                    <span className="hidden sm:inline">IMG</span>
                </div>
                <div className="text-sm font-medium text-gray-900">{product.name}</div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.qty}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">
              ${(product.price * product.qty).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// 6. Totals/Billing Component
const TotalsSummary = ({ totals }) => {
  const lineItemClass = "flex justify-between py-2 border-b border-gray-100";
  const labelClass = "text-gray-500 text-sm";
  const valueClass = "text-gray-800 font-medium text-sm";
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-md h-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment & Totals</h3>
      <div className="space-y-2">
        <div className={lineItemClass}>
          <span className={labelClass}>Subtotal</span>
          <span className={valueClass}>${totals.subtotal.toFixed(2)}</span>
        </div>
        <div className={lineItemClass}>
          <span className={labelClass}>Shipping</span>
          <span className={valueClass}>${totals.shipping.toFixed(2)}</span>
        </div>
        <div className={lineItemClass}>
          <span className={labelClass}>Tax (8%)</span>
          <span className={valueClass}>${totals.tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-4">
          <span className="text-lg font-bold text-gray-900">Order Total</span>
          <span className="text-lg font-bold text-indigo-600">${totals.total.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm font-semibold text-gray-800">Payment Method</p>
        <p className="text-sm text-gray-600">VISA ending in 4242</p>
      </div>
    </div>
  );
};


// --- MAIN PAGE COMPONENT ---
const OrderTrackingPage = () => {
  const { orderId, datePlaced, customerName, trackingNumber, status, eta, products, totals, billingAddress, shippingAddress } = orderData;
  
  return (
    // Ensure the whole page takes full height and uses a flex layout
    <div className="flex min-h-screen bg-gray-100">
      
    <BuyerSidebar/>

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col overflow-x-hidden">
        
        {/* Top Header/Navbar - Sticky to stay visible when scrolling */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-2xl font-semibold text-gray-900">Order Details</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">{`[Bell Icon]`}</button>
            <div className="h-8 w-8 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-medium">AK</div>
          </div>
        </header>

        {/* Page Content Container */}
        <main className="p-4 sm:p-6 lg:p-8 flex-1">
          
          {/* Order Header Block (Order ID and Actions) */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-3 sm:space-y-0">
            <div className="flex items-center">
                <button className="text-indigo-600 hover:text-indigo-800 mr-2">{`[Arrow Left Icon]`}</button>
                <h2 className="text-xl font-bold text-gray-900">Order #{orderId}</h2>
            </div>
            <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">View Invoice</button>
                <button className="px-3 py-1 text-sm rounded-md border border-red-500 bg-red-500 text-white hover:bg-red-600">Cancel Order</button>
            </div>
          </div>

          {/* 3. Order Tracker Component */}
          <OrderTracker status={status} />

          {/* 4. Top Cards and Main Content Grid */}
          <div className="space-y-6">

            {/* Top Info Cards: Responsive Grid (1-column -> 2-columns -> 4-columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <InfoCard title="Date Placed" value={datePlaced} icon="Calendar Icon" />
              <InfoCard title="Customer Name" value={customerName} icon="User Icon" />
              <InfoCard title="Tracking ID" value={trackingNumber} icon="Truck Icon" />
              <InfoCard title="Estimated Delivery" value={eta} icon="Clock Icon" className="bg-indigo-50 border-l-4 border-indigo-500" />
            </div>

            {/* Main Details Grid: Product Table on the left, Address/Totals on the right */}
            {/* Responsive: 1 column stack on mobile, 3 columns on large screens (2/3 and 1/3 split) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Column 1: Product Table (2/3 width on desktop) */}
                <div className="lg:col-span-2 space-y-6">
                    <ProductTable products={products} />
                </div>
                
                {/* Column 2: Address and Totals (1/3 width on desktop) */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Address Blocks: Responsive (2 columns on tablet, 1 column on desktop to match image layout) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                    <AddressBlock title="Billing Address" address={billingAddress} icon="Home Icon" />
                    <AddressBlock title="Shipping Address" address={shippingAddress} icon="Map Pin Icon" />
                  </div>
                  
                  {/* Totals Summary */}
                  <TotalsSummary totals={totals} />
                </div>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Next Admin Dashboard
          </div>

        </main>
      </div>
    </div>
  );
};

export default OrderTrackingPage;