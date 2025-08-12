"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface DesaHeroSectionProps {
  desaName: string;
}

const DesaHeroSection: React.FC<DesaHeroSectionProps> = ({ desaName }) => {
  // Data hero untuk setiap desa dengan galeri foto
  const heroData = {
    'Karangduwet': {
      title: 'Desa Karangduwet',
      subtitle: 'Pesona Alam dan Budaya Tradisional',
      description: 'Menyaksikan keindahan sawah hijau yang membentang luas dan kehidupan masyarakat yang harmonis di tengah alam Paliyan.',
      images: [
        {
          src: '/logo-kkn.png', // Ganti dengan foto desa
          alt: 'Sawah hijau di Karangduwet',
          category: 'Alam'
        },
        {
          src: '/logo-kkn.png', // Ganti dengan foto aktivitas
          alt: 'Aktivitas masyarakat',
          category: 'Budaya'
        },
        {
          src: '/logo-kkn.png', // Ganti dengan foto program
          alt: 'Program KKN',
          category: 'Program'
        }
      ]
    },
    'Grogol': {
      title: 'Desa Grogol',
      subtitle: 'Sentral Budaya dan Ekonomi Kreatif',
      description: 'Menggali potensi budaya lokal dan mengembangkan ekonomi kreatif yang berdampak positif bagi masyarakat.',
      images: [
        {
          src: '/logo-kkn.png',
          alt: 'Pusat kebudayaan Grogol',
          category: 'Budaya'
        },
        {
          src: '/logo-kkn.png',
          alt: 'UMKM lokal',
          category: 'UMKM'
        },
        {
          src: '/logo-kkn.png',
          alt: 'Workshop ekonomi kreatif',
          category: 'Workshop'
        }
      ]
    },
    'Pampang': {
      title: 'Desa Pampang',
      subtitle: 'Surga Tersembunyi di Paliyan',
      description: 'Menikmati pesona alam pegunungan yang asri dengan kearifan lokal yang masih terjaga dengan baik.',
      images: [
        {
          src: '/logo-kkn.png',
          alt: 'Pemandangan pegunungan Pampang',
          category: 'Alam'
        },
        {
          src: '/logo-kkn.png',
          alt: 'Tradisi lokal',
          category: 'Tradisi'
        },
        {
          src: '/logo-kkn.png',
          alt: 'Kegiatan pemberdayaan',
          category: 'Pemberdayaan'
        }
      ]
    }
  };

  const currentDesa = heroData[desaName as keyof typeof heroData];

  // State management seperti di HeroSection
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  // Check if component is mounted to avoid SSR issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto change image every 4 seconds
  useEffect(() => {
    if (currentDesa?.images) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === currentDesa.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(timer);
    }
  }, [currentDesa?.images]);

  // Scroll effect for parallax
  useEffect(() => {
    if (!isMounted) return;
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  // Mouse move effect for desktop
  useEffect(() => {
    if (!isMounted) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMounted]);

  // Intersection Observer for entrance animation
  useEffect(() => {
    if (!isMounted) return;
    
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
  }, [isMounted]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!currentDesa?.images) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        setCurrentImageIndex((prev) => 
          prev === currentDesa.images.length - 1 ? 0 : prev + 1
        );
      } else {
        setCurrentImageIndex((prev) => 
          prev === 0 ? currentDesa.images.length - 1 : prev - 1
        );
      }
    }
  };

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
    if (!currentDesa?.images) return;
    setGalleryIndex((prev) => 
      prev === currentDesa.images.length - 1 ? 0 : prev + 1
    );
  }, [currentDesa?.images]);

  const prevGalleryImage = useCallback(() => {
    if (!currentDesa?.images) return;
    setGalleryIndex((prev) => 
      prev === 0 ? currentDesa.images.length - 1 : prev - 1
    );
  }, [currentDesa?.images]);

  // Keyboard navigation for gallery
  useEffect(() => {
    if (!isMounted) return;
    
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isGalleryOpen) return;
      
      if (e.key === 'ArrowLeft') prevGalleryImage();
      if (e.key === 'ArrowRight') nextGalleryImage();
      if (e.key === 'Escape') closeGallery();
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isGalleryOpen, closeGallery, prevGalleryImage, nextGalleryImage, isMounted]);

  if (!currentDesa) {
    return <div>Desa tidak ditemukan</div>;
  }

  return (
    <>
      <section 
        ref={heroRef}
        className="pt-16 sm:pt-20 lg:pt-24 relative w-full min-h-screen overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Enhanced Animated Background Pattern with Parallax */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50">
          {/* Parallax Decorative Circles */}
          <div 
            className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20 + scrollY * 0.1}px)`
            }}
          ></div>
          <div 
            className="absolute top-40 right-10 w-56 h-56 sm:w-72 sm:h-72 bg-green-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
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
        </div>

        {/* Main Content Container */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
          
          {/* Left Content - Text */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            {/* Badge */}
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 transition-all duration-1000 ${
              isVisible ? 'animate-slide-down opacity-100' : 'opacity-0 -translate-y-10'
            }`}>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              KKN-PPM UGM 2025
            </div>

            {/* Main Title */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight transition-all duration-1000 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.2s' }}>
              <span className="block animate-fade-in-word">{currentDesa.title}</span>
              <span className="block text-blue-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mt-2 animate-fade-in-word animation-delay-400">
                {currentDesa.subtitle}
              </span>
            </h1>

            {/* Description */}
            <p className={`text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.6s' }}>
              {currentDesa.description}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-1000 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.8s' }}>
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center touch-manipulation">
                <span>Jelajahi Program</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="group border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 active:scale-95 flex items-center justify-center touch-manipulation">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Lihat UMKM
              </button>
            </div>

            {/* Gallery Button - Moved Below */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '1s' }}>
              <button 
                onClick={() => openGallery(0)}
                className="group w-full sm:w-auto border-2 border-green-300 hover:border-green-600 hover:bg-green-50 text-green-700 hover:text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 active:scale-95 flex items-center justify-center touch-manipulation"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Lihat Galeri Foto
              </button>
            </div>

            {/* Mobile Image Preview */}
            <div className="mt-8 lg:hidden">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="relative bg-white p-2 sm:p-3 rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-105">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="relative w-full h-48 sm:h-56">
                      {currentDesa.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`absolute inset-0 transition-all duration-1000 ${
                            imgIndex === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                          }`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover rounded-xl cursor-pointer"
                            onClick={() => openGallery(imgIndex)}
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                      ))}
                      
                      {/* Mobile Image Category Badge */}
                      <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded-lg text-xs font-medium animate-fade-in">
                        {currentDesa.images[currentImageIndex].category}
                      </div>
                    </div>

                    {/* Mobile Image Caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 rounded-b-xl">
                      <p className="text-white font-medium text-xs sm:text-sm">
                        {currentDesa.images[currentImageIndex].alt}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Indicators */}
                  <div className="flex justify-center mt-3 space-x-1.5">
                    {currentDesa.images.map((_, indicatorIndex) => (
                      <button
                        key={indicatorIndex}
                        onClick={() => setCurrentImageIndex(indicatorIndex)}
                        className={`h-1.5 rounded-full transition-all duration-300 touch-manipulation ${
                          indicatorIndex === currentImageIndex 
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

          {/* Right Content - Desktop Image Frame */}
          <div className="hidden lg:block flex-1 max-w-lg ml-12">
            <div className="relative group">
              {/* Decorative Frame Background */}
              <div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-green-500 to-blue-400 rounded-2xl blur-lg opacity-30 animate-gradient-shift group-hover:opacity-50 transition-opacity"
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
                <div className="relative overflow-hidden rounded-xl">
                  {/* Changing Images */}
                  <div className="relative w-full h-80 overflow-hidden rounded-xl cursor-pointer" onClick={() => openGallery(currentImageIndex)}>
                    {currentDesa.images.map((image, desktopImgIndex) => (
                      <div
                        key={desktopImgIndex}
                        className={`absolute inset-0 transition-all duration-1000 ${
                          desktopImgIndex === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          priority={desktopImgIndex === 0}
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

                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="text-white">
                      <span className="inline-block px-2 py-1 bg-white/20 rounded text-xs font-medium mb-2">
                        {currentDesa.images[currentImageIndex].category}
                      </span>
                      <p className="font-medium text-sm">
                        {currentDesa.images[currentImageIndex].alt}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {currentDesa.images.map((_, desktopIndicatorIndex) => (
                    <button
                      key={desktopIndicatorIndex}
                      onClick={() => setCurrentImageIndex(desktopIndicatorIndex)}
                      className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
                        desktopIndicatorIndex === currentImageIndex 
                          ? 'bg-blue-600 w-8 shadow-lg' 
                          : 'bg-gray-300 w-2 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Gallery Header */}
            <div className="absolute top-0 left-0 right-0 z-30 bg-gradient-to-b from-black/80 to-transparent p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-lg sm:text-xl font-bold">{currentDesa.images[galleryIndex].category}</h3>
                  <p className="text-sm opacity-80">{galleryIndex + 1} / {currentDesa.images.length}</p>
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
                src={currentDesa.images[galleryIndex].src}
                alt={currentDesa.images[galleryIndex].alt}
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
              <p className="text-white text-sm sm:text-base mb-4">{currentDesa.images[galleryIndex].alt}</p>
              
              {/* Gallery Thumbnails */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {currentDesa.images.map((image, thumbIndex) => (
                  <button
                    key={thumbIndex}
                    onClick={() => setGalleryIndex(thumbIndex)}
                    className={`relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      thumbIndex === galleryIndex 
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
          </div>
        </div>
      )}
    </>
  );
};

export default DesaHeroSection;