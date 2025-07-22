"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  // Fungsi untuk menangani scroll
  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setHidden(true); // Scroll ke bawah
    } else {
      setHidden(false); // Scroll ke atas
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 shadow-md transition-transform duration-300 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}>
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-1.5 sm:py-2 flex justify-between items-center">
        
        {/* Logo Section - More compact for mobile */}
        <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0 group">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 overflow-hidden rounded-full border-2 border-blue-500 shadow-md transition-all duration-300 group-hover:shadow-blue-200 group-hover:scale-105">
            <Image
              src="/logo-kkn.png"
              alt="UGM Logo"
              fill
              sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
              priority
              style={{ objectFit: "contain" }}
              draggable="false"
              className="transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-blue-900 font-bold text-xs sm:text-sm tracking-tight">Paliyan Menawan</span>
            </div>
            <span className="text-blue-600 text-[9px] sm:text-xs bg-blue-50 px-1.5 rounded-full inline-block whitespace-nowrap">KKN-PPM UGM 2025</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          <Link
            href="/"
            className="relative group px-4 py-2 text-blue-700 font-medium text-sm xl:text-base rounded-full hover:bg-blue-50 transition-all duration-300">
            <span className="relative z-10">Beranda</span>
            <span className="absolute bottom-1.5 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/karangduwet"
            className="relative group px-4 py-2 text-blue-700 font-medium text-sm xl:text-base rounded-full hover:bg-blue-50 transition-all duration-300">
            <span className="relative z-10">Karangduwet</span>
            <span className="absolute bottom-1.5 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/grogol"
            className="relative group px-4 py-2 text-blue-700 font-medium text-sm xl:text-base rounded-full hover:bg-blue-50 transition-all duration-300">
            <span className="relative z-10">Grogol</span>
            <span className="absolute bottom-1.5 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/pampang"
            className="relative group px-4 py-2 text-blue-700 font-medium text-sm xl:text-base rounded-full hover:bg-blue-50 transition-all duration-300">
            <span className="relative z-10">Pampang</span>
            <span className="absolute bottom-1.5 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Mobile Menu Button - Compact version */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 active:bg-blue-200 transition-all duration-300 group touch-manipulation"
            aria-label="Toggle menu">
            <span className="flex flex-col items-center justify-center w-4 h-4 space-y-0.5 relative">
              <span 
                className={`block h-0.5 bg-blue-600 transition-all duration-300 ease-in-out ${
                  menuOpen ? 'w-4 absolute top-1.5 rotate-45' : 'w-4'
                }`}
              ></span>
              <span 
                className={`block h-0.5 bg-blue-600 transition-all duration-300 ease-in-out ${
                  menuOpen ? 'opacity-0 w-0' : 'opacity-100 w-3'
                }`}
              ></span>
              <span 
                className={`block h-0.5 bg-blue-600 transition-all duration-300 ease-in-out ${
                  menuOpen ? 'w-4 absolute top-1.5 -rotate-45' : 'w-2.5'
                }`}
              ></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Animated Drawer with enhanced mobile UX */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop overlay - improved for mobile */}
        <div 
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        ></div>
        
        {/* Menu panel - enhanced for mobile */}
        <div 
          className={`absolute top-0 right-0 w-[85%] max-w-xs h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col safe-bottom`}
          role="dialog"
          aria-modal="true"
        >
          {/* Menu header - improved for mobile */}
          <div className="flex items-center justify-between p-4 border-b border-blue-50">
            <div className="flex items-center space-x-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-blue-200 shadow-sm">
                <Image
                  src="/logo-kkn.png"
                  alt="UGM Logo"
                  fill
                  sizes="36px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="font-bold text-blue-900 text-sm">KKN-PPM UGM</span>
            </div>
            <button 
              onClick={() => setMenuOpen(false)}
              className="text-gray-500 hover:text-blue-600 active:text-blue-800 transition-colors p-2 -mr-1 touch-manipulation"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Menu links with indicators - enhanced for touch */}
          <div className="flex-1 overflow-auto overscroll-contain py-3 px-2">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                className="group flex items-center py-4 px-4 text-gray-700 hover:text-blue-600 active:bg-blue-100 hover:bg-blue-50 rounded-lg transition-all duration-200 ease-in-out touch-manipulation"
                onClick={() => setMenuOpen(false)}
              >
                <span className="w-1.5 h-10 bg-transparent group-hover:bg-blue-500 rounded-full transition-all duration-200 mr-3"></span>
                <span className="font-medium text-base">Beranda</span>
              </Link>
              <Link
                href="/karangduwet"
                className="group flex items-center py-4 px-4 text-gray-700 hover:text-blue-600 active:bg-blue-100 hover:bg-blue-50 rounded-lg transition-all duration-200 ease-in-out touch-manipulation"
                onClick={() => setMenuOpen(false)}
              >
                <span className="w-1.5 h-10 bg-transparent group-hover:bg-blue-500 rounded-full transition-all duration-200 mr-3"></span>
                <span className="font-medium text-base">Karangduwet</span>
              </Link>
              <Link
                href="/grogol"
                className="group flex items-center py-4 px-4 text-gray-700 hover:text-blue-600 active:bg-blue-100 hover:bg-blue-50 rounded-lg transition-all duration-200 ease-in-out touch-manipulation"
                onClick={() => setMenuOpen(false)}
              >
                <span className="w-1.5 h-10 bg-transparent group-hover:bg-blue-500 rounded-full transition-all duration-200 mr-3"></span>
                <span className="font-medium text-base">Grogol</span>
              </Link>
              <Link
                href="/pampang"
                className="group flex items-center py-4 px-4 text-gray-700 hover:text-blue-600 active:bg-blue-100 hover:bg-blue-50 rounded-lg transition-all duration-200 ease-in-out touch-manipulation"
                onClick={() => setMenuOpen(false)}
              >
                <span className="w-1.5 h-10 bg-transparent group-hover:bg-blue-500 rounded-full transition-all duration-200 mr-3"></span>
                <span className="font-medium text-base">Pampang</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}