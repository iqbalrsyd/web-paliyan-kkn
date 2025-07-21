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
      className={`fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-lg border-b border-blue-100 transition-transform duration-300 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
            <Image
              src="/logo-kkn.png"
              alt="UGM Logo"
              fill
              style={{ objectFit: "contain" }}
              draggable="false"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-blue-900 font-bold text-sm sm:text-base lg:text-lg">Paliyan Menawan</span>
            <span className="text-blue-600 text-xs sm:text-xs lg:text-sm">KKN-PPM UGM 2025</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8 text-sm xl:text-base">
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-900 hover:scale-110 transition-all duration-300 ease-in-out font-medium">
            Beranda
          </Link>
          <Link
            href="/profil"
            className="text-blue-700 hover:text-blue-900 hover:scale-110 transition-all duration-300 ease-in-out font-medium">
            Profil
          </Link>
          <Link
            href="/program-kerja"
            className="text-blue-700 hover:text-blue-900 hover:scale-110 transition-all duration-300 ease-in-out font-medium">
            Program Kerja
          </Link>
          <Link
            href="/galeri"
            className="text-blue-700 hover:text-blue-900 hover:scale-110 transition-all duration-300 ease-in-out font-medium">
            Galeri
          </Link>
          <Link
            href="/komunikasi-warga"
            className="text-blue-700 hover:text-blue-900 hover:scale-110 transition-all duration-300 ease-in-out font-medium whitespace-nowrap">
            Komunikasi Warga
          </Link>
          <Link
            href="/untuk-kita"
            className="text-blue-700 hover:text-blue-900 hover:scale-110 transition-all duration-300 ease-in-out font-medium">
            Untuk Kita
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/kontak"
            className="bg-blue-600 text-white px-4 xl:px-6 py-2 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out font-medium shadow-lg text-sm xl:text-base">
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-blue-700 p-2 rounded-lg hover:bg-blue-50 transition-colors"
            aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
       \       <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden w-full bg-white/95 backdrop-blur-lg border-t border-blue-100 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block py-3 px-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300 ease-in-out font-medium text-sm"
              onClick={() => setMenuOpen(false)}>
              Beranda
            </Link>
            <Link
              href="/profil"
              className="block py-3 px-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300 ease-in-out font-medium text-sm"
              onClick={() => setMenuOpen(false)}>
              Profil
            </Link>
            <Link
              href="/program-kerja"
              className="block py-3 px-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300 ease-in-out font-medium text-sm"
              onClick={() => setMenuOpen(false)}>
              Program Kerja
            </Link>
            <Link
              href="/galeri"
              className="block py-3 px-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300 ease-in-out font-medium text-sm"
              onClick={() => setMenuOpen(false)}>
              Galeri
            </Link>
            <Link
              href="/komunikasi-warga"
              className="block py-3 px-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300 ease-in-out font-medium text-sm"
              onClick={() => setMenuOpen(false)}>
              Komunikasi Warga
            </Link>
            <Link
              href="/untuk-kita"
              className="block py-3 px-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300 ease-in-out font-medium text-sm"
              onClick={() => setMenuOpen(false)}>
              Untuk Kita
            </Link>
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-blue-100">
              <Link
                href="/kontak"
                className="block text-center bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out font-medium text-sm"
                onClick={() => setMenuOpen(false)}>
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}