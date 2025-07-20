"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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

  const desaInfo = [
    {
      id: 1,
      nama: "Desa Karangduwet",
      deskripsi: "Desa Karangduwet terletak di bagian utara Kecamatan Paliyan dengan karakteristik wilayah yang didominasi oleh area pertanian dan pemukiman. Desa ini memiliki potensi wisata alam yang menarik dengan panorama persawahan yang hijau dan udara yang sejuk.",
      foto: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
      reverse: false,
      color: "blue",
      icon: "🌾",
      highlight: "Wisata Alam & Pertanian"
    },
    {
      id: 2,
      nama: "Desa Grogol", 
      deskripsi: "Desa Grogol berada di wilayah tengah Kecamatan Paliyan dengan topografi yang relatif datar. Desa ini dikenal dengan tradisi budaya yang masih kental dan masyarakat yang ramah. Mata pencaharian utama penduduk adalah bertani dan berternak.",
      foto: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      reverse: true,
      color: "teal",
      icon: "🏛️",
      highlight: "Budaya & Tradisi"
    },
    {
      id: 3,
      nama: "Desa Pampang",
      deskripsi: "Desa Pampang terletak di bagian selatan Kecamatan Paliyan dengan kondisi geografis yang unik karena berbatasan langsung dengan kawasan karst Gunung Kidul. Desa ini memiliki potensi wisata gua dan sumber mata air alami yang jernih.",
      foto: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", 
      reverse: false,
      color: "emerald",
      icon: "🏔️",
      highlight: "Karst & Mata Air"
    }
  ];

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
                  
                  {/* Enhanced Info Cards with Stagger Animation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className={`${getColorClasses(desa.color, 'secondary')} rounded-xl p-3 sm:p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-md ${
                      visibleCards.includes(desa.id) ? 'animate-slide-right' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(index * 200) + 400}ms` }}>
                      <div className="flex items-center mb-2">
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 ${getColorClasses(desa.color, 'primary')} rounded-lg flex items-center justify-center mr-3 animate-pulse`}>
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className={`text-xs sm:text-sm font-medium ${getColorClasses(desa.color, 'accent')}`}>
                          Koordinator
                        </div>
                      </div>
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 ml-9 sm:ml-11">
                        {desa.id === 1 ? "Bro Susanto" : desa.id === 2 ? "Dewi Sartika" : "Ahmad Fadli"}
                      </div>
                    </div>
                    
                    <div className={`bg-gray-50 rounded-xl p-3 sm:p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-md ${
                      visibleCards.includes(desa.id) ? 'animate-slide-left' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(index * 200) + 600}ms` }}>
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-lg flex items-center justify-center mr-3 animate-pulse">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm-7 9a7 7 0 1114 0v3H3v-3z" />
                          </svg>
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-gray-600">Tim Mahasiswa</div>
                      </div>
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 ml-9 sm:ml-11">
                        {desa.id === 1 ? "6" : desa.id === 2 ? "5" : "7"} Anggota
                      </div>
                    </div>
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

        {/* Enhanced CTA Section with Mobile Animations */}
        <div className="mt-16 sm:mt-20 lg:mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 rounded-2xl sm:rounded-3xl blur-lg opacity-20 animate-gradient-shift"></div>
          
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-16 text-white overflow-hidden animate-slide-up">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-mobile" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M0 24V0h24" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-mobile)"/>
              </svg>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl mb-4 sm:mb-6 animate-bounce-in">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 animate-slide-up">
                Jelajahi Lebih Dalam!
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-300">
                Kunjungi halaman khusus setiap desa untuk mengetahui program kerja, UMKM, galeri kegiatan, dan informasi lengkap lainnya.
              </p>
              
              <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center animate-slide-up animation-delay-600">
                {desaInfo.map((desa, index) => (
                  <a
                    key={desa.id}
                    href={`#${desa.nama.toLowerCase().replace('desa ', '').replace(' ', '')}`}
                    className={`group bg-white ${getColorClasses(desa.color, 'accent')} px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 w-full max-w-xs transform hover:scale-105 hover:shadow-xl flex items-center justify-center animate-slide-up`}
                    style={{ animationDelay: `${600 + (index * 200)}ms` }}
                  >
                    <span className="mr-2 animate-wiggle">{desa.icon}</span>
                    <span className="text-sm sm:text-base">{desa.nama}</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformasiGeografisSection;