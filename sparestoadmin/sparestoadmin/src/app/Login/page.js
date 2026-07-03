"use client";

import { Eye } from "lucide-react";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('/loginbgimg.jpeg')",
      }}
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-teal-700">SPARESTO</h1>

          <h2 className="mt-6 text-3xl font-semibold text-teal-700">
            Login
          </h2>

          <p className="text-gray-500 mt-2">
            Enter your details to sign in
          </p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Email *
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-2">
            Password *
          </label>

          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-teal-600"
            />

            <Eye
              size={20}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-6">
          <button className="text-blue-600 font-medium hover:underline">
            Forget password?
          </button>
        </div>

        {/* Login Button */}
        <button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-xl font-semibold transition">
          Login
        </button>
      </div>
    </div>
  );
}