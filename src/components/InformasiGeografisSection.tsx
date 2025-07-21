"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { desaData } from './DesaSection';

const InformasiGeografisSection = () => {
  const [hoveredDesa, setHoveredDesa] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer untuk animasi scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0');
            if (!visibleCards.includes(cardId)) {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, cardId]);
              }, cardId * 200); // Stagger animation
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-card-id]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [visibleCards]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Transform data dari DesaSection untuk keperluan InformasiGeografisSection
  const desaInfo = desaData.map(desa => ({
    id: desa.id,
    nama: desa.namaDesa,
    deskripsi: desa.deskripsiGeografis,
    foto: desa.fotoGeografis,
    reverse: desa.reverse,
    color: desa.color,
    icon: desa.icon,
    highlight: desa.highlight,
    koordinator: desa.koordinator.nama,
    anggotaCount: desa.anggota.length,
    programCount: desa.programCount,
    umkmCount: desa.umkmCount,
    isMultipleKoordinator: desa.isMultipleKoordinator
  }));

  const getColorClasses = (color: string, variant: 'primary' | 'secondary' | 'accent' | 'light') => {
    const colorMap = {
      blue: {
        primary: 'bg-blue-600',
        secondary: 'bg-blue-50',
        accent: 'text-blue-600',
        light: 'from-blue-400/20 to-blue-600/20'
      },
      teal: {
        primary: 'bg-teal-600',
        secondary: 'bg-teal-50',
        accent: 'text-teal-600',
        light: 'from-teal-400/20 to-teal-600/20'
      },
      emerald: {
        primary: 'bg-emerald-600',
        secondary: 'bg-emerald-50',
        accent: 'text-emerald-600',
        light: 'from-emerald-400/20 to-emerald-600/20'
      }
    };
    return colorMap[color as keyof typeof colorMap][variant];
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 w-full overflow-hidden"
    >
      {/* Enhanced Background Decorations with Parallax */}
      <div className="absolute inset-0">
        {/* Animated Background Elements with parallax */}
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"
          style={{
            transform: `translateY(${scrollY * 0.1}px) translateX(${Math.sin(scrollY * 0.002) * 20}px)`
          }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-80 h-80 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
          style={{
            transform: `translateY(${scrollY * -0.1}px) translateX(${Math.cos(scrollY * 0.002) * 30}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-64 h-64 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
          style={{
            transform: `translateY(${scrollY * 0.05}px) translateX(${Math.sin(scrollY * 0.003) * 15}px)`
          }}
        ></div>
        
        {/* Floating Geometric Shapes - Mobile Optimized */}
        <div className="absolute top-1/4 left-4 sm:left-1/4">
          <div 
            className="w-16 h-16 sm:w-24 sm:h-24 border-2 border-blue-300/30 rotate-45 animate-spin-slow"
            style={{ animationDuration: '20s' }}
          ></div>
        </div>
        <div className="absolute bottom-1/3 right-4 sm:right-1/4">
          <div 
            className="w-12 h-12 sm:w-20 sm:h-20 bg-teal-300/20 rounded-full animate-bounce"
            style={{ animationDuration: '3s' }}
          ></div>
        </div>

        {/* Dynamic Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="grid grid-cols-6 sm:grid-cols-8 gap-2 sm:gap-4 h-full"
            style={{
              transform: `translateY(${scrollY * 0.02}px)`
            }}
          >
            {Array.from({ length: 48 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-gray-300 rounded animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '4s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Header Section with Staggered Animation */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 animate-fade-in-scale">
            <svg className="w-4 h-4 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Lokasi KKN-PPM
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight animate-slide-up">
            Informasi 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 animate-gradient-text">
              Geografis
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-300">
            Mengenal lebih dekat tiga desa sasaran KKN-PPM UGM di Kecamatan Paliyan, Kabupaten Gunung Kidul
          </p>
        </div>

        {/* Interactive Desa Cards with Enhanced Mobile Effects */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {desaInfo.map((desa, index) => (
            <div 
              key={desa.id}
              data-card-id={desa.id}
              className={`group relative ${
                desa.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } flex flex-col lg:flex lg:items-center gap-8 lg:gap-16 ${
                visibleCards.includes(desa.id) 
                  ? 'animate-slide-up-mobile opacity-100' 
                  : 'opacity-0 translate-y-10'
              } transition-all duration-700`}
              onMouseEnter={() => setHoveredDesa(desa.id)}
              onMouseLeave={() => setHoveredDesa(null)}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Enhanced Connecting Line with Animation */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent">
                <div className={`h-full bg-gradient-to-r ${getColorClasses(desa.color, 'light')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center`}></div>
              </div>
              
              {/* Text Content with Mobile-First Animations */}
              <div className="lg:flex-1 lg:max-w-2xl relative z-20">
                <div className={`relative bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform ${
                  hoveredDesa === desa.id ? 'scale-105 -rotate-1' : 'hover:scale-102'
                } ${
                  visibleCards.includes(desa.id) ? 'animate-card-pop' : ''
                } border border-gray-100 group-hover:border-gray-200`}>
                  
                  {/* Animated Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 ${getColorClasses(desa.color, 'primary')} rounded-bl-3xl rounded-tr-3xl flex items-center justify-center text-white text-xl sm:text-2xl transform transition-all duration-500 ${
                    hoveredDesa === desa.id ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                  } ${visibleCards.includes(desa.id) ? 'animate-bounce-in' : ''}`}>
                    <span className="animate-wiggle">{desa.icon}</span>
                  </div>
                  
                  {/* Enhanced Badge with Ripple Effect */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full ${getColorClasses(desa.color, 'secondary')} ${getColorClasses(desa.color, 'accent')} text-sm font-medium mb-4 relative overflow-hidden group-hover:shadow-lg transition-all duration-300`}>
                    <div className="absolute inset-0 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <span className="w-2 h-2 rounded-full bg-current mr-2 animate-pulse"></span>
                    <span className="relative z-10">{desa.highlight}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight animate-typing">
                    {desa.nama}
                  </h3>
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                    {desa.deskripsi}
                  </p>
                  
                  {/* Enhanced Info Cards with Horizontal Layout */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {/* Koordinator Card */}
                    <div className={`${getColorClasses(desa.color, 'secondary')} rounded-lg p-2 sm:p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-md ${
                      visibleCards.includes(desa.id) ? 'animate-slide-right' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(index * 200) + 400}ms` }}>
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 ${getColorClasses(desa.color, 'primary')} rounded-lg flex items-center justify-center mb-1 sm:mb-2 animate-pulse`}>
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className={`text-xs font-medium ${getColorClasses(desa.color, 'accent')} mb-1`}>
                          {desa.isMultipleKoordinator ? 'Koordinator' : 'Koordinator'}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                          {desa.isMultipleKoordinator ? (
                            <div className="space-y-0.5">
                              {desa.koordinator.split(' dan ').map((nama, idx) => (
                                <div key={idx} className="text-xs">
                                  {nama.trim()}
                                </div>
                              ))}
                            </div>
                          ) : (
                            desa.koordinator
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Tim Mahasiswa Card */}
                    <div className={`bg-gray-50 rounded-lg p-2 sm:p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-md ${
                      visibleCards.includes(desa.id) ? 'animate-slide-left' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(index * 200) + 500}ms` }}>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 rounded-lg flex items-center justify-center mb-1 sm:mb-2 animate-pulse">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm-7 9a7 7 0 1114 0v3H3v-3z" />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-600 mb-1">Tim</div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900">
                          {desa.anggotaCount} Anggota
                        </div>
                      </div>
                    </div>

                    {/* Program Kerja Card */}
                    <div className={`${getColorClasses(desa.color, 'secondary')} rounded-lg p-2 sm:p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-md ${
                      visibleCards.includes(desa.id) ? 'animate-slide-right' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(index * 200) + 600}ms` }}>
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 ${getColorClasses(desa.color, 'primary')} rounded-lg flex items-center justify-center mb-1 sm:mb-2 animate-pulse`}>
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className={`text-xs font-medium ${getColorClasses(desa.color, 'accent')} mb-1`}>
                          Program
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900">
                          {desa.programCount} Kegiatan
                        </div>
                      </div>
                    </div>
                    
                    {/* UMKM Card */}
                    <div className={`bg-gray-50 rounded-lg p-2 sm:p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-md ${
                      visibleCards.includes(desa.id) ? 'animate-slide-left' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(index * 200) + 700}ms` }}>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 rounded-lg flex items-center justify-center mb-1 sm:mb-2 animate-pulse">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-600 mb-1">UMKM</div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900">
                          {desa.umkmCount} Unit
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Simple CTA Button */}
                  <div className="mt-6 sm:mt-8">
                    <a
                      href={`#${desa.nama.toLowerCase().replace('desa ', '').replace(' ', '')}`}
                      className={`group w-full flex items-center justify-center py-3 px-6 ${getColorClasses(desa.color, 'primary')} text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="mr-2 relative z-10">📍 Kunjungi {desa.nama}</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 transform transition-transform group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Enhanced Image Container with Mobile Optimizations */}
              <div className="lg:flex-1 lg:max-w-2xl relative z-20">
                <div className="relative group">
                  {/* Floating Number Badge with Enhanced Animation */}
                  <div className={`absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 ${getColorClasses(desa.color, 'primary')} rounded-2xl flex items-center justify-center text-white text-lg sm:text-2xl font-bold shadow-xl z-30 transform transition-all duration-500 ${
                    hoveredDesa === desa.id ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                  } ${visibleCards.includes(desa.id) ? 'animate-bounce-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index * 200) + 800}ms` }}>
                    <span className="animate-pulse">{desa.id}</span>
                  </div>
                  
                  {/* Main Image Frame with Enhanced Mobile Effects */}
                  <div className={`relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-700 ${
                    hoveredDesa === desa.id ? 'scale-105 rotate-1' : 'group-hover:scale-102'
                  } ${visibleCards.includes(desa.id) ? 'animate-image-reveal' : 'opacity-0 scale-95'}`}
                  style={{ animationDelay: `${(index * 200) + 200}ms` }}>
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(desa.color, 'light')} z-10 transition-opacity duration-500 group-hover:opacity-75`}></div>
                    
                    <Image
                      src={desa.foto}
                      alt={`Geografis ${desa.nama}`}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    />
                    
                    {/* Enhanced Bottom Overlay with Animation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 sm:p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-white">
                        <h4 className="font-bold text-base sm:text-lg mb-1 animate-slide-up">{desa.nama}</h4>
                        <p className="text-xs sm:text-sm opacity-90 animate-slide-up animation-delay-100">{desa.highlight}</p>
                      </div>
                    </div>
                    
                    {/* Animated Decorative Corners */}
                    {[
                      { position: "top-2 left-2 sm:top-4 sm:left-4", corner: "tl" },
                      { position: "top-2 right-2 sm:top-4 sm:right-4", corner: "tr" },
                      { position: "bottom-2 left-2 sm:bottom-4 sm:left-4", corner: "bl" },
                      { position: "bottom-2 right-2 sm:bottom-4 sm:right-4", corner: "br" }
                    ].map((corner, i) => (
                      <div 
                        key={i}
                        className={`absolute ${corner.position} w-6 h-6 sm:w-8 sm:h-8 border-2 border-white/60 rounded-${corner.corner}-lg z-20 transform transition-all duration-500 ${
                          visibleCards.includes(desa.id) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}
                        style={{ 
                          animationDelay: `${(index * 200) + (i * 100) + 400}ms`,
                          borderWidth: corner.corner === 'tl' ? '2px 0 0 2px' :
                                      corner.corner === 'tr' ? '2px 2px 0 0' :
                                      corner.corner === 'bl' ? '0 0 2px 2px' :
                                      '0 2px 2px 0'
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Enhanced Floating Elements */}
                  <div className={`absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 ${getColorClasses(desa.color, 'primary')} rounded-full animate-pulse opacity-80 ${
                    visibleCards.includes(desa.id) ? 'animate-float' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index * 200) + 1000}ms` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformasiGeografisSection;