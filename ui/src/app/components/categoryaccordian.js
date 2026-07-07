// // components/CategoryAccordion.jsx

// 'use client';
// import React, { useState } from 'react';
// import Header from './header';
// import Hero from './hero';

// const categoriesData = [
//   {
//     title: "SPARE PARTS",
//     content:
//       "Details about various spare parts available, including sensors, cables, small actuators, and other consumables essential for quick maintenance and repairs.",
//     subItems: ["Electrical", "Mechanical", "Hydraulic"],
//   },
//   {
//     title: "MAIN COMPONENTS",
//     content:
//       "Information on critical large-scale components like Gearboxes, Generators, Blades, and Hub Assemblies. These are the core elements defining turbine performance.",
//     subItems: ["Gearboxes", "Generators/Transformers", "Main Shafts"],
//   },
//   {
//     title: "WEARING PARTS",
//     content:
//       "A list of components subject to frequent wear and tear, such as brakes, filters, seals, and bearings. Regular replacement ensures long-term operational efficiency.",
//     subItems: ["Filters", "Lubricants", "Brushes", "Cleansers", "Cooling Liquid"],
//   },
// ];

// const CategoryAccordion = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="max-w-5xl sm:max-w-6xl mx-auto my-8 sm:my-12 p-4 sm:p-8 md:p-12 bg-white shadow-2xl rounded-lg border-2 border-red-200">

//       {/* Logo */}
//       {/* <div className="mb-6 sm:mb-8 flex justify-center">
//         <span className="text-3xl sm:text-5xl font-bold tracking-widest text-gray-900">
//           EELDEN
//         </span>
//       </div> */}
    

//       {/* Intro */}
//       <p className="mb-6 sm:mb-10 text-base sm:text-xl leading-relaxed text-gray-700">
//         <span className="font-bold text-red-600">EELDEN</span> Experts In Spare
//         Parts Distribution For Wind Turbines, Is The Supplier Of Your
//         Performance, Whether Your Components Are:
//       </p>

//       {/* Accordion */}
//       <div className="space-y-4 sm:space-y-6">
//         {categoriesData.map((category, index) => (
//           <AccordionItem
//             key={index}
//             title={category.title}
//             content={category.content}
//             subItems={category.subItems}
//             isOpen={openIndex === index}
//             onClick={() => handleToggle(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const AccordionItem = ({ title, content, subItems, isOpen, onClick }) => {
//   return (
//     <div
//       className="border-b border-gray-300 py-3 sm:py-4 cursor-pointer"
//       onClick={onClick}
//     >
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h3
//           className={`text-lg sm:text-2xl font-semibold tracking-wide sm:tracking-wider ${
//             title.includes("SPARE PARTS") ? "text-red-600" : "text-gray-800"
//           }`}
//         >
//           {title}
//         </h3>

//         <svg
//           className={`w-5 h-5 sm:w-7 sm:h-7 text-red-600 transition-transform duration-300 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 9l-7 7-7-7"
//           ></path>
//         </svg>
//       </div>
   

//       {/* Content Area */}
//       <div
//         className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
//           isOpen ? "max-h-[1200px] pt-3 sm:pt-4" : "max-h-0"
//         }`}
//       >
//         <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">{content}</p>

//         {subItems?.length > 0 && (
//           <ul className="list-disc list-inside space-y-1 sm:space-y-2 pl-4 text-sm sm:text-base text-gray-700">
//             {subItems.map((item, index) => (
//               <li
//                 key={index}
//                 className="hover:text-red-500 transition duration-150"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryAccordion;



// components/CategoryListingV3.jsx

'use client';
import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, Filter, X, Grid, List, TrendingUp, DollarSign, Clock, Package, Zap } from 'lucide-react'; 
// Note: Zap icon added for visual flair

// --- Mock Data (Kept the same for consistency) ---
const categoriesData = [
  { id: 1, title: "SPARE PARTS", subCategory: "Electrical Sensor Module", brand: "Siemens", moq: 1, leadTime: "3-5 Days", price: 150.00, popularity: 50, img: "/img/sensor.jpg" },
  { id: 2, title: "SPARE PARTS", subCategory: "Pitch System Actuator", brand: "Vestas", moq: 5, leadTime: "7-10 Days", price: 300.00, popularity: 30, img: "/img/actuator.jpg" },
  { id: 3, title: "MAIN COMPONENTS", subCategory: "4MW Gearbox Assembly", brand: "GE", moq: 1, leadTime: "30+ Days", price: 15000.00, popularity: 10, img: "/img/gearbox.jpg" },
  { id: 4, title: "WEARING PARTS", subCategory: "Hydraulic Filter Cartridge", brand: "Siemens", moq: 10, leadTime: "3-5 Days", price: 50.00, popularity: 80, img: "/img/filter.jpg" },
  { id: 5, title: "WEARING PARTS", subCategory: "Synthetic Gear Oil (20L)", brand: "Vestas", moq: 20, leadTime: "7-10 Days", price: 25.00, popularity: 65, img: "/img/oil.jpg" },
  { id: 6, title: "MAIN COMPONENTS", subCategory: "4kV Transformer Unit", brand: "GE", moq: 1, leadTime: "30+ Days", price: 45000.00, popularity: 5, img: "/img/transformer.jpg" },
];

const brands = [...new Set(categoriesData.map(item => item.brand))];
const leadTimes = [...new Set(categoriesData.map(item => item.leadTime))].sort();

