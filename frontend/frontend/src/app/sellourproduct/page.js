import Header from "@/app/components/header";

export default function SellerInformationPage() {
    return (
        <section className="w-full min-h-screen bg-[#f6f8f8]">

            {/* Header */}
            <Header />

            <section className="py-12">

                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid lg:grid-cols-2 gap-8 items-center">

                        {/* Left Image */}
                        <div>
                            <img
                                src="/sellusimg.jpeg"
                                alt="Warehouse"
                                className="w-full h-[520px] rounded-3xl object-cover"
                            />
                        </div>

                        {/* Right Form */}
                        <div className="bg-white rounded-3xl shadow-md p-6">

                            <h2 className="text-2xl font-bold text-slate-800 mb-5">
                                Seller Information
                            </h2>

                            <form className="space-y-3">

                                {/* Contact Name & Business Name */}
                                <div className="grid md:grid-cols-2 gap-4">

                                    <div>
                                        <label className="text-sm font-medium text-slate-700">
                                            Contact Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full mt-1 rounded-lg bg-[#EAF7F5] px-4 py-2.5 outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-slate-700">
                                            Business Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Business Name"
                                            className="w-full mt-1 rounded-lg bg-[#EAF7F5] px-4 py-2.5 outline-none"
                                        />
                                    </div>

                                </div>


                                {/* Address */}
                                <div>

                                    <label className="text-sm font-medium text-slate-700">
                                        Street Address
                                    </label>

                                    <textarea
                                        rows={3}
                                        placeholder="Address"
                                        className="w-full mt-1 rounded-lg bg-[#EAF7F5] px-4 py-2.5 outline-none resize-none"
                                    />

                                </div>


                                {/* City & State */}
                                <div className="grid md:grid-cols-2 gap-4">

                                    <div>

                                        <label className="text-sm font-medium text-slate-700">
                                            City
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="City"
                                            className="w-full mt-1 rounded-lg bg-[#EAF7F5] px-4 py-2.5 outline-none"
                                        />

                                    </div>


                                    <div>

                                        <label className="text-sm font-medium text-slate-700">
                                            State
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="State"
                                            className="w-full mt-1 rounded-lg bg-[#EAF7F5] px-4 py-2.5 outline-none"
                                        />

                                    </div>

                                </div>


                                {/* Postal Code */}
                                <div>

                                    <label className="text-sm font-medium text-slate-700">
                                        Postal Code
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="XXXXXXX"
                                        className="w-full mt-1 rounded-lg bg-[#EAF7F5] px-4 py-2.5 outline-none"
                                    />

                                </div>


                                {/* Phone & Fax */}
                                <div className="grid md:grid-cols-2 gap-4">

                                    <div>

                                        <label className="text-sm font-medium text-slate-700">
                                            Phone
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="+91 xxxxxxxxxx"
                                            className="w-full mt-1 rounded-lg bg-[#EAF7F5] px-4 py-2.5 outline-none"
                                        />

                                    </div>


                                    <div>

                                        <label className="text-sm font-medium text-slate-700">
                                            Fax
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Fax"
                                            className="w-full mt-1 rounded-lg bg-[#EAF7F5] px-4 py-2.5 outline-none"
                                        />

                                    </div>

                                </div>


                                {/* Email & Date */}
                                <div className="grid md:grid-cols-2 gap-4">

                                    <div>

                                        <label className="text-sm font-medium text-slate-700">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="email@address.com"
                                            className="w-full mt-1 rounded-lg bg-[#EAF7F5] px-4 py-2.5 outline-none"
                                        />

                                    </div>


                                    <div>

                                        <label className="text-sm font-medium text-slate-700">
                                            Date
                                        </label>

                                        <input
                                            type="date"
                                            className="w-full mt-1 rounded-lg bg-[#EAF7F5] px-4 py-2.5 outline-none"
                                        />

                                    </div>

                                </div>


                                {/* Button */}
                                <button
                                    className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                                >
                                    Submit →
                                </button>

                            </form>

                        </div>

                    </div>



                    {/* <div className="mt-12">

                        <h2 className="text-2xl font-bold text-slate-800 mb-6">
                            Equipment Details
                        </h2>

                        <div className="overflow-x-auto">

                            <table className="w-full border border-slate-300">

                                <thead>

                                    <tr className="bg-white">

                                        <th className="border border-slate-300 p-3 text-sm font-medium">
                                            Qty
                                        </th>

                                        <th className="border border-slate-300 p-3 text-sm font-medium">
                                            Manufacturer
                                        </th>

                                        <th className="border border-slate-300 p-3 text-sm font-medium">
                                            Part Number
                                        </th>

                                        <th className="border border-slate-300 p-3 text-sm font-medium">
                                            Description
                                        </th>

                                        <th className="border border-slate-300 p-3 text-sm font-medium">
                                            Condition
                                        </th>

                                        <th className="border border-slate-300 p-3 text-sm font-medium">
                                            Est.Value
                                        </th>

                                        <th className="border border-slate-300 p-3 text-sm font-medium">
                                            Type Of Sale
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    {[...Array(10)].map((_, index) => (

                                        <tr key={index}>

                                            <td className="border border-slate-300 h-12"></td>

                                            <td className="border border-slate-300"></td>

                                            <td className="border border-slate-300"></td>

                                            <td className="border border-slate-300"></td>

                                            <td className="border border-slate-300"></td>

                                            <td className="border border-slate-300"></td>

                                            <td className="border border-slate-300"></td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>


                        <div className="flex justify-end mt-6">

                            <button
                                className="bg-teal-700 hover:bg-teal-800 text-white px-24 py-3 rounded-xl font-medium transition"
                            >
                                Submit →
                            </button>

                        </div>

                    </div> */}


                    <div className="grid md:grid-cols-2 gap-6 mt-10">

                        {/* Product Conditions */}
                        <div className="bg-white border border-slate-200 rounded-xl p-6">

                            <h3 className="text-lg font-semibold text-slate-800 mb-4">
                                Product Conditions
                            </h3>

                            <ul className="space-y-3 text-sm text-slate-600">

                                <li>
                                    <span className="font-semibold text-teal-700">• NIB</span>
                                    <span className="ml-3">
                                        Never Used Surplus, Original Packaging
                                    </span>
                                </li>

                                <li>
                                    <span className="font-semibold text-teal-700">• NNB</span>
                                    <span className="ml-3">
                                        Never Used Surplus, No Original Packaging
                                    </span>
                                </li>

                                <li>
                                    <span className="font-semibold text-teal-700">• REM</span>
                                    <span className="ml-3">
                                        Used Surplus, Fully Operational
                                    </span>
                                </li>

                                <li>
                                    <span className="font-semibold text-teal-700">• BROKE</span>
                                    <span className="ml-3">
                                        No Longer Functioning / Needs Repair
                                    </span>
                                </li>

                            </ul>

                        </div>


                        {/* Notes on Terms */}
                        <div className="bg-white border border-slate-200 rounded-xl p-6">

                            <h3 className="text-lg font-semibold text-slate-800 mb-4">
                                Notes on Terms
                            </h3>

                            <ul className="space-y-3 text-sm text-slate-600 list-disc pl-5">

                                <li>Product condition will be verified.</li>

                                <li>Final pricing may vary after inspection.</li>

                                <li>Shipping policies apply.</li>

                            </ul>

                        </div>

                    </div>



                </div>




            </section>

        </section>
    );
}