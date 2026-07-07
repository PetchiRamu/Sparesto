import React from 'react';
import {
  Bell,
  Settings,
  User,
  Search,
  BookOpen,
  Mail,
  MessageCircle,
  ChevronRight,
  CreditCard,
  Users,
  Truck,
  RotateCcw,
} from 'lucide-react';

// --- Mock Data ---
const categories = [
  {
    icon: CreditCard,
    title: "Ordering & Payments",
    description: "Find help with placing orders, invoices, and payment methods.",
  },
  {
    icon: Users,
    title: "Account Management",
    description: "Manage your profile, users, and organization settings.",
  },
  {
    icon: Truck,
    title: "Shipping & Delivery",
    description: "Track shipments, manage addresses, and see delivery options.",
  },
  {
    icon: RotateCcw,
    title: "Returns & Refunds",
    description: "Learn about our return policy and how to initiate a return.",
  },
];

const faqs = [
  "How do I place a bulk order?",
  "Where can I find my invoices?",
  "What is the status of my shipment?",
  "How do I add a new user to my account?",
  "Can I change my delivery address?",
];


// --- Components ---

/**
 * Renders the main navigation bar.
 */
const Navbar = () => (
  <header className="sticky top-0 bg-white shadow-sm z-10 border-b border-gray-200">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <div className="flex items-center space-x-8">
        <h1 className="text-xl font-bold text-blue-700 whitespace-nowrap">
          ERP Customer Portal
        </h1>
        <nav className="hidden md:flex space-x-6 text-sm text-gray-600 font-medium">
          {['Dashboard', 'Orders', 'Products', 'Invoices'].map((item) => (
            <a key={item} href="#" className="hover:text-blue-700 transition duration-150">
              {item}
            </a>
          ))}
          <a href="#" className="text-blue-700 border-b-2 border-blue-700 pb-1">
            Help & Support
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button aria-label="Notifications" className="p-2 text-gray-500 hover:text-blue-700 rounded-full transition duration-150">
          <Bell className="w-5 h-5" />
        </button>
        <button aria-label="Settings" className="p-2 text-gray-500 hover:text-blue-700 rounded-full transition duration-150">
          <Settings className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 ring-2 ring-blue-500">
          <User className="w-4 h-4" />
        </div>
      </div>
    </div>
  </header>
);

/**
 * Renders the hero section with the main search bar and title.
 */
const HeroSearch = () => (
  <div className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
        Help & Support Center
      </h2>
      <p className="text-gray-600 mb-8 text-lg">
        How can we help you today?
      </p>

      {/* Search Input */}
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search for articles, guides, and FAQs"
            className="w-full py-4 pl-12 pr-6 border border-gray-300 rounded-xl shadow-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700 text-base transition duration-150"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex justify-center space-x-8 border-b-2 border-gray-200 text-gray-600 font-medium">
        <button className="py-3 px-4 -mb-[2px] border-b-2 border-blue-600 text-blue-600 transition duration-150 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 hidden sm:block" />
          <span>Knowledge Base</span>
        </button>
        <button className="py-3 px-4 hover:text-blue-600 transition duration-150 flex items-center space-x-2">
          <Mail className="w-5 h-5 hidden sm:block" />
          <span>My Tickets</span>
        </button>
        <button className="py-3 px-4 hover:text-blue-600 transition duration-150 flex items-center space-x-2">
          <MessageCircle className="w-5 h-5 hidden sm:block" />
          <span>Contact Us</span>
        </button>
      </div>
    </div>
  </div>
);

/**
 * Renders a single category card.
 */
const CategoryCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition duration-300 cursor-pointer h-full">
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>
    </div>
  </div>
);

/**
 * Renders the FAQ list card.
 */
const FAQCard = () => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">
      Frequently Asked Questions
    </h3>
    <ul className="space-y-3">
      {faqs.map((question, index) => (
        <li key={index} className="flex items-start text-gray-600 group hover:text-blue-600 transition duration-150 cursor-pointer">
          <ChevronRight className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-gray-400 group-hover:text-blue-600" />
          <span className="text-sm leading-relaxed">{question}</span>
        </li>
      ))}
    </ul>
    <div className="mt-6">
      <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition duration-150 shadow-sm">
        View All FAQs
      </button>
    </div>
  </div>
);

/**
 * Renders the contact section card.
 */
const ContactCard = () => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mt-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      Can't find an answer?
    </h3>
    <p className="text-sm text-gray-600 mb-4">
      Our support team is here to help you.
    </p>
    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-150 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg">
      <MessageCircle className="w-5 h-5" />
      <span>Contact Support</span>
    </button>
  </div>
);


/**
 * Main application component. This will be the default export for the Next.js page.
 */
const HelpAndSupportPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <HeroSearch />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-8">
          <a href="#" className="hover:text-blue-600">Home</a>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">Help & Support</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-12">

          {/* Left Column: Categories */}
          <section className="lg:col-span-2 mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
          </section>

          {/* Right Column: FAQ & Contact (Sidebar) */}
          <aside className="lg:col-span-1">
            <FAQCard />
            <ContactCard />
          </aside>

        </div>
      </main>

      {/* Simple Footer (optional, but good practice) */}
      <footer className="py-4 mt-10 border-t border-gray-200 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ERP Customer Portal. All rights reserved.
      </footer>
    </div>
  );
};

export default HelpAndSupportPage;