"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Added for redirection
import { API_ROOT, fetchAddToCart } from "../../apiservices/apiServices";
import Cookies from "js-cookie";

export default function ProductCard({ product }) {
  const { id, name, moq, leadTime, image, manufacturer, code, price } = product;
  const router = useRouter(); // Initialize router
  const detailUrl = `/product/${id}`;
  
  // Robust image path handling
  const imageUrl = image 
    ? `${API_ROOT}${image.replace(/\\/g, '/').replace('public/', '')}` 
    : null;

  const handleAddToCart = async () => {
    try {
      const token = Cookies.get("token"); 
      const cartData = {
        productId: id,
        quantity: parseInt(moq, 10) || 1,
        name,
        price,
        img: imageUrl,
        manufacturer,
        code,
      };

      await fetchAddToCart(cartData, token);
      router.push("/cart"); 
    } catch (error) {
      console.error("Add to cart error:", error);
      alert(error.message || "Failed to add to cart");
    }
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">
      <Link href={detailUrl} className="flex-grow">
        <div className="relative w-full h-48 sm:h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
          {image ? (
            <>
            <img
              src={imageUrl} 
              alt={name}
              onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found"; }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* 2. LOGO WATERMARK LAYER */}
           <div className="watermark-overlay" />
           </>
          ) : (
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-widest">No Image</span>
            </div>
          )}
        </div>

        <div className="p-4 md:p-5 space-y-3">
          <h4 className="text-md md:text-lg font-bold text-gray-900 leading-tight line-clamp-2">
            {name}
          </h4>
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-50">
            <div>
              <p className="text-[10px] uppercase text-gray-400 font-bold">MOQ</p>
              <p className="text-sm font-medium text-gray-700">{moq} Units</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-gray-400 font-bold">Lead Time</p>
              <p className="text-sm font-medium text-gray-700">{leadTime}</p>
            </div>
          </div>
        </div>
      </Link>

      {/* Actions */}
      <div className="px-4 pb-4 mt-auto space-y-2">
        <Link
          href={detailUrl}
          className="block w-full py-2.5 bg-gray-50 text-[#1F7F7A] font-bold rounded-lg text-center text-sm border border-[#1F7F7A] hover:bg-[#1F7F7A] hover:text-white transition-colors"
        >
          View Details
        </Link>
        
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
          className="w-full py-2.5 bg-[#155E5A] text-white font-bold rounded-lg text-center text-sm hover:bg-[#1F7F7A] shadow-sm transition-all active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}