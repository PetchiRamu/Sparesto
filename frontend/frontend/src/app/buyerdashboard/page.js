// app/page.js
import { ShoppingCart } from 'lucide-react'; // Needed for the "Create New Order" button

// --- 2. Dashboard Content Component Definitions ---
// Import all necessary icons
import { Clock, CheckSquare, CreditCard } from 'lucide-react';
import BuyerSidebar from '../components/buyersidebar';
import BuyerHeader from '../components/buyerheader';

/**
 * Reusable Card Component for the top statistics.
 */
const Card = ({ title, value, linkText, linkHref, icon: Icon, colorClass }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-lg">
    <div className="flex items-start justify-between">
      <h3 className="text-lg font-medium text-gray-500">{title}</h3>
      {Icon && <Icon className={`w-6 h-6 ${colorClass}`} />}
    </div>
    <p className="mt-1 text-3xl font-bold text-gray-900">{value}</p>
    <a href={linkHref} className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
      {linkText}
    </a>
  </div>
);

/**
 * Component for a single row in the Recent Activities table.
 */
const ActivityRow = ({ date, activity, details, user }) => (
    <div className="grid grid-cols-2 sm:grid-cols-4 py-3 px-1 border-b border-gray-100 last:border-b-0 text-sm hover:bg-gray-50 transition-colors">
        <p className="text-gray-500">{date}</p>
        <p className="font-medium text-gray-700 col-span-1">{activity}</p>
        <p className="text-gray-600 truncate hidden sm:block">{details}</p> {/* Hidden on smallest screens */}
        <p className="text-gray-500 hidden sm:block">{user}</p> {/* Hidden on smallest screens */}
    </div>
);

// Data for Recent Activities
const recentActivities = [
    { date: 'Oct 26, 2023', activity: 'Order Placed', details: 'Order #8923-A', user: 'Alex Chen' },
    { date: 'Oct 25, 2023', activity: 'Invoice Paid', details: 'Invoice #INV-0567', user: 'Alex Chen' },
    { date: 'Oct 24, 2023', activity: 'Product Added', details: 'SKU: 12-FGR-8', user: 'Admin' },
    { date: 'Oct 22, 2023', activity: 'User Added', details: 'jane.doe@megacorp.com', user: 'Alex Chen' },
];

/**
 * Component for a single item in the Last Invoices list.
 */
const InvoiceItem = ({ number, amount, date, status }) => {
    const statusClasses = status === 'Due' 
        ? 'bg-amber-100 text-amber-700' 
        : 'bg-green-100 text-green-700';

    return (
        <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
            <div>
                <p className="text-sm font-medium text-gray-700">Invoice {number}</p>
                <p className="text-xs text-gray-500">{date}</p>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-sm font-bold text-gray-800">{amount}</p>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusClasses}`}>
                    {status}
                </span>
            </div>
        </div>
    );
};


// --- 3. Main Page Component ---
export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* Sidebar Component: Hidden on mobile, fixed on desktop (lg:flex) */}
      <BuyerSidebar/>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Header Component: Handles search and user profile */}
        <BuyerHeader/>

        {/* Dashboard Content */}
        <main className="p-4 md:p-6 lg:p-8 flex-1">
          <div className="space-y-8">
            
            {/* Welcome Header and Button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Welcome, Alex!</h2>
              <button className="flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors whitespace-nowrap">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Create New Order
              </button>
            </div>

            {/* Top Cards Section (Responsive Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                title="Pending Approvals"
                value="5"
                linkText="Review Approvals"
                linkHref="#"
                icon={CheckSquare}
                colorClass="text-red-500"
              />
              <Card
                title="Recent Orders"
                value="12"
                linkText="View All Orders"
                linkHref="#"
                icon={Clock}
                colorClass="text-blue-500"
              />
              <Card
                title="Available Credit"
                value="$25,000.00"
                linkText="View Credit History"
                linkHref="#"
                icon={CreditCard}
                colorClass="text-green-500"
              />
            </div>

            {/* Main Bottom Section: Activities and Invoices (Responsive Grid) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Recent Activities Table - Spans 2/3 of the width on large screens */}
              <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h3>
                
                {/* Table Header (Responsive) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 text-sm font-semibold text-gray-500 border-b pb-2 mb-2">
                    <p>Date</p>
                    <p>Activity</p>
                    <p className="hidden sm:block">Details</p>
                    <p className="hidden sm:block">User</p>
                </div>
                
                {/* Activity Rows */}
                <div className="divide-y divide-gray-100">
                  {recentActivities.map((activity, index) => (
                      <ActivityRow key={index} {...activity} />
                  ))}
                </div>
              </div>

              {/* Last Invoices List - Spans 1/3 of the width on large screens */}
              <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Last Invoices</h3>
                
                <InvoiceItem 
                    number="#INV-0571" 
                    amount="$1,250.00" 
                    date="Due: Nov 15, 2023" 
                    status="Due" 
                />
                <InvoiceItem 
                    number="#INV-0570" 
                    amount="$850.50" 
                    date="Paid: Oct 25, 2023" 
                    status="Paid" 
                />
                <InvoiceItem 
                    number="#INV-0569" 
                    amount="$2,400.00" 
                    date="Paid: Oct 18, 2023" 
                    status="Paid" 
                />
                
                <button className="mt-4 w-full py-2 text-blue-600 bg-blue-50 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                  View All Invoices
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}