
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
// import { fetchGetCart } from "../apiservices/apiServices";
import Cookies from "js-cookie";
import AuthModal from "./AuthModal";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "#",
      submenu: [
        { name: "Procurement", href: "/services/ecommerce" },
        { name: "Manpower Services", href: "/services/manpowerservices" },
        { name: "Eauction", href: "/services/e-auction" },
        { name: "Component Testing & Servicing", href: "/services/sparesservices" },
        { name: "inventory liquidation", href: "/sellourproduct" }, 
      ],
    },
    { name: "Trade In Your Spare", href: "/sellourproduct " },
    { name: "Contact Us", href: "/contactus" },
  ];

  useEffect(() => {
    const loadCount = async () => {
      try {
        const token = Cookies.get("token");

        if (token) {
          const res = await fetchGetCart(token);
          const items = res?.data || [];
          const total = items.reduce(
            (s, it) => s + (it.quantity || 1),
            0
          );
          setCartCount(total);
        } else {
          const raw = localStorage.getItem("sparesto_cart");
          const cart = raw ? JSON.parse(raw) : [];
          const total = cart.reduce(
            (s, it) => s + (it.quantity || 1),
            0
          );
          setCartCount(total);
        }
      } catch (err) {
        setCartCount(0);
      }
    };

    loadCount();

    const onStorage = () => loadCount();

    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const isActiveRoute = (href) => {
    if (!pathname) return false;

    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-[#EEF4F4] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/orginallogo.png"
              alt="Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-12">
            {menuItems.map((item, index) => {
              const isActive = isActiveRoute(item.href);

              if (item.submenu) {
                return (
                  <div
                    key={index}
                    className="relative py-4"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div
                      className={`flex items-center gap-1.5 cursor-pointer text-[18px] font-medium transition-colors pb-1 ${
                        isActive
                          ? "text-[#006B68] border-b-[3px] border-[#006B68]"
                          : "text-gray-700 hover:text-[#006B68]"
                      }`}
                    >
                      <Link href={item.href}>{item.name}</Link>

                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          servicesOpen
                            ? "rotate-180 text-[#006B68]"
                            : "text-gray-400"
                        }`}
                      />
                    </div>

                    {/* Desktop Dropdown */}
                    <div
                      className={`absolute left-0 top-[85%] z-50 min-w-[260px] p-2 rounded-2xl border border-gray-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-200 origin-top-left ${
                        servicesOpen
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      {item.submenu.map((subItem) => {
                        const isSubActive = pathname === subItem.href;

                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setServicesOpen(false)}
                            className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-medium transition-all ${
                              isSubActive
                                ? "text-[#006B68] bg-[#006B68]/5"
                                : "text-gray-600 hover:text-[#006B68] hover:bg-gray-50"
                            }`}
                          >
                            <span
                              className={`w-1 h-3.5 rounded-full transition-all ${
                                isSubActive
                                  ? "bg-[#006B68]"
                                  : "bg-transparent group-hover:bg-[#006B68]/40"
                              }`}
                            />

                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-[18px] font-medium transition-colors pb-1 ${
                    isActive
                      ? "text-[#006B68] border-b-[3px] border-[#006B68]"
                      : "text-gray-700 hover:text-[#006B68]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            {/* <Link href="/cart" className="relative mr-2">
              <ShoppingCart className="w-6 h-6 text-gray-700" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-[#0f8b83] text-white text-[11px] rounded-full px-2 py-0.5">
                  {cartCount}
                </span>
              )}
            </Link> */}

            <div className="flex items-center">
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-[#006B68] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#005552] transition"
              >
                Login
              </button>
            </div>
          </div>

          {/* Mobile Actions & Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <Link href="/cart" className="relative mr-2">
              <ShoppingCart className="w-6 h-6 text-gray-700" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-[#0f8b83] text-white text-[11px] rounded-full px-2 py-0.5">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              className="p-1"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#EEF4F4] border-t max-h-[calc(100vh-90px)] overflow-y-auto">
          <div className="px-6 py-5 flex flex-col gap-5">
            {menuItems.map((item, index) => {
              const isActive = isActiveRoute(item.href);

              if (item.submenu) {
                return (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center justify-between py-1">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`text-lg font-medium ${
                          isActive
                            ? "text-[#006B68]"
                            : "text-gray-700"
                        }`}
                      >
                        {item.name}
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          setMobileServicesOpen(
                            !mobileServicesOpen
                          )
                        }
                        className="p-2 text-gray-500 focus:outline-none"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            mobileServicesOpen
                              ? "rotate-180 text-[#006B68]"
                              : ""
                          }`}
                        />
                      </button>
                    </div>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ml-3 pl-3 border-l border-gray-300/60 ${
                        mobileServicesOpen
                          ? "grid-rows-[1fr] opacity-100 mt-2 mb-1"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden flex flex-col gap-3">
                        {item.submenu.map((subItem) => {
                          const isSubActive =
                            pathname === subItem.href;

                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => {
                                setOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className={`text-[16px] py-1 transition-colors ${
                                isSubActive
                                  ? "text-[#006B68] font-semibold"
                                  : "text-gray-600 hover:text-[#006B68]"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium py-1 ${
                    isActive
                      ? "text-[#006B68]"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="border-t border-gray-300/60 pt-5 flex flex-col gap-4">
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-[#006B68] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#005552] transition"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      )}
    </header>
  );
}