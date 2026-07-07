"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Upload, Building2, User, Phone, Mail, ShieldCheck, CreditCard, MapPin, X } from "lucide-react";
import { signupService } from "../apiservices/apiServices";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [uploadedDocs, setUploadedDocs] = useState([]);

  const [signupData, setSignupData] = useState({
    companyName: "",
    gstin: "",
    pan: "",
    officeAddress: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessType: "",
    paymentTerms: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedDocs([...uploadedDocs, ...files.map((f) => f.name)]);
  };

  const removeDoc = (index) => {
    setUploadedDocs(uploadedDocs.filter((_, i) => i !== index));
  };

  const handleSignupSubmit = async () => {
    if (!signupData.companyName || !signupData.email || !signupData.phone || !signupData.password) {
      alert("Please fill all required fields");
      return;
    }
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await signupService(signupData);
      alert(response.message || "Registration successful!");
      router.push("/login");
    } catch (error) {
      alert(error.message || "Signup failed!");
    }
  };

  return (
    <div className="min-h-screen py-6 md:py-12 px-4 flex items-center justify-center" style={{ backgroundColor: "#D6ECEA" }}>
      <div className="w-full max-w-5xl bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border-2 md:border-4" style={{ borderColor: "#AEEBE7" }}>
        
        {/* Left Side: Branding/Info */}
        <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-between text-center lg:text-left" style={{ backgroundColor: "#1F7F7A" }}>
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-white italic tracking-tighter mb-4">BUSINESS PORTAL</h1>
            <p className="text-[#AEEBE7] text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              Join our industrial network to access wholesale pricing, tax-exempt purchasing, and dedicated support.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-2/3 p-6 md:p-10 lg:p-14">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight" style={{ color: "#1E2A2A" }}>Register Your Business</h2>
            <div className="h-1 w-16 mt-2 mx-auto md:mx-0" style={{ backgroundColor: "#4FB7B0" }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* Section: General Info */}
            <div className="md:col-span-2">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-2 mb-2" style={{ color: "#5F6F73" }}>
                <Building2 size={14} /> Company Details *
              </label>
              <input
                type="text"
                name="companyName"
                value={signupData.companyName}
                onChange={handleSignupChange}
                placeholder="Legal Entity Name"
                className="w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#1F7F7A]/20 focus:outline-none transition-all"
                style={{ borderColor: "#D6ECEA", color: "#1E2A2A" }}
              />
            </div>

            <div className="col-span-1">
              <label className="text-[10px] md:text-xs font-black uppercase mb-2 block" style={{ color: "#5F6F73" }}>Contact Person</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" size={16} />
                <input
                  type="text"
                  name="contactPerson"
                  value={signupData.contactPerson}
                  onChange={handleSignupChange}
                  className="w-full pl-10 pr-4 py-3 border-2 rounded-xl text-sm md:text-base focus:outline-none"
                  style={{ borderColor: "#D6ECEA" }}
                />
              </div>
            </div>

            <div className="col-span-1">
              <label className="text-[10px] md:text-xs font-black uppercase mb-2 block" style={{ color: "#5F6F73" }}>Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" size={16} />
                <input
                  type="tel"
                  name="phone"
                  value={signupData.phone}
                  onChange={handleSignupChange}
                  className="w-full pl-10 pr-4 py-3 border-2 rounded-xl text-sm md:text-base focus:outline-none"
                  style={{ borderColor: "#D6ECEA" }}
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="text-[10px] md:text-xs font-black uppercase mb-2 block" style={{ color: "#5F6F73" }}>Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" size={16} />
                <input
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  className="w-full pl-10 pr-4 py-3 border-2 rounded-xl text-sm md:text-base focus:outline-none"
                  style={{ borderColor: "#D6ECEA" }}
                />
              </div>
            </div>

            {/* Section: Statutory Info */}
            <div className="col-span-1">
              <label className="text-[10px] md:text-xs font-black uppercase mb-2 block" style={{ color: "#5F6F73" }}>GSTIN</label>
              <input
                type="text"
                name="gstin"
                value={signupData.gstin}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 border-2 rounded-xl text-sm md:text-base focus:outline-none"
                style={{ borderColor: "#D6ECEA" }}
              />
            </div>

            <div className="col-span-1">
              <label className="text-[10px] md:text-xs font-black uppercase mb-2 block" style={{ color: "#5F6F73" }}>PAN</label>
              <input
                type="text"
                name="pan"
                value={signupData.pan}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 border-2 rounded-xl text-sm md:text-base focus:outline-none"
                style={{ borderColor: "#D6ECEA" }}
              />
            </div>

            {/* Section: Business Logic */}
            <div className="col-span-1">
              <label className="text-[10px] md:text-xs font-black uppercase mb-2 block" style={{ color: "#5F6F73" }}>Business Type</label>
              <select
                name="businessType"
                value={signupData.businessType}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 border-2 rounded-xl bg-white text-sm md:text-base focus:outline-none"
                style={{ borderColor: "#D6ECEA" }}
              >
                <option value="">Select Type</option>
                <option value="manufacturer">Manufacturer</option>
                <option value="distributor">Distributor</option>
                <option value="retailer">Retailer</option>
              </select>
            </div>

            <div className="col-span-1">
              <label className="text-[10px] md:text-xs font-black uppercase mb-2 block" style={{ color: "#5F6F73" }}>Credit Terms</label>
              <select
                name="paymentTerms"
                value={signupData.paymentTerms}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 border-2 rounded-xl bg-white text-sm md:text-base focus:outline-none"
                style={{ borderColor: "#D6ECEA" }}
              >
                <option value="">Select Terms</option>
                <option value="net30">Net 30</option>
                <option value="cod">COD</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-[10px] md:text-xs font-black uppercase mb-2 block" style={{ color: "#5F6F73" }}>Security Details</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                   <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-3 border-2 rounded-xl text-sm md:text-base focus:outline-none"
                    style={{ borderColor: "#D6ECEA" }}
                  />
                  <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  className="w-full px-4 py-3 border-2 rounded-xl text-sm md:text-base focus:outline-none"
                  style={{ borderColor: "#D6ECEA" }}
                />
              </div>
            </div>

            {/* KYC Upload */}
            <div className="md:col-span-2">
              <label className="text-[10px] md:text-xs font-black uppercase mb-2 block" style={{ color: "#5F6F73" }}>KYC Documents (PDF/JPG)</label>
              <label 
                className="flex flex-col items-center justify-center w-full h-28 md:h-32 border-2 md:border-4 border-dashed rounded-2xl md:rounded-3xl cursor-pointer transition-colors hover:bg-gray-50"
                style={{ borderColor: "#D6ECEA" }}
              >
                <div className="flex flex-col items-center justify-center py-4">
                  <Upload className="mb-2" style={{ color: "#1F7F7A" }} size={20} />
                  <p className="text-[10px] md:text-xs font-bold text-center px-4" style={{ color: "#5F6F73" }}>Click to upload company certificates</p>
                </div>
                <input type="file" multiple className="hidden" onChange={handleFileUpload} />
              </label>

              <div className="flex flex-wrap gap-2 mt-4">
                {uploadedDocs.map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold" style={{ backgroundColor: "#AEEBE7", color: "#155E5A" }}>
                    <span className="max-w-[120px] truncate">{doc}</span>
                    <X size={12} className="cursor-pointer flex-shrink-0" style={{ color: "#D32F2F" }} onClick={() => removeDoc(idx)} />
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="md:col-span-2 mt-4">
              <button
                type="button"
                onClick={handleSignupSubmit}
                className="w-full py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-white uppercase tracking-widest transition-all shadow-lg active:scale-[0.98]"
                style={{ backgroundColor: "#1F7F7A" }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#155E5A"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#1F7F7A"}
              >
                Register Business
              </button>
              
              <p className="text-center mt-6 text-sm font-bold" style={{ color: "#5F6F73" }}>
                Already registered?{" "}
                <Link href="/login" style={{ color: "#1F7F7A" }} className="hover:underline">
                  Login here
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
