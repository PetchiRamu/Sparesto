'use client';

import React, { useState } from 'react';

const FilterSection = ({ title, children }) => (
  <div className="py-5 border-b border-gray-100 lg:border-gray-200 last:border-b-0">
    <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">{title}</h3>
    <div className="space-y-3">
      {children}
    </div>
  </div>
);

const CheckboxItem = ({ label, checked, onChange }) => (
  <label className="flex items-center text-base lg:text-sm text-gray-600 hover:text-[#1F7F7A] cursor-pointer group py-1 lg:py-0">
    <input 
      type="checkbox" 
      checked={checked}
      onChange={onChange}
      className="w-5 h-5 lg:w-4 lg:h-4 text-[#1F7F7A] border-gray-300 rounded focus:ring-[#1F7F7A] mr-3 transition" 
    />
    <span className="group-hover:translate-x-1 transition-transform duration-200">{label}</span>
  </label>
);

const RadioItem = ({ label, name, checked, onChange }) => (
  <label className="flex items-center text-base lg:text-sm text-gray-600 hover:text-[#1F7F7A] cursor-pointer group py-1 lg:py-0">
    <input 
      type="radio" 
      name={name} 
      checked={checked}
      onChange={onChange}
      className="w-5 h-5 lg:w-4 lg:h-4 text-[#1F7F7A] border-gray-300 focus:ring-[#1F7F7A] mr-3" 
    />
    <span className="group-hover:translate-x-1 transition-transform duration-200">{label}</span>
  </label>
);

// Shared content with added props for state management
const FilterContent = ({ filters, setFilters, onClear }) => {
  
  const handleCheckboxChange = (section, value) => {
    setFilters(prev => ({
      ...prev,
      [section]: prev[section].includes(value)
        ? prev[section].filter(item => item !== value)
        : [...prev[section], value]
    }));
  };

  const handleRadioChange = (section, value) => {
    setFilters(prev => ({
      ...prev,
      [section]: value
    }));
  };

  return (
    <>
      <FilterSection title="Brand">
        {["GlobalTron", "Innovate Inc.", "Machine Corp", "Stark Industries"].map(brand => (
          <CheckboxItem 
            key={brand} 
            label={brand} 
            checked={filters.brands.includes(brand)}
            onChange={() => handleCheckboxChange('brands', brand)}
          />
        ))}
      </FilterSection>

      <FilterSection title="MOQ">
        <RadioItem 
          label="Under 100" 
          name="moq" 
          checked={filters.moq === "Under 100"}
          onChange={() => handleRadioChange('moq', "Under 100")}
        />
        <RadioItem 
          label="100 - 500" 
          name="moq" 
          checked={filters.moq === "100 - 500"}
          onChange={() => handleRadioChange('moq', "100 - 500")}
        />
        <RadioItem 
          label="500+" 
          name="moq" 
          checked={filters.moq === "500+"}
          onChange={() => handleRadioChange('moq', "500+")}
        />
      </FilterSection>

      <FilterSection title="Lead Time">
        {["1-3 Business Days", "3-5 Business Days", "5+ Business Days"].map(time => (
          <CheckboxItem 
            key={time} 
            label={time} 
            checked={filters.leadTime.includes(time)}
            onChange={() => handleCheckboxChange('leadTime', time)}
          />
        ))}
      </FilterSection>

      <div className="pt-4 flex items-center justify-between lg:block">
        <button 
          onClick={onClear}
          className="text-sm font-bold text-red-500 hover:text-red-600 transition underline lg:no-underline"
        >
          Clear All Filters
        </button>
      </div>
    </>
  );
};

const ProductFilterSidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // Initial state for filters
  const initialFilters = {
    brands: [],
    moq: '',
    leadTime: []
  };

  const [filters, setFilters] = useState(initialFilters);

  const clearFilters = () => setFilters(initialFilters);

  return (
    <>
      {/* --- MOBILE FILTER BUTTON (Floating Bottom) --- */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-xs">
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="w-full bg-[#1F7F7A] text-white py-4 rounded-full shadow-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filter Products { (filters.brands.length > 0 || filters.leadTime.length > 0 || filters.moq) && `(${filters.brands.length + filters.leadTime.length + (filters.moq ? 1 : 0)})`}
        </button>
      </div>

      {/* --- MOBILE SLIDE-UP DRAWER --- */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isDrawerOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsDrawerOpen(false)} 
        />
        
        {/* Drawer Panel */}
        <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[2.5rem] p-8 transition-transform duration-500 ease-out max-h-[85vh] overflow-y-auto ${isDrawerOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-gray-900">Filters</h2>
            <button onClick={() => setIsDrawerOpen(false)} className="bg-gray-100 rounded-full p-2 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <FilterContent filters={filters} setFilters={setFilters} onClear={clearFilters} />
          
          <div className="sticky bottom-0 bg-white pt-4 pb-2 mt-4">
            <button 
              onClick={() => {
                console.log("Applying Filters:", filters); // You can replace this with your actual API call or filtering logic
                setIsDrawerOpen(false);
              }}
              className="w-full py-4 bg-[#1F7F7A] text-white font-bold rounded-2xl shadow-lg active:scale-95 transition-transform"
            >
              See Results
            </button>
          </div>
        </div>
      </div>

      {/* --- DESKTOP SIDEBAR --- */}
      <div className="hidden lg:block bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-black text-gray-900 mb-6 border-b pb-4 tracking-tight">Industrial Filters</h2>
        <FilterContent filters={filters} setFilters={setFilters} onClear={clearFilters} />
      </div>
    </>
  );
};

export default ProductFilterSidebar;