// --- Main Component ---
const CategoryListingV3 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [moqFilter, setMoqFilter] = useState(0);
  const [leadTimeFilter, setLeadTimeFilter] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showPriceTiers, setShowPriceTiers] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false); 

  // --- Filtering & Sorting Logic (using useMemo for performance) ---
  const filteredProducts = useMemo(() => {
    let list = categoriesData.filter(product => {
      // 1. Search
      const searchMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.subCategory.toLowerCase().includes(searchTerm.toLowerCase());
      // 2. Brand Filter
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      // 3. MOQ Filter
      const moqMatch = product.moq >= moqFilter;
      // 4. Lead Time Filter
      const leadTimeMatch = !leadTimeFilter || product.leadTime === leadTimeFilter;

      return searchMatch && brandMatch && moqMatch && leadTimeMatch;
    });

    // 5. Sorting
    return list.sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      if (sortBy === 'popularity') return b.popularity - a.popularity;
      return 0;
    });
  }, [searchTerm, selectedBrands, moqFilter, leadTimeFilter, sortBy]);

  // --- Handlers ---
  const handleToggleFilter = () => setIsFilterOpen(prev => !prev);
  
  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleClearAllFilters = () => {
    setSearchTerm('');
    setSelectedBrands([]);
    setMoqFilter(0);
    setLeadTimeFilter('');
  }

  const handleProductSelect = (id) => {
    setSelectedProducts(prev => 
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProducts(filteredProducts.map(p => p.id));
    } else {
      setSelectedProducts([]);
    }
  }
  
  const activeFilterCount = selectedBrands.length + (moqFilter > 0 ? 1 : 0) + (leadTimeFilter ? 1 : 0) + (searchTerm ? 1 : 0);

  // --- Component Rendering ---

  return (
    <div className="max-w-7xl mx-auto my-12 p-4 bg-[#AEEBE7] shadow-2xl rounded-xl">
      
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2 border-b pb-2">
        <Package className="w-8 h-8 inline mr-2 text-[#647ca1]"/> Industrial Components Catalog
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        High-reliability parts with transparent pricing and global logistics.
      </p>

      {/* Mobile Filter Button */}
      <button 
        onClick={handleToggleFilter} 
        className="lg:hidden flex items-center justify-center w-full p-3 mb-4 text-white bg-[#647ca1] rounded-lg hove r:bg-teal-700 transition"
      >
        <Filter className="w-5 h-5 mr-2" />
        {activeFilterCount > 0 ? `View Filters (${activeFilterCount})` : 'Show Filters'}
        <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* --- Catalog Layout: Filters (Left) & Products (Right) --- */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* === Left: Filters / Facets (Sticky & Collapsible) === */}
        <div className={`w-full lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="p-6 border border-gray-200 rounded-xl bg-gray-50 lg:sticky lg:top-8 h-fit shadow-inner">
            
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <Filter className="w-5 h-5 mr-2 text-[#647ca1]"/> Filter Options
              </h2>
              <button 
                onClick={handleClearAllFilters}
                className="text-sm text-teal-500 hover:text-[#647ca1] disabled:text-gray-400"
                disabled={activeFilterCount === 0}
              >
                Clear All
              </button>
            </div>


            {/* 1. Search */}
            <div className="mb-6">
              <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">Search Catalog</label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="e.g., sensor, gearbox"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2.5 pl-10 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* 2. Brand Facet */}
            <FilterSection title="Manufacturer Brand" icon={List}>
              {brands.map(brand => (
                <CheckboxItem
                  key={brand}
                  id={`brand-${brand}`}
                  label={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  color="teal"
                />
              ))}
            </FilterSection>

            {/* 3. MOQ Facet */}
            <FilterSection title="Minimum Order Quantity (MOQ)" icon={DollarSign}>
              <select
                value={moqFilter}
                onChange={(e) => setMoqFilter(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-teal-500 focus:border-teal-500"
              >
                <option value={0}>Any MOQ</option>
                <option value={1}>MOQ 1+</option>
                <option value={5}>MOQ 5+</option>
                <option value={10}>MOQ 10+</option>
              </select>
            </FilterSection>

            {/* 4. Lead Time Facet */}
            <FilterSection title="Lead Time" icon={Clock}>
              {leadTimes.map(time => (
                <RadioItem
                  key={time}
                  id={`time-${time}`}
                  label={time}
                  checked={leadTimeFilter === time}
                  onChange={() => setLeadTimeFilter(time)}
                  color="teal"
                />
              ))}
            </FilterSection>
             {/* Note: The close button for mobile is implicitly handled by the FilterSection/layout logic */}
             {isFilterOpen && (
                <button
                    onClick={handleToggleFilter}
                    className="mt-6 w-full p-3 text-sm font-semibold text-white bg-[#647ca1] rounded-lg lg:hidden"
                >
                    Apply Filters
                </button>
            )}
          </div>
        </div>

        {/* === Right: Active Filters, Sort & Product Listing === */}
        <div className="w-full lg:w-3/4">
          
          {/* Active Filters Display (Pill/Tags) */}
          <ActiveFiltersDisplay 
            selectedBrands={selectedBrands}
            moqFilter={moqFilter}
            leadTimeFilter={leadTimeFilter}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setSelectedBrands={setSelectedBrands}
            setMoqFilter={setMoqFilter}
            setLeadTimeFilter={setLeadTimeFilter}
          />


          {/* Top Bar: Sort, View Tiers, Results Count */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 p-3 bg-gray-100 rounded-lg border border-gray-200">
            
            {/* Sort */}
            <div className="flex items-center space-x-2 mb-3 sm:mb-0">
              <label htmlFor="sort" className="text-sm font-medium text-gray-700">Sort By:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-1.5 border border-gray-300 rounded-lg text-sm bg-white focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="popularity">⭐ Popularity</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>
            
            {/* Controls */}
            {/* <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 font-medium">
                  **{filteredProducts.length}** Components Found
                </span>

                <button
                    onClick={() => setShowPriceTiers(prev => !prev)}
                    className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition duration-150 border ${
                        showPriceTiers 
                            ? 'bg-teal-600 text-white border-teal-600 shadow-md' 
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                >
                    <DollarSign className="w-4 h-4 inline mr-1" />
                    {showPriceTiers ? 'Hide Volume Tiers' : 'View Volume Tiers'}
                </button>
            </div> */}
          </div>

          {/* Bulk Add Action Bar (Sticky) */}
          <BulkActionBar 
            filteredProducts={filteredProducts}
            selectedProducts={selectedProducts}
            handleSelectAll={handleSelectAll}
          />

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isSelected={selectedProducts.includes(product.id)}
                onSelect={handleProductSelect}
                showPriceTiers={showPriceTiers}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
              <div className="text-center p-12 mt-6 text-gray-500 border-2 border-dashed border-gray-300 rounded-xl bg-white">
                <p className="text-2xl font-bold">No Components Found</p>
                <p className="text-base mt-2">Try simplifying your search or clearing some filters.</p>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Sub Components ---

// Checkbox Item for Filter Section
const CheckboxItem = ({ id, label, checked, onChange, color = 'red' }) => (
  <div className="flex items-center mb-2">
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={`h-4 w-4 text-${color}-600 border-gray-300 rounded focus:ring-${color}-500`}
    />
    <label htmlFor={id} className="ml-2 text-sm text-gray-700 cursor-pointer hover:text-${color}-600">{label}</label>
  </div>
);

// Radio Item for Filter Section
const RadioItem = ({ id, label, checked, onChange, color = 'red' }) => (
    <div className="flex items-center mb-2">
      <input
        id={id}
        type="radio"
        name="filter-group"
        checked={checked}
        onChange={onChange}
        className={`h-4 w-4 text-${color}-600 border-gray-300 focus:ring-${color}-500`}
      />
      <label htmlFor={id} className="ml-2 text-sm text-gray-700 cursor-pointer hover:text-${color}-600">{label}</label>
    </div>
);

// Filter Section Wrapper
const FilterSection = ({ title, icon: Icon, children }) => (
  <div className="mb-6 pb-4 border-b border-gray-200">
    <h3 className="text-md font-semibold text-gray-800 mb-3 flex items-center">
      <Icon className="w-4 h-4 mr-2 text-[#647ca1]" /> {title}
    </h3>
    {children}
  </div>
);

// Product Card
const ProductCard = ({ product, isSelected, onSelect, showPriceTiers }) => {
  const tiers = [
    { qty: '1-9 Units', price: product.price },
    { qty: '10-49 Units', price: product.price * 0.95 },
    { qty: '50+ Units', price: product.price * 0.90 },
  ];

  return (
    <div 
      className={`border rounded-xl shadow-lg transition duration-300 overflow-hidden flex flex-col ${
        isSelected ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-300' : 'border-gray-200 bg-white hover:shadow-xl'
      }`}
    >
      <div className="relative p-5 flex-grow">
        {/* Placeholder Image */}
        <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-200">
          <Zap className="w-10 h-10 text-gray-500" /> {/* Changed icon for a more industrial feel */}
        </div>

        {/* Checkbox for Bulk Add */}
        <div className="absolute top-2 right-2">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(product.id)}
            onClick={(e) => e.stopPropagation()}
            className="h-5 w-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500 bg-white"
          />
        </div>

        {/* Content */}
        <p className="text-xs font-medium text-gray-500 mb-1">{product.title}</p>
        <h3 className="text-xl font-bold text-gray-900 leading-snug hover:text-teal-600 transition cursor-pointer mb-2">
          {product.subCategory}
        </h3>
        
        <div className="flex justify-between items-center text-sm mb-3 pt-2 border-t border-gray-100">
          <span className="px-3 py-1 bg-[#647ca1] text-[#ffffff] rounded-full font-semibold border border-teal-200">{product.brand}</span>
          <span className="text-gray-600 font-medium text-sm">MOQ: **{product.moq}**</span>
        </div>

        <div className="flex justify-between items-baseline pt-2">
            <div className="text-3xl font-extrabold text-[#647ca1]">
                ${product.price.toFixed(2)}
            </div>
            <div className="text-sm text-gray-600 flex items-center">
                <Clock className="w-4 h-4 mr-1 text-[#647ca1]" />
                {product.leadTime}
            </div>
        </div>
      </div>

      {/* Price Tiers (Footer) */}
      {showPriceTiers && (
          <div className="p-4 bg-teal-50 border-t border-teal-100">
              <p className="text-xs font-semibold text-teal-800 mb-2 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" /> Volume Pricing Available
              </p>
              <div className="grid grid-cols-3 text-center text-xs gap-2">
                  {tiers.map((tier, index) => (
                      <div key={index} className="border border-teal-200 p-1.5 rounded-md bg-white shadow-sm">
                          <span className="font-bold block text-teal-600">${tier.price.toFixed(2)}</span>
                          <span className="text-gray-500">{tier.qty}</span>
                      </div>
                  ))}
              </div>
          </div>
      )}

       {/* Action Button */}
      <button 
        className="w-full py-3 bg-[#647ca1] text-white font-bold tracking-wide hover:bg-teal-700 transition duration-150 mt-auto"
        onClick={(e) => {e.stopPropagation(); alert(`Added 1 x ${product.subCategory} to Quote.`);}}
      >
        Add to Quote Request
      </button>

    </div>
  );
};

// Bulk Add Action Bar Component
const BulkActionBar = ({ filteredProducts, selectedProducts, handleSelectAll }) => (
    <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-[#647ca1] border-2 border-[#647ca1] rounded-lg shadow-2xl text-white">
      <div className="flex items-center space-x-4">
          <input
              type="checkbox"
              checked={selectedProducts.length > 0 && selectedProducts.length === filteredProducts.length}
              onChange={handleSelectAll}
              className="h-5 w-5 text-white bg-[#647ca1] border-white rounded focus:ring-[#647ca1]"
          />
          <span className="text-lg font-bold">
              {selectedProducts.length} / {filteredProducts.length} Selected
          </span>
      </div>
      <button 
          disabled={selectedProducts.length === 0}
          className={`px-6 py-2 text-sm font-bold uppercase rounded-lg transition duration-150 shadow-md ${
              selectedProducts.length > 0
                  ? 'bg-[#647ca1] text-white'
                  : 'bg-[#647ca1] text-white cursor-not-allowed'
          }`}
          onClick={() => alert(`Bulk added ${selectedProducts.length} items to Quote.`)}
      >
          Bulk Add to Quote ({selectedProducts.length})
      </button>
    </div>
);

// Active Filters Display Component
const ActiveFiltersDisplay = ({ selectedBrands, moqFilter, leadTimeFilter, searchTerm, setSearchTerm, setSelectedBrands, setMoqFilter, setLeadTimeFilter }) => {
    const filters = [];

    // Search Term
    if (searchTerm) {
        filters.push({ label: `Search: "${searchTerm}"`, onClear: () => setSearchTerm('') });
    }

    // Brands
    selectedBrands.forEach(brand => {
        filters.push({ 
            label: `Brand: ${brand}`, 
            onClear: () => setSelectedBrands(prev => prev.filter(b => b !== brand)) 
        });
    });

    // MOQ
    if (moqFilter > 0) {
        filters.push({ label: `MOQ $\\ge$ ${moqFilter}`, onClear: () => setMoqFilter(0) });
    }

    // Lead Time
    if (leadTimeFilter) {
        filters.push({ label: `Lead Time: ${leadTimeFilter}`, onClear: () => setLeadTimeFilter('') });
    }

    if (filters.length === 0) return null;

    return (
        <div className="mb-4 flex flex-wrap items-center gap-2 p-3 bg-white border border-teal-200 rounded-lg shadow-sm">
            <span className="text-sm font-semibold text-gray-700 mr-1">Active Filters:</span>
            {filters.map((filter, index) => (
                <button
                    key={index}
                    onClick={filter.onClear}
                    className="flex items-center px-3 py-1 text-xs font-medium bg-[#647ca1] text-[#ffffff] rounded-full transition hover:bg-teal-200"
                >
                    {filter.label}
                    <X className="w-3 h-3 ml-1.5" />
                </button>
            ))}
        </div>
    );
};

export default CategoryListingV3;