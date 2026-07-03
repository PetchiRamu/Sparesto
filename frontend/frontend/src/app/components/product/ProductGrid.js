import ProductCard from './ProductCard';

const getPageNumbers = (currentPage, totalPages) => {
  const range = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  if (start > 1) {
    range.unshift('...');
    range.unshift(1);
  }

  if (end < totalPages) {
    range.push('...');
    range.push(totalPages);
  }

  return Array.from(new Set(range));
};

const ProductGrid = ({
  products,
  totalItems,
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <p className="text-sm text-gray-500 font-medium">
          Showing <span className="text-gray-900">{startIndex}-{endIndex}</span> of <span className="text-gray-900">{totalItems}</span> results
        </p>

        <div className="flex items-center w-full sm:w-auto">
          <label htmlFor="sort" className="mr-3 text-sm font-semibold text-gray-700 shrink-0">Sort by:</label>
          <select
            id="sort"
            className="w-full sm:w-48 py-2 px-3 border border-gray-200 rounded-lg bg-white text-sm focus:ring-2 focus:ring-[#1F7F7A] outline-none"
          >
            <option>Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid: 1 col on mobile, 2 on tablet, 3 on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 mb-8">
          <nav className="inline-flex flex-wrap justify-center gap-2 items-center">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-sm font-bold rounded-lg border transition-all ${
                currentPage === 1
                  ? 'bg-gray-50 border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'bg-white border-gray-300 text-gray-700 hover:border-[#1F7F7A] hover:text-[#1F7F7A]'
              }`}
            >
              Prev
            </button>

            <div className="hidden sm:flex space-x-2">
                {pageNumbers.map((page, index) => {
                if (page === '...') {
                    return <span key={`dots-${index}`} className="px-2 py-1 text-gray-400">...</span>;
                }

                const isCurrent = page === currentPage;
                return (
                    <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`min-w-[40px] h-10 text-sm font-bold rounded-lg transition-all ${
                        isCurrent
                            ? 'bg-[#1F7F7A] text-white shadow-md'
                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                    {page}
                    </button>
                );
                })}
            </div>

            {/* Mobile simplified page indicator */}
            <span className="sm:hidden text-sm font-bold text-gray-700 mx-2">
                Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-sm font-bold rounded-lg border transition-all ${
                currentPage === totalPages
                  ? 'bg-gray-50 border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'bg-white border-gray-300 text-gray-700 hover:border-[#1F7F7A] hover:text-[#1F7F7A]'
              }`}
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;


