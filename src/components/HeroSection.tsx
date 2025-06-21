"use client";

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Menggunakan background global, tanpa background image */}
      
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 z-10">
        <Image
          src="/images/element.svg"
          alt="Decorative Element"
          width={200}
          height={200}
          className="opacity-80"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-4xl mx-auto">
          {/* Main Title - warna akan mengikuti CSS global */}
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            KKN-PPM Periode 2 2025 Universitas Gadjah Mada
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-blue-600 mb-8">
            Paliyan, Gunung Kidul
          </h2>

          {/* Optional CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Pelajari Lebih Lanjut
            </button>
            <button className="border-2 border-current hover:bg-current hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Galeri Kegiatan
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 mx-auto" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="m19 14-7 7m0 0-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;