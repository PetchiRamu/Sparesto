"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight, Home, Mail } from "lucide-react";

export default function EnquirySuccessPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-[3rem] p-10 shadow-2xl border-4 border-[#AEEBE7] text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-[#E6F7F6] p-4 rounded-full">
            <CheckCircle size={64} className="text-[#1F7F7A]" />
          </div>
        </div>

        <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">Enquiry Sent!</h1>
        <p className="text-[#5F6F73] font-medium mb-8">
          Thank you! Your quote request has been received. Our sales team will contact you via email shortly.
        </p>

        <div className="space-y-4">
          <Link 
            href="/product" 
            className="w-full py-4 rounded-2xl font-black text-white bg-[#1F7F7A] flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg"
          >
            CONTINUE SHOPPING <ArrowRight size={20} />
          </Link>
          
          <Link 
            href="/" 
            className="w-full py-4 rounded-2xl font-black text-[#1F7F7A] border-2 border-[#1F7F7A] flex items-center justify-center gap-2 hover:bg-[#F0F9F8] transition-all"
          >
            BACK TO HOME <Home size={20} />
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-dashed border-[#D6ECEA]">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#4FB7B0] uppercase tracking-widest">
            <Mail size={14} /> Check your inbox for a copy
          </div>
        </div>
      </div>
    </div>
  );
}