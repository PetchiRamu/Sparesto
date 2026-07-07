'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/header';
import ProductCard from '../components/product/ProductCard';
import { fetchProductData } from '../apiservices/apiServices';

const ITEMS_PER_PAGE = 6;

const ServicesPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [oemSearch, setOemSearch] = useState('');
  const [availability, setAvailability] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProductData();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const categories = useMemo(() => {
    const set = new Set(products.map((product) => product.category).filter(Boolean));
    return Array.from(set);
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategories.length && !selectedCategories.includes(product.category)) {
        return false;
      }

      if (oemSearch.trim()) {
        const term = oemSearch.trim().toLowerCase();
        if (!product.oem?.toLowerCase().includes(term) && !product.name?.toLowerCase().includes(term)) {
          return false;
        }
      }

      if (availability === 'instock' && !product.inStock) {
        return false;
      }

      if (minPrice) {
        const minValue = Number(minPrice);
        if (!Number.isNaN(minValue) && product.price < minValue) {
          return false;
        }
      }

      if (maxPrice) {
        const maxValue = Number(maxPrice);
        if (!Number.isNaN(maxValue) && product.price > maxValue) {
          return false;
        }
      }

      return true;
    });
  }, [products, selectedCategories, oemSearch, availability, minPrice, maxPrice]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const currentPageSafe = Math.min(currentPage, totalPages);
  const startIndex = (currentPageSafe - 1) * ITEMS_PER_PAGE;
  const productsOnPage = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryToggle = (category) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setOemSearch('');
    setAvailability('all');
    setMinPrice('');
    setMaxPrice('');
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading Services...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F7FAFA] text-[#1E2A2A]">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="rounded-[2rem] bg-white p-8 shadow-xl border border-[#E5F3F2]">
          <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="space-y-8">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-[#1F7F7A]/80">Filters</p>
                <h1 className="text-3xl md:text-4xl font-black">Service Parts Search</h1>
                <p className="text-sm text-slate-600">Filter spare parts by category, OEM, availability and price.</p>
              </div>

              <div className="space-y-6 rounded-[2rem] border border-[#D6ECEA] bg-[#F8FBFB] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Selected Filters</p>
                    <p className="text-xs text-slate-500">Refine your product list</p>
                  </div>
                  <button onClick={handleResetFilters} className="text-sm font-bold text-[#1F7F7A] hover:text-[#0F5F5A]">Reset</button>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-3">Categories</p>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category} className="flex items-center gap-3 text-sm text-slate-700">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryToggle(category)}
                            className="h-4 w-4 text-[#1F7F7A] border-gray-300 rounded"
                          />
                          {category}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-3">OEM Search</p>
                    <input
                      value={oemSearch}
                      onChange={(event) => {
                        setOemSearch(event.target.value);
                        setCurrentPage(1);
                      }}
                      placeholder="Search OEM or product"
                      className="w-full rounded-3xl border border-[#D6ECEA] bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#1F7F7A] focus:ring-2 focus:ring-[#D7F0EE]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-3">Availability</p>
                    <div className="space-y-3">
                      {[
                        { value: 'all', label: 'Show All' },
                        { value: 'instock', label: 'In Stock Only' },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-3 text-sm text-slate-700">
                          <input
                            type="radio"
                            name="availability"
                            value={option.value}
                            checked={availability === option.value}
                            onChange={() => {
                              setAvailability(option.value);
                              setCurrentPage(1);
                            }}
                            className="h-4 w-4 text-[#1F7F7A] border-gray-300"
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-3">Price Range</p>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="number"
                        min="0"
                        value={minPrice}
                        onChange={(event) => {
                          setMinPrice(event.target.value);
                          setCurrentPage(1);
                        }}
                        placeholder="Min"
                        className="rounded-3xl border border-[#D6ECEA] bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#1F7F7A] focus:ring-2 focus:ring-[#D7F0EE]"
                      />
                      <input
                        type="number"
                        min="0"
                        value={maxPrice}
                        onChange={(event) => {
                          setMaxPrice(event.target.value);
                          setCurrentPage(1);
                        }}
                        placeholder="Max"
                        className="rounded-3xl border border-[#D6ECEA] bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#1F7F7A] focus:ring-2 focus:ring-[#D7F0EE]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <section className="w-full">
              <div className="mb-8 rounded-[2rem] border border-[#D6ECEA] bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">Showing {totalItems} results</p>
                    <h2 className="text-2xl font-black text-[#1E2A2A]">Industrial Spare Parts & Components</h2>
                  </div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-[#D6ECEA] bg-[#F7FBFB] px-4 py-3 text-sm font-semibold text-[#1F7F7A]">
                    <span>{selectedCategories.length || 'All'} categories</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1F7F7A]" />
                    <span>{availability === 'all' ? 'All stock' : 'In stock only'}</span>
                  </div>
                </div>
              </div>

              {productsOnPage.length === 0 ? (
                <div className="rounded-[2rem] border border-[#D6ECEA] bg-white p-10 text-center text-slate-600">
                  No products matched your filters. Try broadening the search or clearing filters.
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {productsOnPage.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#1F7F7A] text-white hover:bg-[#166e67]'}`}
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`rounded-full px-4 py-3 text-sm font-semibold transition ${page === currentPage ? 'bg-[#1F7F7A] text-white' : 'bg-white border border-[#D6ECEA] text-[#1E2A2A] hover:bg-[#F3F9F8]'}`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#1F7F7A] text-white hover:bg-[#166e67]'}`}
                  >
                    Next
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
