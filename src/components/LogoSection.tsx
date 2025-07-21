"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const LogoSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-blue-400 via-orange-300 to-green-600 overflow-hidden"
      >
        {/* Creative Wave Background with Logo Colors */}
        <div className="absolute inset-0">
          {/* Multiple Layered Waves */}
          <div className="absolute inset-0">
            {/* Wave Layer 1 - Blue (Sky) */}
            <svg 
              className="absolute top-0 w-full h-full animate-wave opacity-80" 
              viewBox="0 0 1440 800" 
              preserveAspectRatio="none"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            >
              <path 
                fill="url(#wave-blue)" 
                d="M0,100L48,120C96,140,192,180,288,200C384,220,480,220,576,210C672,200,768,180,864,170C960,160,1056,160,1152,170C1248,180,1344,200,1392,210L1440,220L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
              <defs>
                <linearGradient id="wave-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0.9}} />
                  <stop offset="50%" style={{stopColor:'#60a5fa', stopOpacity:0.7}} />
                  <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0.9}} />
                </linearGradient>
              </defs>
            </svg>

            {/* Wave Layer 2 - Orange (Sun) */}
            <svg 
              className="absolute top-20 w-full h-full animate-wave-reverse opacity-70" 
              viewBox="0 0 1440 800" 
              preserveAspectRatio="none"
              style={{
                transform: `translateY(${scrollY * 0.08}px)`,
                animationDelay: '1s'
              }}
            >
              <path 
                fill="url(#wave-orange)" 
                d="M0,200L48,180C96,160,192,120,288,140C384,160,480,240,576,260C672,280,768,240,864,220C960,200,1056,200,1152,210C1248,220,1344,240,1392,250L1440,260L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
              <defs>
                <linearGradient id="wave-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'#f97316', stopOpacity:0.8}} />
                  <stop offset="50%" style={{stopColor:'#fb923c', stopOpacity:0.6}} />
                  <stop offset="100%" style={{stopColor:'#ea580c', stopOpacity:0.8}} />
                </linearGradient>
              </defs>
            </svg>

            {/* Wave Layer 3 - Green (Mountains) */}
            <svg 
              className="absolute bottom-0 w-full h-full animate-wave opacity-60" 
              viewBox="0 0 1440 800" 
              preserveAspectRatio="none"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
                animationDelay: '2s'
              }}
            >
              <path 
                fill="url(#wave-green)" 
                d="M0,600L48,580C96,560,192,520,288,540C384,560,480,640,576,660C672,680,768,640,864,620C960,600,1056,600,1152,610C1248,620,1344,640,1392,650L1440,660L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
              />
              <defs>
                <linearGradient id="wave-green" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'#15803d', stopOpacity:0.9}} />
                  <stop offset="50%" style={{stopColor:'#22c55e', stopOpacity:0.7}} />
                  <stop offset="100%" style={{stopColor:'#166534', stopOpacity:0.9}} />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating Elements with Logo Colors */}
          <div 
            className="absolute top-16 left-8 w-20 h-20 bg-blue-400/40 rounded-full animate-float blur-sm"
            style={{
              transform: `translateY(${scrollY * 0.12}px) translateX(${Math.sin(scrollY * 0.003) * 15}px)`,
              animationDelay: '0.5s'
            }}
          ></div>
          
          <div 
            className="absolute top-32 right-12 w-16 h-16 bg-orange-400/50 rounded-full animate-bounce blur-sm"
            style={{
              transform: `translateY(${scrollY * -0.08}px)`,
              animationDelay: '1.2s'
            }}
          ></div>
          
          <div 
            className="absolute bottom-40 left-16 w-24 h-24 bg-green-500/30 rounded-full animate-pulse blur-sm"
            style={{
              transform: `translateY(${scrollY * 0.06}px)`,
              animationDelay: '2s'
            }}
          ></div>

          {/* Ripple Effects */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-300/30 rounded-full animate-ping"></div>
          <div 
            className="absolute top-3/4 right-1/4 w-40 h-40 border-2 border-orange-300/20 rounded-full animate-ping"
            style={{ animationDelay: '1s' }}
          ></div>
          <div 
            className="absolute bottom-1/4 left-1/2 w-28 h-28 border-2 border-green-300/40 rounded-full animate-ping"
            style={{ animationDelay: '2s' }}
          ></div>

          {/* Subtle Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 60%, rgba(249, 115, 22, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)
              `,
              transform: `translateY(${scrollY * 0.03}px) scale(1.1)`
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Enhanced Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 transition-all duration-1000 ${
              isVisible ? 'animate-slide-down opacity-100' : 'opacity-0 -translate-y-10'
            }`}>
              <svg className="w-4 h-4 mr-2 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Logo & Identitas Visual
            </div>
            
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-2xl mb-6 tracking-tight transition-all duration-1000 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
            }`}>
              DESAIN LOGO
            </h2>
            
            <p className={`text-lg sm:text-xl text-white/90 drop-shadow-lg max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
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
                {/* Enhanced Glowing Effect with Logo Colors */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/60 via-orange-400/60 to-green-500/60 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-300/40 via-orange-300/40 to-green-400/40 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Main Logo Container */}
                <div 
                  ref={logoRef}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] group"
                >
                  {/* Interactive Ring with Logo Colors */}
                  <div className="absolute -inset-4 border-2 border-white/30 group-hover:border-white/70 rounded-full transition-all duration-500 group-hover:scale-110 animate-spin-slow"></div>
                  
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoSection;