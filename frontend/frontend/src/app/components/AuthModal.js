"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("login");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm   flex justify-center items-center p-4">

      <div className="relative bg-[#EEF4F4] rounded-[32px] w-[90%] max-w-4xl p-8">


        {/* close */}
        <button
          className="absolute right-8 top-6 text-4xl"
          onClick={onClose}
        >
          ×
        </button>

        {/* logo */}
        <div className="flex justify-center mb-10">
          <img
            src="/orginallogo.png"
            alt=""
            className="h-12"
          />
        </div>

        {/* tabs */}
        {/* <div className="flex justify-center gap-6 mb-14">

          <button
            onClick={() => setActiveTab("login")}
            className={`w-[250px] h-[80px] rounded-3xl text-[40px] font-bold border
            ${
              activeTab === "login"
                ? "bg-[#006B68] text-white"
                : "bg-white text-[#006B68]"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setActiveTab("register")}
            className={`w-[250px] h-[80px] rounded-3xl text-[40px] font-bold border
            ${
              activeTab === "register"
                ? "bg-[#006B68] text-white"
                : "bg-white text-[#006B68]"
            }`}
          >
            Register
          </button>
        </div> */}

        <div className="flex justify-center gap-6 mb-10">

  <button
    onClick={() => setActiveTab("login")}
    className={`w-[180px] h-[55px] rounded-2xl text-[28px] font-bold border
    ${
      activeTab === "login"
        ? "bg-[#006B68] text-white"
        : "bg-white text-[#006B68]"
    }`}
  >
    Login
  </button>

  <button
    onClick={() => setActiveTab("register")}
    className={`w-[180px] h-[55px] rounded-2xl text-[28px] font-bold border
    ${
      activeTab === "register"
        ? "bg-[#006B68] text-white"
        : "bg-white text-[#006B68]"
    }`}
  >
    Register
  </button>

</div>

        {activeTab === "login" ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}
      </div>
    </div>
  );
}