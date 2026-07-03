import Header from "../components/header";
import FilterSidebar from "../components/filtersidebar";
import ProductGrid from "../components/product/ProductGrid";
import Footer from "../components/footer";
import Hero from "../components/hero";

const ShopPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero/>
      
      {/* Main Content Area */}
      <main className="flex flex-grow max-w-7xl mx-auto w-full">
        
        {/* Filter Sidebar - Sticky on larger screens */}
        <div className="hidden lg:block w-72 flex-shrink-0 sticky top-0 h-screen">
          <FilterSidebar />
        </div>

        {/* Product Grid */}
        <div className="flex-grow">
          <ProductGrid />   
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShopPage;