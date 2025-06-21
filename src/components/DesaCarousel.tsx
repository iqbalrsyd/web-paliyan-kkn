"use client";

import React from 'react';
import Image from 'next/image';

interface AnggotaDesa {
  id: number;
  nama: string;
  jabatan: string;
  prodi: string;
  foto: string;
  nim?: string;
}

interface Koordinator {
  nama: string;
  jabatan: string;
  foto: string;
  prodi: string;
  nim: string;
}

interface DesaData {
  id: number;
  namaDesa: string;
  deskripsi: string;
  koordinator: Koordinator;
  fotoBersama: string;
  anggota: AnggotaDesa[];
}

interface DesaCarouselProps {
  desaList: DesaData[];
}

const AnggotaCard: React.FC<{ anggota: AnggotaDesa }> = ({ anggota }) => (
  <div className="flex-shrink-0 w-[250px] h-[350px] mx-2">
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0px_4px_15px_rgba(59,130,246,0.25)] border border-blue-100 group">
      
      {/* Background Image */}
      <Image
        src={anggota.foto}
        alt={anggota.nama}
        fill
        className="object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        
        {/* Jabatan Badge - positioned at top */}
        <div className="absolute top-4 left-4 right-4">
          <span className="inline-flex items-center px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white shadow-sm">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
              <path d="M19 20v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
            </svg>
            {anggota.jabatan}
          </span>
        </div>

        {/* Main Content - positioned at bottom */}
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-white leading-tight line-clamp-2 drop-shadow-lg">
            {anggota.nama}
          </h4>

          <p className="text-sm text-white/90 font-medium line-clamp-2 drop-shadow-md">
            {anggota.prodi}
          </p>

          {anggota.nim && (
            <p className="text-xs text-white/80 font-medium drop-shadow-md">
              NIM: {anggota.nim}
            </p>
          )}
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>
);

const DesaCarouselSection: React.FC<{ desa: DesaData }> = ({ desa }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [extendedItems, setExtendedItems] = React.useState<AnggotaDesa[]>([]);

  // Create extended array for infinite loop
  React.useEffect(() => {
    if (desa.anggota && desa.anggota.length > 0) {
      const duplicatedItems = [
        ...desa.anggota,
        ...desa.anggota,
        ...desa.anggota
      ];
      setExtendedItems(duplicatedItems);
      setCurrentIndex(desa.anggota.length);
    }
  }, [desa.anggota]);

  React.useEffect(() => {
    if (!desa.anggota || desa.anggota.length === 0) return;
    
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
                                                                                                                                                                                                                                                                                                                                                                
    return () => clearInterval(timer);
  }, [desa.anggota?.length, currentIndex]);

  const handleNext = () => {
    if (isTransitioning || desa.anggota.length === 0) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    
    setTimeout(() => {
      setIsTransitioning(false);
      
      if (currentIndex >= desa.anggota.length * 2 - 1) {
        setCurrentIndex(desa.anggota.length);
      }
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning || desa.anggota.length === 0) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
    
    setTimeout(() => {
      setIsTransitioning(false);
      
      if (currentIndex <= 0) {
        setCurrentIndex(desa.anggota.length);
      }
    }, 500);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning) return;
    setCurrentIndex(index + desa.anggota.length);
  };

  const getDotIndex = () => {
    return currentIndex % desa.anggota.length;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 mb-8">
      {/* Header Desa */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-blue-900 mb-2">{desa.namaDesa}</h3>
        <p className="text-sm text-blue-700">{desa.deskripsi}</p>
      </div>

      {/* Koordinator dan Foto Bersama Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Koordinator Card */}
        <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={desa.koordinator.foto}
              alt={desa.koordinator.nama}
              fill
              className="object-cover rounded-full border-2 border-blue-300"
            />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-blue-900 text-sm">{desa.koordinator.nama}</h4>
            <p className="text-xs text-blue-700 font-medium">{desa.koordinator.jabatan}</p>
            <p className="text-xs text-blue-600">{desa.koordinator.prodi}</p>
            <p className="text-xs text-blue-500">NIM: {desa.koordinator.nim}</p>
          </div>
        </div>

        {/* Foto Bersama */}
        <div className="relative h-32 lg:h-40 rounded-lg overflow-hidden border border-blue-200">
          <Image
            src={desa.fotoBersama}
            alt={`Foto bersama tim ${desa.namaDesa}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
            <p className="text-white text-xs font-medium p-3 drop-shadow">
              Foto Bersama Tim {desa.namaDesa}
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Anggota */}
      <div className="relative">
        <div className="relative border border-dashed border-blue-300 rounded-lg p-4 min-h-[410px]">
          <div className="relative w-full h-[380px] overflow-hidden rounded-lg">
            <div 
              className={`flex h-full items-center ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 270}px)` }}
            >
              {extendedItems.map((anggota, index) => (
                <AnggotaCard 
                  key={`${anggota.id}-${index}`} 
                  anggota={anggota} 
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons - hanya tampil jika anggota > 1 */}
          {desa.anggota.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                disabled={isTransitioning}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-white/90 backdrop-blur-sm rounded-full shadow-[0px_2px_10px_rgba(59,130,246,0.6)] flex items-center justify-center hover:scale-105 hover:bg-white transition-all duration-200 disabled:opacity-50 z-10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                onClick={handleNext}
                disabled={isTransitioning}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-white/90 backdrop-blur-sm rounded-full shadow-[0px_2px_10px_rgba(59,130,246,0.6)] flex items-center justify-center hover:scale-105 hover:bg-white transition-all duration-200 disabled:opacity-50 z-10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator - hanya tampil jika anggota > 1 */}
        {desa.anggota.length > 1 && (
          <div className="flex justify-center mt-3 gap-1">
            {desa.anggota.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === getDotIndex() ? 'bg-blue-500' : 'bg-blue-200 hover:bg-blue-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const DesaCarousel: React.FC<DesaCarouselProps> = ({ desaList }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col space-y-8">
        {desaList.map((desa) => (
          <DesaCarouselSection key={desa.id} desa={desa} />
        ))}
      </div>
    </div>
  );
};

export default DesaCarousel;