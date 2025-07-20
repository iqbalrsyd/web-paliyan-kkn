"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  // Array gambar yang akan berganti-ganti
  const heroImages = [
    {
      src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      alt: 'Tim KKN Bersama Masyarakat Desa',
      category: 'Tim'
    },
    {
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
      alt: 'Kegiatan Pemberdayaan Masyarakat',
      category: 'Pemberdayaan'
    },
    {
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      alt: 'Program Pendidikan di Desa',
      category: 'Pendidikan'
    },
    {
      src: 'https://images.unsplash.com/photo-1543269664-647b3eec5d6b?w=800&h=600&fit=crop',
      alt: 'Kegiatan Kesehatan Masyarakat',
      category: 'Kesehatan'
    },
    {
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
      alt: 'Workshop UMKM Lokal',
      category: 'UMKM'
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      alt: 'Gotong Royong Desa',
      category: 'Gotong Royong'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  // Auto change image every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Scroll effect for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse move effect for desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Only trigger swipe if horizontal movement is greater than vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe left - next image
        setCurrentImageIndex((prev) => 
          prev === heroImages.length - 1 ? 0 : prev + 1
        );
      } else {
        // Swipe right - previous image
        setCurrentImageIndex((prev) => 
          prev === 0 ? heroImages.length - 1 : prev - 1
        );
      }
    }
  };

  const openGallery = useCallback((index: number = 0) => {
    setGalleryIndex(index);
    setIsGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeGallery = useCallback(() => {
    setIsGalleryOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const nextGalleryImage = () => {
    setGalleryIndex((prev) => 
      prev === heroImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevGalleryImage = () => {
    setGalleryIndex((prev) => 
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isGalleryOpen) return;
      
      if (e.key === 'ArrowLeft') prevGalleryImage();
      if (e.key === 'ArrowRight') nextGalleryImage();
      if (e.key === 'Escape') closeGallery();
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isGalleryOpen, closeGallery]);

  return (
    <>
      <section 
        ref={heroRef}
        className="pt-16 sm:pt-20 lg:pt-24 relative w-full min-h-screen overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Enhanced Animated Background Pattern with Parallax */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50">
          {/* Parallax Decorative Circles */}
          <div 
            className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20 + scrollY * 0.1}px)`
            }}
          ></div>
          <div 
            className="absolute top-40 right-10 w-56 h-56 sm:w-72 sm:h-72 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
            style={{
              transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15 + scrollY * -0.1}px)`
            }}
          ></div>
          <div 
            className="absolute bottom-20 left-20 w-64 h-64 sm:w-80 sm:h-80 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
            style={{
              transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25 + scrollY * 0.05}px)`
            }}
          ></div>
          
          {/* Mobile-Optimized Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="grid grid-cols-8 sm:grid-cols-12 h-full"
              style={{
                transform: `translateY(${scrollY * 0.02}px)`
              }}
            >
              {Array.from({ length: window.innerWidth > 640 ? 12 : 8 }).map((_, i) => (
                <div 
                  key={i} 
                  className="border-r border-gray-400 animate-pulse"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '4s'
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Enhanced Floating Geometric Patterns */}
          <div className="absolute top-1/4 left-4 sm:left-1/4">
            <div 
              className="w-20 h-20 sm:w-32 sm:h-32 border-2 border-blue-300/20 rotate-45 animate-spin-slow hover:animate-spin"
              style={{
                transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px) rotate(45deg)`
              }}
            ></div>
          </div>
          <div className="absolute bottom-1/4 right-4 sm:right-1/4">
            <div 
              className="w-16 h-16 sm:w-24 sm:h-24 border-2 border-teal-300/20 rotate-12 animate-pulse hover:animate-bounce"
              style={{
                transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * -8}px) rotate(12deg)`
              }}
            ></div>
          </div>

          {/* New Mobile Floating Elements */}
          <div className="absolute top-1/3 right-8 sm:hidden">
            <div className="w-6 h-6 bg-pink-300/40 rounded-full animate-float"></div>
          </div>
          <div className="absolute bottom-1/3 left-8 sm:hidden">
            <div className="w-8 h-8 bg-yellow-300/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
          
          {/* Left Content - Text with Enhanced Mobile Animations */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            {/* Enhanced Badge with Mobile Animation */}
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 transition-all duration-1000 ${
              isVisible ? 'animate-slide-down opacity-100' : 'opacity-0 -translate-y-10'
            }`}>
              <svg className="w-4 h-4 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              KKN-PPM UGM 2025
            </div>

            {/* Enhanced Main Title with Stagger Animation */}
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.2s' }}>
              <span className="block animate-fade-in-word">Membangun</span>
              <span className="block animate-fade-in-word animation-delay-200">Desa</span>
              <span className="block text-blue-600 animate-fade-in-word animation-delay-400">Bersama Masyarakat</span>
              <span className="block text-teal-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mt-2 animate-fade-in-word animation-delay-600">
                Paliyan, Gunung Kidul
              </span>
            </h1>
            
            {/* Enhanced Subtitle */}
            <p className={`text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.8s' }}>
              Program KKN-PPM Universitas Gadjah Mada di tiga desa: Karangduwet, Grogol, dan Pampang. 
              Bersama membangun pemberdayaan masyarakat melalui inovasi dan kolaborasi.
            </p>

            {/* Enhanced CTA Buttons with Mobile Optimization */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '1s' }}>
              <button 
                onClick={() => document.getElementById('profil')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center"
              >
                <span>Pelajari Program Kami</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button 
                onClick={() => openGallery(0)}
                className="group border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 active:scale-95 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Lihat Galeri
              </button>
            </div>

            {/* Mobile Image Preview */}
            <div className="mt-8 lg:hidden">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="relative bg-white p-2 sm:p-3 rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-105">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="relative w-full h-48 sm:h-56">
                      {heroImages.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-1000 ${
                            index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                          }`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover rounded-xl cursor-pointer"
                            onClick={() => openGallery(index)}
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                      ))}
                      
                      {/* Mobile Image Category Badge */}
                      <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded-lg text-xs font-medium animate-fade-in">
                        {heroImages[currentImageIndex].category}
                      </div>
                      
                      {/* Mobile Touch Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20 rounded-xl">
                        <div className="bg-white/90 rounded-full p-2">
                          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Image Caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 rounded-b-xl">
                      <p className="text-white font-medium text-xs sm:text-sm">
                        {heroImages[currentImageIndex].alt}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Mobile Indicators */}
                  <div className="flex justify-center mt-3 space-x-1.5">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 touch-manipulation ${
                          index === currentImageIndex 
                            ? 'bg-blue-600 w-6' 
                            : 'bg-gray-300 w-1.5 hover:bg-gray-400 active:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Desktop Image Frame */}
          <div className="hidden lg:block flex-1 max-w-lg ml-12">
            <div className="relative group">
              {/* Enhanced Decorative Frame Background */}
              <div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 rounded-2xl blur-lg opacity-30 animate-gradient-shift group-hover:opacity-50 transition-opacity"
                style={{
                  transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`
                }}
              ></div>
              
              {/* Main Image Container */}
              <div 
                className="relative bg-white p-4 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 group-hover:scale-105"
                style={{
                  transform: `rotate(2deg) translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`
                }}
              >
                {/* Image Frame with Pattern */}
                <div className="relative overflow-hidden rounded-xl">
                  {/* Enhanced Pattern Overlay */}
                  <div className="absolute inset-0 z-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-blue-900/10"></div>
                    
                    {/* Animated Corner Decorations */}
                    {[
                      { pos: "top-4 left-4", corner: "tl" },
                      { pos: "top-4 right-4", corner: "tr" },
                      { pos: "bottom-4 left-4", corner: "bl" },
                      { pos: "bottom-4 right-4", corner: "br" }
                    ].map((corner, i) => (
                      <div 
                        key={i}
                        className={`absolute ${corner.pos} w-8 h-8 border-4 border-white/50 rounded-${corner.corner}-lg transform transition-all duration-300 group-hover:border-white/80 group-hover:scale-110`}
                        style={{ 
                          animationDelay: `${i * 0.1}s`,
                          borderWidth: corner.corner === 'tl' ? '4px 0 0 4px' :
                                      corner.corner === 'tr' ? '4px 4px 0 0' :
                                      corner.corner === 'bl' ? '0 0 4px 4px' :
                                      '0 4px 4px 0'
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Enhanced Changing Images */}
                  <div className="relative w-full h-80 overflow-hidden rounded-xl cursor-pointer" onClick={() => openGallery(currentImageIndex)}>
                    {heroImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ${
                          index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          priority={index === 0}
                          sizes="50vw"
                        />
                      </div>
                    ))}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform">
                        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="text-white">
                      <span className="inline-block px-2 py-1 bg-white/20 rounded text-xs font-medium mb-2">
                        {heroImages[currentImageIndex].category}
                      </span>
                      <p className="font-medium text-sm">
                        {heroImages[currentImageIndex].alt}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Image Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
                        index === currentImageIndex 
                          ? 'bg-blue-600 w-8 shadow-lg' 
                          : 'bg-gray-300 w-2 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div 
                className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full animate-bounce opacity-80 group-hover:opacity-100 transition-opacity"
                style={{
                  transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)`
                }}
              ></div>
              <div 
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-400 rounded-full animate-pulse opacity-60 group-hover:opacity-80 transition-opacity"
                style={{
                  transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)`
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`} style={{ animationDelay: '1.5s' }}>
          <div className="flex flex-col items-center text-gray-600">
            <span className="text-xs font-medium mb-2 animate-pulse">Scroll untuk melanjutkan</span>
            <div className="animate-bounce">
              <svg className="w-6 h-6 hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Gallery Header */}
            <div className="absolute top-0 left-0 right-0 z-30 bg-gradient-to-b from-black/80 to-transparent p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-lg sm:text-xl font-bold">{heroImages[galleryIndex].category}</h3>
                  <p className="text-sm opacity-80">{galleryIndex + 1} / {heroImages.length}</p>
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
                src={heroImages[galleryIndex].src}
                alt={heroImages[galleryIndex].alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            {/* Gallery Navigation */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={prevGalleryImage}
                className="ml-4 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={nextGalleryImage}
                className="mr-4 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Gallery Footer */}
            <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
              <p className="text-white text-sm sm:text-base mb-4">{heroImages[galleryIndex].alt}</p>
              
              {/* Gallery Thumbnails */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {heroImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setGalleryIndex(index)}
                    className={`relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === galleryIndex 
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

            {/* Mobile Swipe Instructions */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-xs sm:hidden animate-pulse">
              Swipe atau gunakan tombol untuk navigasi
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;