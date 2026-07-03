import Header from "../components/Header";
import Sidebar from "../components/sidebar";

export default function AddEnquiry() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="p-6">

          {/* Breadcrumb */}
          <p className="text-sm text-gray-400 mb-4">
            Dashboard &gt; Enquiry &gt; Add Enquiry
          </p>

          {/* Heading */}
          <div className="mb-6">

            <h1 className="text-4xl font-bold text-gray-800">
             Edit Quotation
            </h1>

            <p className="text-gray-500 mt-2">
              Fill in the details to create a new enquiry
            </p>

          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              E001
            </h2>

            {/* Empty Form */}
            <div className="grid grid-cols-3 gap-6">

                {/* Date Time */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Date Time
  </label>

  <input
    type="datetime-local"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
</div>

{/* Customer ID */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Customer ID
  </label>

  <input
    type="text"
    placeholder="Enter Customer ID"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
</div>

{/* Company Name */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Company Name
  </label>

  <input
    type="text"
    placeholder="Enter Company Name"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
</div>

{/* GST Number */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    GST Number
  </label>

  <input
    type="text"
    placeholder="Enter GST Number"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
</div>

{/* Customer Name */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Customer Name
  </label>

  <input
    type="text"
    placeholder="Enter Customer Name"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
</div>

{/* Email ID */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Email ID
  </label>

  <input
    type="email"
    placeholder="Enter Email ID"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
</div>
{/* Address */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Address
  </label>

  <input
    type="text"
    placeholder="Enter Company Address"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
</div>

{/* Product Name */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Product Name
  </label>

  <input
    type="text"
    placeholder="Enter Product Name"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
</div>

{/* Quantity Requested */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Quantity Requested
  </label>

  <input
    type="number"
    placeholder="10"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
  />
</div>

{/* Status */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Status
  </label>

  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500">
    <option>All Status</option>
    <option>New</option>
    <option>Follow-up</option>
    <option>Quoted</option>
  </select>
</div>

{/* Retail Type */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Retail Type
  </label>

  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500">
    <option>All</option>
    <option>Retail</option>
    <option>Wholesale</option>
  </select>
</div>

{/* Buttons */}
<div className="flex justify-end gap-4 mt-30">

  <button
    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg shadow"
  >
    Save
  </button>

  <button
    className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-lg"
  >
    Reset
  </button>

</div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}