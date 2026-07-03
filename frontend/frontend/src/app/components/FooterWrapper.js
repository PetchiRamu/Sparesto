"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  
  // Routes where footer should be hidden
  const excludedPaths = ["/cart", "/makeanenquiry", "/companyprofile"];
  
  const isExcluded = excludedPaths.includes(pathname);

  if (isExcluded) return null;

  return <Footer />;
}