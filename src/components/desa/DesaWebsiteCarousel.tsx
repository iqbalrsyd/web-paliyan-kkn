"use client";

import React, { useState, useEffect } from 'react';
import { websiteData, WebsiteData, getWebsitesByDesa, getDesaWebsiteInfo } from '@/data/websiteData';

interface DesaWebsiteCarouselProps {
  desaName: string;
}

const DesaWebsiteCarousel: React.FC<DesaWebsiteCarouselProps> = ({ desaName }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const websites = getWebsitesByDesa(desaName);
  const desaInfo = getDesaWebsiteInfo(desaName);
  const totalSlides = websites.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'aktif': return 'bg-green-500 text-white';
      case 'maintenance': return 'bg-yellow-500 text-white';
      case 'development': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'aktif': return '●';
      case 'maintenance': return '⚠️';
      case 'development': return '🚧';
      default: return '●';
    }
  };

  if (websites.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
            🌐 Platform Digital
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Platform Digital Desa {desaName}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Platform digital sedang dalam pengembangan. Stay tuned untuk inovasi terbaru!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
            🌐 Platform Digital
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Platform Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Desa {desaName}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {desaInfo?.description || 'Transformasi digital untuk pelayanan modern dan pemberdayaan masyarakat'}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {websites.map((website) => (
                <div key={website.id} className="w-full flex-shrink-0">
                  <div className="block lg:grid lg:grid-cols-2 min-h-[500px]">
                    
                    {/* Screenshot */}
                    <div className="relative h-64 lg:h-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img 
                        src={website.screenshot} 
                        alt={website.name}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Status Badge */}
                      <div className="absolute top-6 left-6">
                        <span className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-bold shadow-lg ${getStatusColor(website.status)}`}>
                          {getStatusIcon(website.status)} {website.status.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      
                      {/* Category */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-block px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold">
                          {website.category}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                          {website.launchDate}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {website.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {website.description}
                      </p>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Fitur Utama:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {website.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700">
                              <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <a
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Kunjungi Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur text-gray-700 w-12 h-12 rounded-full shadow-xl hover:bg-white transition-all flex items-center justify-center z-10 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur text-gray-700 w-12 h-12 rounded-full shadow-xl hover:bg-white transition-all flex items-center justify-center z-10 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {totalSlides > 1 && (
          <div className="flex justify-center items-center mt-8 gap-3">
            {websites.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-8 h-3 bg-indigo-600 rounded-full'
                    : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DesaWebsiteCarousel;