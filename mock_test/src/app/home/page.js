// app/home/page.js

"use client";
import { useState, useEffect } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

export default function HomePage() {
  const slides = [
    {
      //image: "/images/slide1.jpg",
      text: "Sharpen Your Mind 🧠",
    },
    {
      //image: "/images/slide2.jpg",
      text: "Crack Entrance 2026 🚀",
    },
    {
      //image: "/images/slide3.jpg",
      text: "Practice. Improve. Win. 🏆",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // Auto slide every 5 sec
  useEffect(() => {
  const interval = setInterval(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, 5000);

  return () => clearInterval(interval);
}, [slides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute w-80 h-80 bg-blue-500 opacity-20 blur-3xl top-0 left-0"></div>
      <div className="absolute w-80 h-80 bg-purple-500 opacity-20 blur-3xl bottom-0 right-0"></div>

      {/* Navbar */}
      <div className="w-full fixed top-0 mx-auto px-4 pt-6">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <span className="font-semibold">Entrance Exam Mock Test 2026</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-400"></div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold">Alex Johnson</p>
              <p className="text-xs text-gray-300">alex.j@mail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === i ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay (this blends image with background) */}
            <div className="w-full h-full flex items-center justify-center text-center px-6">
              <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">
                {slide.text}
              </h1>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              activeSlide === i ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>

      {/* Card Section */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 h-40 rounded-xl overflow-hidden relative group">
            <img
              src="/Q1.png"
              className="w-full h-full object-cover"
              alt="quiz"
            />
            <div className="absolute inset-0"></div>
          </div>

          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Pattern Recognition Mock Test
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Lorem ipsum dolor sit amet, conseeterirumiu yout, minimal description et amet.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 font-medium">
                Start Quiz
              </button>
              <button className="px-6 py-2 rounded-full border border-white/30 text-gray-200">
                View Results
              </button>
            </div>
          </div>
        </div>
      </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/20 backdrop-blur-xl bg-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300">

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 ml-auto">

            <div className="flex items-center gap-2 hover:text-white transition">
                <FiPhone />
                <span>+975 17 123 456</span>
            </div>

            <div className="flex items-center gap-2 hover:text-white transition">
                <FiMail />
                <span>support@example.com</span>
            </div>

            <div className="flex items-center gap-2 text-green-400 hover:text-green-300 transition">
                <FaWhatsapp />
                <span>WhatsApp</span>
            </div>

            <div className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition">
                <FaTelegramPlane />
                <span>Telegram</span>
            </div>

            </div>

            {/* Right side */}
            <p className="text-sm text-gray-400 md:ml-auto">
            2026 Entrance Mock Test
            </p>

        </div>
        </footer>
    </div>
  );
}

