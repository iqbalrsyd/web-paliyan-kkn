"use client";

import React, { useState, useRef } from 'react';
import { umkmData, UMKM } from '@/data/umkmData';

interface DesaUmkmSectionProps {
  desaName: string;
}

const DesaUmkmSection: React.FC<DesaUmkmSectionProps> = ({ desaName }) => {
  const [activeCategory, setActiveCategory] = useState('semua');
  const [selectedUmkm, setSelectedUmkm] = useState<UMKM | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Add ref for the section
  const sectionRef = useRef<HTMLElement>(null);

  const currentDesa = umkmData[desaName as keyof typeof umkmData];
  
  const filteredUmkms = activeCategory === 'semua' 
    ? currentDesa.umkms 
    : currentDesa.umkms.filter(umkm => umkm.category === activeCategory);

  // Pagination calculation
  const totalPages = Math.ceil(filteredUmkms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUmkms = filteredUmkms.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of this section instead of page top
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'makanan': return 'Makanan';
      case 'kerajinan': return 'Kerajinan';
      case 'pertanian': return 'Pertanian';
      case 'jasa': return 'Jasa';
      case 'fashion': return 'Fashion';
      case 'teknologi': return 'Teknologi';
      case 'seni': return 'Seni';
      case 'wisata': return 'Wisata';
      case 'organik': return 'Organik';
      default: return 'Umum';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'makanan': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'kerajinan': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'pertanian': return 'bg-green-100 text-green-800 border-green-200';
      case 'jasa': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'fashion': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'teknologi': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'seni': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'wisata': return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      case 'organik': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const openModal = (umkm: UMKM) => {
    setSelectedUmkm(umkm);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUmkm(null);
    document.body.style.overflow = 'unset';
  };

  const getShortName = (fullName: string) => {
    const nameParts = fullName.split(' ');
    if (nameParts.length >= 3) {
      return `${nameParts[0]} ${nameParts[1]} ${nameParts[2]}`;
    }
    return fullName;
  };

  // Pagination component
  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    
    // Calculate start and end pages
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return (
      <div className="flex justify-center items-center space-x-2 mt-12">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
            currentPage === 1 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200 hover:border-green-300'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Page numbers */}
        {startPage > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200 hover:border-green-300 transition-all duration-300"
            >
              1
            </button>
            {startPage > 2 && <span className="text-gray-400">...</span>}
          </>
        )}

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentPage === page
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200 hover:border-green-300'
            }`}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="text-gray-400">...</span>}
            <button
              onClick={() => handlePageChange(totalPages)}
              className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200 hover:border-green-300 transition-all duration-300"
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
            currentPage === totalPages 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200 hover:border-green-300'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
            UMKM Desa
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Usaha Mikro Kecil Menengah
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Desa {desaName}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {currentDesa.description}
          </p>
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-green-800 text-lg font-medium">
              💡 <strong>Dukung UMKM Lokal:</strong> Setiap pembelian Anda membantu menggerakkan ekonomi desa dan memberdayakan masyarakat lokal
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {currentDesa.categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-md ${
                activeCategory === category
                  ? 'bg-green-600 text-white shadow-green-200'
                  : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border-2 border-gray-200 hover:border-green-300'
              }`}
            >
              {category === 'semua' ? 'Semua' : getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Results Summary */}
        {filteredUmkms.length > 0 && (
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Menampilkan <span className="font-semibold">{startIndex + 1}-{Math.min(endIndex, filteredUmkms.length)}</span> dari <span className="font-semibold">{filteredUmkms.length}</span> UMKM
            </p>
          </div>
        )}

        {/* UMKM Grid - Updated to 1:2 layout and centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 max-w-5xl w-full">
            {currentUmkms.map((umkm, index) => (
              <div 
                key={umkm.id} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer transform hover:-translate-y-1 h-80"
                onClick={() => openModal(umkm)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                {/* Background Image dengan Text Overlay */}
                <div className="relative h-full w-full overflow-hidden">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${umkm.image}')`
                    }}
                  ></div>
                  
                  {/* Dark Overlay untuk readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                  
                  {/* Badge Kategori - Top Left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getCategoryColor(umkm.category)}`}>
                      {getCategoryLabel(umkm.category)}
                    </span>
                  </div>

                  {/* Contact Badges - Middle Right */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 space-y-2">
                    {umkm.contact.whatsapp && (
                      <a 
                        href={`https://wa.me/${umkm.contact.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                      </a>
                    )}
                    
                    {umkm.contact.instagram && (
                      <a 
                        href={`https://instagram.com/${umkm.contact.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}

                    {umkm.contact.facebook && (
                      <a 
                        href={`https://facebook.com/${umkm.contact.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Content Overlay - Bottom */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-green-200 transition-colors">
                        {umkm.name}
                      </h3>
                      
                      {/* Price Range */}
                      <div className="flex items-center text-sm text-white/90 mb-2">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        <span className="font-medium">{umkm.priceRange}</span>
                      </div>
                      
                      {/* Footer dengan pemilik */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-white/80">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="font-medium text-white">
                            {getShortName(umkm.owner)}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-green-200 font-medium group-hover:text-green-100">
                          <span className="mr-1">Detail</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {renderPagination()}

        {/* Modal Detail */}
        {showModal && selectedUmkm && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            ></div>
            
            <div className="flex items-center justify-center min-h-screen p-4">
              <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                
                {/* Modal Header dengan Background */}
                <div className="relative h-32 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${selectedUmkm.image}')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
                  
                  <div className="relative p-6 flex items-center justify-between text-white">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                          {getCategoryLabel(selectedUmkm.category)}
                        </span>
                        {selectedUmkm.rating && (
                          <div className="flex items-center bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                            <svg className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <span className="text-xs font-bold text-white">{selectedUmkm.rating}</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold">{selectedUmkm.name}</h3>
                    </div>
                    <button 
                      onClick={closeModal}
                      className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors backdrop-blur-sm"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                  
                  {/* UMKM Overview */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {selectedUmkm.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="bg-green-50 rounded-xl p-4 text-center">
                        <div className="text-lg font-bold text-green-700">{selectedUmkm.priceRange}</div>
                        <div className="text-sm text-green-600">Harga</div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 text-center">
                        <div className="text-lg font-bold text-blue-700">{selectedUmkm.operational}</div>
                        <div className="text-sm text-blue-600">Jam Operasional</div>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-4 text-center">
                        <div className="text-sm font-bold text-purple-700">{selectedUmkm.location}</div>
                        <div className="text-sm text-purple-600">Lokasi</div>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4 text-center">
                        <div className="text-sm font-bold text-orange-700">{selectedUmkm.established || 'Terdaftar'}</div>
                        <div className="text-sm text-orange-600">Berdiri</div>
                      </div>
                    </div>

                    {/* Pemilik Info */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                          {selectedUmkm.owner.split(' ').map(n => n[0]).slice(0, 2).join('')}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Pemilik UMKM</h4>
                          <p className="text-green-600 font-semibold">{selectedUmkm.owner}</p>
                        </div>
                      </div>
                    </div>

                    {/* Speciality */}
                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-6">
                      <div className="flex items-center text-yellow-800">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span className="font-bold">Keunggulan: </span>
                        <span className="ml-2">{selectedUmkm.speciality}</span>
                      </div>
                    </div>
                  </div>

                  {/* Produk/Layanan */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Produk & Layanan</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {selectedUmkm.products.map((product, index) => (
                        <div key={index} className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                          <div className="text-green-800 font-medium">{product}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Kontak */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Informasi Kontak</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedUmkm.contact.whatsapp && (
                        <a 
                          href={`https://wa.me/${selectedUmkm.contact.whatsapp.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-4 bg-green-50 border-2 border-green-200 rounded-xl hover:bg-green-100 transition-colors"
                        >
                          <svg className="w-6 h-6 text-green-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                          <div>
                            <div className="font-bold text-green-800">WhatsApp</div>
                            <div className="text-sm text-green-600">{selectedUmkm.contact.whatsapp}</div>
                          </div>
                        </a>
                      )}

                      {selectedUmkm.contact.instagram && (
                        <a 
                          href={`https://instagram.com/${selectedUmkm.contact.instagram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-4 bg-purple-50 border-2 border-purple-200 rounded-xl hover:bg-purple-100 transition-colors"
                        >
                          <svg className="w-6 h-6 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          <div>
                            <div className="font-bold text-purple-800">Instagram</div>
                            <div className="text-sm text-purple-600">{selectedUmkm.contact.instagram}</div>
                          </div>
                        </a>
                      )}

                      {selectedUmkm.contact.facebook && (
                        <a 
                          href={`https://facebook.com/${selectedUmkm.contact.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-4 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 transition-colors"
                        >
                          <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          <div>
                            <div className="font-bold text-blue-800">Facebook</div>
                            <div className="text-sm text-blue-600">{getShortName(selectedUmkm.contact.facebook)}</div>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <div className="flex gap-3">
                    {selectedUmkm.contact.whatsapp && (
                      <a 
                        href={`https://wa.me/${selectedUmkm.contact.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors font-semibold text-center"
                      >
                        Hubungi via WhatsApp
                      </a>
                    )}
                    <button 
                      onClick={closeModal}
                      className="flex-1 bg-white text-gray-700 border border-gray-300 py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DesaUmkmSection;
