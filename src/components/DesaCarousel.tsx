"use client";

import React from 'react';
import Image from 'next/image';

interface AnggotaDesa {
  id: number;
  nama: string;
  jabatan: string;
  prodi: string;
  foto: string;
  isVideo?: boolean;
  nim?: string;
}

interface Koordinator {
  nama: string;
  jabatan: string;
  foto: string;
  prodi: string;
  nim: string;
  isVideo?: boolean;
}

interface DesaData {
  id: number;
  namaDesa: string;
  deskripsi: string;
  koordinator: Koordinator;
  fotoBersama: string[];
  anggota: AnggotaDesa[];
}

interface DesaCarouselProps {
  desaList: DesaData[];
}

// Minimalist Anggota Card
const AnggotaCard: React.FC<{ anggota: AnggotaDesa }> = ({ anggota }) => (
  <div className="flex-shrink-0 w-[240px] h-[300px] mx-3">
    <div className="relative w-full h-full group cursor-pointer">
      
      {/* Main Card */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-500 ease-out group-hover:shadow-lg group-hover:border-gray-200 group-hover:-translate-y-1">
        
        {/* Image or Video */}
        <div className="relative w-full h-[200px] overflow-hidden">
          {anggota.isVideo ? (
            <>
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={anggota.foto} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-2 right-2 bg-black/50 rounded-full p-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM8 14.5V5.5L14 10L8 14.5Z" />
                </svg>
              </div>
            </>
          ) : (
            <Image
              src={anggota.foto}
              alt={anggota.nama}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/5 transition-opacity duration-300 group-hover:bg-black/0"></div>
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-1">
          <h4 className="font-semibold text-gray-900 text-sm leading-tight">
            {anggota.nama}
          </h4>
          <p className="text-xs text-blue-600 font-medium">
            {anggota.jabatan}
          </p>
          <p className="text-xs text-gray-500">
            {anggota.prodi}
          </p>
          {anggota.nim && (
            <p className="text-xs text-gray-400 pt-1">
              {anggota.nim}
            </p>
          )}
        </div>

        {/* Subtle hover accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></div>
      </div>
    </div>
  </div>
);

// Minimalist Photo Carousel
const FotoBersamaCarousel: React.FC<{ 
  photos: string[], 
  desaName: string 
}> = ({ photos, desaName }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = React.useState(0);

  React.useEffect(() => {
    if (photos.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => 
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [photos.length]);

  const handlePhotoClick = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  return (
    <div className="relative h-[140px] rounded-xl overflow-hidden bg-gray-50 group">
      {/* Images */}
      <div className="relative w-full h-full">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentPhotoIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={photo}
              alt={`Tim ${desaName} - ${index + 1}`}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-102"
            />
          </div>
        ))}
      </div>

      {/* Simple overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      {/* Minimal indicators */}
      {photos.length > 1 && (
        <div className="absolute bottom-3 right-3 flex space-x-1.5">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePhotoClick(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                index === currentPhotoIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}

      {/* Subtle label */}
      <div className="absolute bottom-3 left-3">
        <span className="text-white/80 text-xs font-medium">
          {desaName}
        </span>
      </div>
    </div>
  );
};

// Main Desa Section
const DesaCarouselSection: React.FC<{ desa: DesaData }> = ({ desa }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const itemsPerPage = 3; // Show 3 cards at once
  const maxIndex = Math.max(0, desa.anggota.length - itemsPerPage);

  React.useEffect(() => {
    if (desa.anggota.length <= itemsPerPage) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [desa.anggota.length, maxIndex]);

  const handleNavigation = (direction: 'prev' | 'next') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (direction === 'next') {
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    } else {
      setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
    }
    
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className="mb-16">
      {/* Clean Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-wide">
          {desa.namaDesa}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
          {desa.deskripsi}
        </p>
      </div>

      {/* Koordinator & Photo Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
        
        {/* Koordinator - Clean Card */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 border border-gray-100 h-full">
            <div className="flex items-start space-x-4">
              <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden rounded-full">
                {desa.koordinator.isVideo ? (
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={desa.koordinator.foto} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={desa.koordinator.foto}
                    alt={desa.koordinator.nama}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="space-y-1">
                <div className="text-xs text-blue-600 font-medium uppercase tracking-wide">
                  Koordinator Sub Unit
                </div>
                <h4 className="font-semibold text-gray-900">
                  {desa.koordinator.nama}
                </h4>
                <p className="text-sm text-gray-600">
                  {desa.koordinator.prodi}
                </p>
                <p className="text-xs text-gray-400">
                  {desa.koordinator.nim}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Foto Bersama */}
        <div className="lg:col-span-3">
          <FotoBersamaCarousel 
            photos={desa.fotoBersama} 
            desaName={desa.namaDesa}
          />
        </div>
      </div>

      {/* Team Members Carousel */}
      <div className="relative">
        
        {/* Section Title */}
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-medium text-gray-900">
            Tim Anggota
          </h4>
          <div className="text-sm text-gray-500">
            {desa.anggota.length} anggota
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className={`flex transition-transform duration-500 ease-out ${isTransitioning ? '' : ''}`}
            style={{ 
              transform: `translateX(-${currentIndex * (240 + 24)}px)` // card width + margin
            }}
          >
            {desa.anggota.map((anggota) => (
              <AnggotaCard 
                key={anggota.id} 
                anggota={anggota} 
              />
            ))}
          </div>

          {/* Minimal Navigation */}
          {desa.anggota.length > itemsPerPage && (
            <>
              <button
                onClick={() => handleNavigation('prev')}
                disabled={isTransitioning}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md hover:border-gray-300 transition-all duration-200 disabled:opacity-50 -translate-x-5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                onClick={() => handleNavigation('next')}
                disabled={isTransitioning}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md hover:border-gray-300 transition-all duration-200 disabled:opacity-50 translate-x-5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Simple Progress Indicator */}
        {desa.anggota.length > itemsPerPage && (
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, indicatorIndex) => (
                <button
                  key={indicatorIndex}
                  onClick={() => setCurrentIndex(indicatorIndex)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    indicatorIndex === currentIndex 
                      ? 'bg-blue-500 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const DesaCarousel: React.FC<DesaCarouselProps> = ({ desaList }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-0 divide-y divide-gray-100">
        {desaList.map((desa, index) => (
          <div key={desa.id} className={index > 0 ? "pt-16" : ""}>
            <DesaCarouselSection desa={desa} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesaCarousel;