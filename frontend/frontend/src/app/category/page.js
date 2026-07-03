// pages/categories.js
import CategoryAccordion from "../components/categoryaccordian";
import Header from "../components/header";
import Footer from "../components/footer";


const CategoriesPage = () => {
  return (
    // Simple wrapper for the page layout
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div>
        <CategoryAccordion />
      </div>
      <Footer />
    </div>
  );
};

export default CategoriesPage;