// app/login/page.js

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

      {/* Card */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 w-[90%] max-w-md text-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Entrance Exam <br /> Mock Test 2026
        </h1>
        <p className="text-center text-gray-300 mb-6">
          Prepare. Practice. Succeed.
        </p>

        {/* Email */}
        <label className="block text-sm mb-1">Email</label>
        <div className="flex items-center border border-white/30 rounded-lg px-3 py-2 mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent outline-none w-full text-white placeholder-gray-300"
          />
        </div>

        {/* Password */}
        <label className="block text-sm mb-1">Password</label>
        <div className="flex items-center border border-white/30 rounded-lg px-3 py-2 mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="bg-transparent outline-none w-full text-white placeholder-gray-300"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-300 text-sm"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Options */}
        <div className="flex items-center justify-between text-sm mb-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-purple-500" />
            Remember Me
          </label>
          <a href="#" className="text-purple-300 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Button */}
         <button
          onClick={() => {
            router.push("/home");
          }}
          className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 font-semibold hover:opacity-90 transition"
        >
          Login
        </button>

        {/* Signup */}
        <p className="text-center text-sm mt-4 text-gray-300">
          Don&apos;t have an account? 
          <span className="text-purple-300 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}