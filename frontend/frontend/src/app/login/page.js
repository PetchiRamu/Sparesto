"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Smartphone,
  Building,
  User,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { loginService, guestLoginService, fetchAddToCart } from "../apiservices/apiServices";
import Cookies from "js-cookie";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("password"); // "password" or "otp"
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showGuestForm, setShowGuestForm] = useState(false);

  const [loginData, setLoginData] = useState({
    emailOrUsername: "",
    password: "",
    otp: "",
  });

  const [guestData, setGuestData] = useState({
    companyName: "",
    username: "",
    mobileNumber: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleGuestChange = (e) => {
    setGuestData({ ...guestData, [guestData.name]: e.target.value });
  };


  const handleLogin = async () => {
    try {
      const payload =
        loginMethod === "password"
          ? { email: loginData.emailOrUsername, password: loginData.password }
          : { email: loginData.emailOrUsername, otp: loginData.otp };

      const response = await loginService(payload);

      // Alert and Redirect (Cookie is already set in service)
      alert(response.message || "Login successful!");

      // Merge local cart into server cart if present
      try {
        const token = Cookies.get('token');
        const raw = localStorage.getItem('sparesto_cart');
        if (token && raw) {
          const cart = JSON.parse(raw);
          for (const it of cart) {
            await fetchAddToCart({ productId: it.productId, quantity: it.quantity || 1 }, token);
          }
          localStorage.removeItem('sparesto_cart');
          // notify other tabs/components
          window.dispatchEvent(new Event('storage'));
        }
      } catch (mergeErr) {
        console.error('Cart merge failed', mergeErr);
      }

      router.push("/product");
    } catch (error) {
      alert(error.message || "Login failed!");
    }
  };

  const handleGuestSubmit = async () => {
    // ... validation checks ...
    try {
      await guestLoginService(guestData);
      router.push("/product");
    } catch (error) {
      alert(error.message);
    }
  };

  const sendOtp = () => {
    setShowOtpInput(true);
    alert("OTP sent to your email/mobile!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-8 lg:p-12"
      style={{ backgroundColor: "#D6ECEA" }}
    >
      {/* Container: Adjusts max-width based on screen size */}
      <div
        className="w-full max-w-md md:max-w-4xl bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border-2 md:border-4"
        style={{ borderColor: "#AEEBE7" }}
      >
        {/* Left Side: Industrial Branding - Hidden/Condensed on tiny screens, full on MD */}
        <div
          className="md:w-5/12 p-6 md:p-10 flex flex-col justify-between relative overflow-hidden"
          style={{ backgroundColor: "#1F7F7A" }}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6 md:mb-8">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center bg-white shadow-lg">
                <ShieldCheck style={{ color: "#1F7F7A" }} size={20} />
              </div>
              <span className="text-white font-black italic tracking-tighter text-lg md:text-xl uppercase">
                Secure Access
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4 md:mb-6 uppercase tracking-tighter italic">
              Welcome Back <br className="hidden md:block" /> to the Portal
            </h1>
            <p className="text-[#AEEBE7] text-xs md:text-sm font-medium leading-relaxed max-w-xs opacity-90">
              Manage your industrial inventory, track shipments, and access
              personalized B2B pricing.
            </p>
          </div>

          {/* Abstract Design Element */}
          <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-40 md:h-40 rounded-full blur-3xl opacity-20 bg-white"></div>
        </div>

        {/* Right Side: Login Form */}
        <div className="md:w-7/12 p-6 md:p-10 lg:p-14">
          <div className="mb-6 md:mb-10">
            <h2
              className="text-2xl md:text-3xl font-black uppercase tracking-tight italic"
              style={{ color: "#1E2A2A" }}
            >
              Member Login
            </h2>
            <p
              className="text-xs md:text-sm font-bold mt-1"
              style={{ color: "#5F6F73" }}
            >
              Please enter your credentials to continue.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {/* Input: Email */}
            <div>
              <label
                className="text-[9px] md:text-[10px] font-black uppercase tracking-widest block mb-2"
                style={{ color: "#5F6F73" }}
              >
                Corporate Email
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-[#1F7F7A]"
                  style={{ color: "#D6ECEA" }}
                  size={18}
                />
                <input
                  type="text"
                  name="emailOrUsername"
                  value={loginData.emailOrUsername}
                  onChange={handleLoginChange}
                  placeholder="user@company.com"
                  className="w-full pl-11 md:pl-12 pr-4 py-3 md:py-4 border-2 rounded-xl md:rounded-2xl focus:outline-none transition-all text-sm md:text-base"
                  style={{ borderColor: "#D6ECEA", color: "#1E2A2A" }}
                />
              </div>
            </div>

            {/* Input: Password / OTP Toggle Logic */}
            {loginMethod === "password" ? (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label
                    className="text-[9px] md:text-[10px] font-black uppercase tracking-widest"
                    style={{ color: "#5F6F73" }}
                  >
                    Password
                  </label>
                  <button
                    className="text-[9px] md:text-[10px] font-bold uppercase underline"
                    style={{ color: "#1F7F7A" }}
                  >
                    Reset Access?
                  </button>
                </div>
                <div className="relative group">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "#D6ECEA" }}
                    size={18}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    placeholder="••••••••"
                    className="w-full pl-11 md:pl-12 pr-11 md:pr-12 py-3 md:py-4 border-2 rounded-xl md:rounded-2xl focus:outline-none transition-all text-sm md:text-base"
                    style={{ borderColor: "#D6ECEA" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    style={{ color: "#5F6F73" }}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            ) : (
              showOtpInput && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label
                    className="text-[9px] md:text-[10px] font-black uppercase tracking-widest block mb-2"
                    style={{ color: "#5F6F73" }}
                  >
                    Verification Code
                  </label>
                  <input
                    type="text"
                    name="otp"
                    maxLength={6}
                    value={loginData.otp}
                    onChange={handleLoginChange}
                    className="w-full px-4 py-3 md:py-4 border-2 rounded-xl md:rounded-2xl text-center text-xl md:text-2xl font-black tracking-[0.3em] md:tracking-[0.5em]"
                    style={{
                      borderColor: "#1F7F7A",
                      backgroundColor: "#AEEBE7",
                    }}
                  />
                </div>
              )
            )}

            {/* Toggle Login Method */}
            <button
              type="button"
              onClick={() => {
                if (loginMethod === "otp" && !showOtpInput) sendOtp();
                else
                  setLoginMethod(
                    loginMethod === "password" ? "otp" : "password"
                  );
              }}
              className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-colors"
              style={{ color: "#1F7F7A" }}
            >
              <Smartphone size={14} />
              {loginMethod === "password"
                ? "Switch to OTP Login"
                : "Switch to Password Login"}
            </button>

            {/* Action Buttons */}
            <div className="pt-2 md:pt-4 space-y-4">
              {loginMethod === "otp" && !showOtpInput ? (
                <button
                  onClick={sendOtp}
                  className="w-full py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-white shadow-lg active:scale-95 transition-all text-xs md:text-sm tracking-widest"
                  style={{ backgroundColor: "#1F7F7A" }}
                >
                  SEND VERIFICATION CODE
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-white text-base md:text-lg tracking-widest uppercase shadow-xl transition-all hover:translate-y-[-2px] active:scale-95"
                  style={{ backgroundColor: "#1F7F7A" }}
                >
                  LOGIN
                </button>
              )}
            </div>

            <div
              className="mt-6 md:mt-8 pt-6 md:pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{ borderColor: "#D6ECEA" }}
            >
              <p
                className="text-[10px] md:text-xs font-bold text-center sm:text-left"
                style={{ color: "#5F6F73" }}
              >
                New here?{" "}
                <Link
                  href="/signup"
                  style={{ color: "#1F7F7A" }}
                  className="underline ml-1"
                >
                  Create Business Account
                </Link>
              </p>
              <button
                onClick={() => setShowGuestForm(true)}
                className="flex items-center gap-1 text-[10px] md:text-xs font-black uppercase italic group"
                style={{ color: "#1F7F7A" }}
              >
                Guest Entry{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Guest Modal Redesign - Responsive sizing */}
      {showGuestForm && (
        <div className="fixed inset-0 bg-[#1E2A2A]/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-2xl w-full max-w-sm md:max-w-md p-6 md:p-10 relative border-2 md:border-4"
            style={{ borderColor: "#AEEBE7" }}
          >
            <button
              onClick={() => setShowGuestForm(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-gray-100 hover:bg-red-50 transition-colors"
              style={{ color: "#D32F2F" }}
            >
              <X size={18} />
            </button>
            <div className="text-center mb-6 md:mb-8">
              <h3
                className="text-xl md:text-2xl font-black italic uppercase tracking-tighter"
                style={{ color: "#1E2A2A" }}
              >
                Guest Access
              </h3>
              <p
                className="text-[10px] md:text-xs font-bold"
                style={{ color: "#5F6F73" }}
              >
                Quick entry for one-time procurement.
              </p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="relative">
                <Building
                  className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30"
                  size={16}
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  onChange={handleGuestChange}
                  className="w-full pl-11 md:pl-12 pr-4 py-3 md:py-4 border-2 rounded-xl md:rounded-2xl bg-gray-50 outline-none text-sm"
                  style={{ borderColor: "#D6ECEA" }}
                />
              </div>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30"
                  size={16}
                />
                <input
                  type="text"
                  name="username"
                  placeholder="Your Full Name"
                  onChange={handleGuestChange}
                  className="w-full pl-11 md:pl-12 pr-4 py-3 md:py-4 border-2 rounded-xl md:rounded-2xl bg-gray-50 outline-none text-sm"
                  style={{ borderColor: "#D6ECEA" }}
                />
              </div>
              <div className="relative">
                <Smartphone
                  className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30"
                  size={16}
                />
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  onChange={handleGuestChange}
                  className="w-full pl-11 md:pl-12 pr-4 py-3 md:py-4 border-2 rounded-xl md:rounded-2xl bg-gray-50 outline-none text-sm"
                  style={{ borderColor: "#D6ECEA" }}
                />
              </div>
              <button
                onClick={handleGuestSubmit}
                className="w-full py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-white uppercase tracking-widest shadow-lg mt-2 md:mt-4 active:scale-95 transition-all text-xs md:text-sm"
                style={{ backgroundColor: "#1F7F7A" }}
              >
                CONTINUE AS GUEST
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Simple X Icon since it wasn't imported from lucide
function X({ size, className, style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
