"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const LogoSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Gallery images for logo variations and design process
  const galleryImages = [
    {
      src: "/logo-kkn.png",
      alt: "Logo Paliyan Menawan - Final Design",
      category: "Final Logo",
      description: "Desain final logo yang menggambarkan keindahan Paliyan"
    },
    {
      src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      alt: "Proses Desain Logo",
      category: "Design Process",
      description: "Proses kreatif dalam pembuatan identitas visual"
    },
    {
      src: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop",
      alt: "Aplikasi Logo pada Media",
      category: "Logo Application",
      description: "Penerapan logo pada berbagai media dan merchandise"
    },
    {
      src: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop",
      alt: "Color Palette Logo",
      category: "Color Study",
      description: "Studi warna yang digunakan dalam desain logo"
    }
  ];

  // Scroll parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Gallery functions - wrapped with useCallback to fix dependency issues
  const openGallery = useCallback((index: number = 0) => {
    setGalleryIndex(index);
    setIsGalleryOpen(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const closeGallery = useCallback(() => {
    setIsGalleryOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  }, []);

  const nextGalleryImage = useCallback(() => {
    setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevGalleryImage = useCallback(() => {
    setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  // Keyboard navigation - FIXED dependencies
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isGalleryOpen) return;
      if (e.key === 'ArrowLeft') prevGalleryImage();
      if (e.key === 'ArrowRight') nextGalleryImage();
      if (e.key === 'Escape') closeGallery();
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [isGalleryOpen, nextGalleryImage, prevGalleryImage, closeGallery]);

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden"
      >
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          {/* Floating Geometric Shapes */}
          <div 
            className="absolute top-20 left-4 w-16 h-16 bg-blue-200/30 rounded-full animate-float"
            style={{
              transform: `translateY(${scrollY * 0.1}px) translateX(${Math.sin(scrollY * 0.002) * 10}px)`
            }}
          ></div>
          <div 
            className="absolute top-40 right-8 w-12 h-12 bg-orange-200/40 rotate-45 animate-spin-slow"
            style={{
              transform: `translateY(${scrollY * -0.05}px) rotate(${scrollY * 0.1}deg)`
            }}
          ></div>
          <div 
            className="absolute bottom-32 left-8 w-20 h-20 bg-green-200/30 rounded-full animate-bounce"
            style={{
              animationDelay: '1s',
              transform: `translateY(${scrollY * 0.03}px)`
            }}
          ></div>

          {/* Animated Wave Pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
            <svg 
              className="absolute bottom-0 w-full h-full animate-wave" 
              viewBox="0 0 1440 320" 
              preserveAspectRatio="none"
            >
              <path 
                fill="url(#wave-gradient)" 
                d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,165.3C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
              <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'#0f766e', stopOpacity:0.8}} />
                  <stop offset="50%" style={{stopColor:'#06b6d4', stopOpacity:0.6}} />
                  <stop offset="100%" style={{stopColor:'#0f766e', stopOpacity:0.8}} />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Mobile Optimized Grid - FIXED unused parameter */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="grid grid-cols-6 sm:grid-cols-8 gap-2 h-full"
              style={{
                transform: `translateY(${scrollY * 0.02}px) rotate(0.5deg)`
              }}
            >
              {Array.from({ length: 48 }).map((_, gridIndex) => (
                <div 
                  key={gridIndex} 
                  className="border border-gray-300 rounded animate-pulse"
                  style={{
                    animationDelay: `${gridIndex * 0.1}s`,
                    animationDuration: '4s'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Enhanced Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 transition-all duration-1000 ${
              isVisible ? 'animate-slide-down opacity-100' : 'opacity-0 -translate-y-10'
            }`}>
              <svg className="w-4 h-4 mr-2 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Logo & Identitas Visual
            </div>
            
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent mb-6 tracking-tight transition-all duration-1000 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
            }`}>
              DESAIN LOGO
            </h2>
            
            <p className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.3s' }}>
              Identitas visual yang menggambarkan keindahan dan filosofi Paliyan Menawan
            </p>
          </div>

          {/* Interactive Logo Container */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className={`relative transition-all duration-1000 ${
                isVisible ? 'animate-logo-entrance opacity-100' : 'opacity-0 scale-50'
              }`}>
                {/* Glowing Effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                
                {/* Main Logo Container */}
                <div 
                  ref={logoRef}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] cursor-pointer group"
                  onClick={() => openGallery(0)}
                >
                  {/* Interactive Ring */}
                  <div className="absolute -inset-4 border-2 border-gray-200 group-hover:border-blue-400 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-180 animate-spin-slow"></div>
                  
                  {/* Logo Background */}
                  <div className="relative w-full h-full bg-white rounded-full shadow-2xl p-6 sm:p-8 overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                    {/* Logo Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src="/logo-kkn.png"
                        alt="Logo Paliyan Menawan"
                        fill
                        className="object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-110"
                        priority
                      />
                      {/* Fallback gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-orange-300 to-green-700 rounded-full opacity-20"></div>
                    </div>
                    
                    {/* Click to View Gallery Indicator */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Trigger Button */}
            <div className="text-center mb-8">
              <button
                onClick={() => openGallery(0)}
                className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center mx-auto"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Lihat Galeri Desain
              </button>
            </div>

            {/* Simple Logo Description */}
            <div className="max-w-4xl mx-auto">
              <div className={`bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-gray-100 transition-all duration-1000 ${
                isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'
              }`} style={{ animationDelay: '0.8s' }}>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                    Logo Paliyan Menawan
                  </h3>
                  
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Logo "Paliyan Menawan" menggambarkan harmoni antara alam dan masyarakat lokal. 
                    Desain ini memadukan elemen langit biru yang melambangkan harapan, matahari 
                    yang merepresentasikan semangat dan energi positif, serta tiga pegunungan yang 
                    menggambarkan tiga desa sasaran program KKN-PPM: Karangduwet, Grogol, dan Pampang. 
                    Identitas visual ini mencerminkan komitmen kami dalam membangun pemberdayaan 
                    masyarakat yang berkelanjutan dengan menghargai kearifan lokal dan keindahan 
                    alam Gunung Kidul.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Gallery Header */}
            <div className="absolute top-0 left-0 right-0 z-30 bg-gradient-to-b from-black/80 to-transparent p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-lg sm:text-xl font-bold">{galleryImages[galleryIndex].category}</h3>
                  <p className="text-sm opacity-80">{galleryIndex + 1} / {galleryImages.length}</p>
                </div>
                <button
                  onClick={closeGallery}
                  className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Gallery Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] rounded-lg overflow-hidden">
              <Image
                src={galleryImages[galleryIndex].src}
                alt={galleryImages[galleryIndex].alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevGalleryImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextGalleryImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Gallery Footer */}
            <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
              <h4 className="text-white text-lg font-semibold mb-2">{galleryImages[galleryIndex].alt}</h4>
              <p className="text-white/80 text-sm mb-4">{galleryImages[galleryIndex].description}</p>
              
              {/* Gallery Thumbnails */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {galleryImages.map((image, thumbnailIndex) => (
                  <button
                    key={thumbnailIndex}
                    onClick={() => setGalleryIndex(thumbnailIndex)}
                    className={`relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      thumbnailIndex === galleryIndex 
                        ? 'border-white scale-110' 
                        : 'border-white/30 hover:border-white/60 hover:scale-105'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Touch Instructions */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-xs sm:hidden animate-pulse">
              Tap kiri/kanan atau gunakan tombol untuk navigasi
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoSection;