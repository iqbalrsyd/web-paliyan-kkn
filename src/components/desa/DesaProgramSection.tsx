"use client";

import React, { useState, useRef } from 'react';
import { programData, Program } from '@/data/programData';

interface DesaProgramSectionProps {
  desaName: string;
}

const DesaProgramSection: React.FC<DesaProgramSectionProps> = ({ desaName }) => {
  const [activeCategory, setActiveCategory] = useState('semua');
  const [activeCoordinator, setActiveCoordinator] = useState('semua');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showCoordinatorDropdown, setShowCoordinatorDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Add ref for the section
  const sectionRef = useRef<HTMLElement>(null);

  const currentDesa = programData[desaName as keyof typeof programData];
  
  // Get unique coordinators from programs
  const uniqueCoordinators = Array.from(new Set(currentDesa.programs.map(program => program.coordinator)));
  
  const filteredPrograms = currentDesa.programs.filter(program => {
    const categoryMatch = activeCategory === 'semua' || program.category === activeCategory;
    const coordinatorMatch = activeCoordinator === 'semua' || program.coordinator === activeCoordinator;
    return categoryMatch && coordinatorMatch;
  });

  // Pagination calculation
  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPrograms = filteredPrograms.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setActiveCoordinator('semua');
    setCurrentPage(1);
    setShowCategoryDropdown(false);
  };

  const handleCoordinatorChange = (coordinator: string) => {
    setActiveCoordinator(coordinator);
    setCurrentPage(1);
    setShowCoordinatorDropdown(false);
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
      case 'pertanian': return 'Pertanian';
      case 'ekonomi': return 'Ekonomi';
      case 'sosial': return 'Sosial';
      case 'lingkungan': return 'Lingkungan';
      case 'budaya': return 'Budaya';
      case 'teknologi': return 'Teknologi';
      case 'wisata': return 'Wisata';
      case 'konservasi': return 'Konservasi';
      default: return 'Umum';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'pertanian': return 'bg-green-100 text-green-800 border-green-200';
      case 'ekonomi': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'sosial': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'lingkungan': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'budaya': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'teknologi': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'wisata': return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      case 'konservasi': return 'bg-teal-100 text-teal-800 border-teal-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Dummy images for different categories
  const getDummyImage = (category: string) => {
    switch (category) {
      case 'pertanian': return 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop';
      case 'ekonomi': return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop';
      case 'sosial': return 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop';
      case 'lingkungan': return 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop';
      case 'budaya': return 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop';
      case 'teknologi': return 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop';
      case 'wisata': return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop';
      case 'konservasi': return 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop';
      default: return 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop';
    }
  };

  const openModal = (program: Program) => {
    setSelectedProgram(program);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProgram(null);
    document.body.style.overflow = 'unset';
  };

  const getShortName = (fullName: string) => {
    const nameParts = fullName.split(' ');
    if (nameParts.length >= 2) {
      return `${nameParts[0]} ${nameParts[1]}`;
    }
    return nameParts[0];
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
              : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
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
              className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300 transition-all duration-300"
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
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
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
              className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300 transition-all duration-300"
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
              : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            Program Kerja
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Program Pemberdayaan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Desa {desaName}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Berbagai inisiatif strategis untuk mengembangkan potensi desa dan meningkatkan kesejahteraan masyarakat
          </p>
        </div>

        {/* Filter Dropdowns - Always Horizontal */}
        <div className="flex flex-row gap-3 justify-center mb-8">
          
          {/* Category Filter Dropdown */}
          <div className="relative flex-1 max-w-48">
            <button
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown);
                setShowCoordinatorDropdown(false);
              }}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-md ${
                activeCategory !== 'semua' 
                  ? 'bg-blue-600 text-white shadow-blue-200' 
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-2 border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center">
                <svg className={`w-4 h-4 mr-2 ${activeCategory !== 'semua' ? 'text-white' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="truncate">
                  {activeCategory === 'semua' ? 'Kategori' : getCategoryLabel(activeCategory)}
                </span>
              </div>
              <svg className={`w-4 h-4 ml-2 transition-transform flex-shrink-0 ${showCategoryDropdown ? 'rotate-180' : ''} ${activeCategory !== 'semua' ? 'text-white' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showCategoryDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-100 rounded-xl shadow-xl z-20 max-h-60 overflow-y-auto">
                <div className="py-2">
                  <button
                    onClick={() => handleCategoryChange('semua')}
                    className={`w-full px-4 py-3 text-left font-medium transition-colors ${
                      activeCategory === 'semua' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    Semua Kategori
                  </button>
                  {currentDesa.categories.filter(cat => cat !== 'semua').map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full px-4 py-3 text-left font-medium transition-colors ${
                        activeCategory === category ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      {getCategoryLabel(category)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Coordinator Filter Dropdown */}
          <div className="relative flex-1 max-w-48">
            <button
              onClick={() => {
                setShowCoordinatorDropdown(!showCoordinatorDropdown);
                setShowCategoryDropdown(false);
              }}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-md ${
                activeCoordinator !== 'semua' 
                  ? 'bg-purple-600 text-white shadow-purple-200' 
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 border-2 border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="flex items-center">
                <svg className={`w-4 h-4 mr-2 ${activeCoordinator !== 'semua' ? 'text-white' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="truncate">
                  {activeCoordinator === 'semua' ? 'Koordinator' : getShortName(activeCoordinator)}
                </span>
              </div>
              <svg className={`w-4 h-4 ml-2 transition-transform flex-shrink-0 ${showCoordinatorDropdown ? 'rotate-180' : ''} ${activeCoordinator !== 'semua' ? 'text-white' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showCoordinatorDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-100 rounded-xl shadow-xl z-20 max-h-60 overflow-y-auto">
                <div className="py-2">
                  <button
                    onClick={() => handleCoordinatorChange('semua')}
                    className={`w-full px-4 py-3 text-left font-medium transition-colors ${
                      activeCoordinator === 'semua' ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                    }`}
                  >
                    Semua Koordinator
                  </button>
                  {uniqueCoordinators.map((coordinator) => (
                    <button
                      key={coordinator}
                      onClick={() => handleCoordinatorChange(coordinator)}
                      className={`w-full px-4 py-3 text-left font-medium transition-colors ${
                        activeCoordinator === coordinator ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                      }`}
                    >
                      {getShortName(coordinator)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Clear Filters Button */}
          {(activeCategory !== 'semua' || activeCoordinator !== 'semua') && (
            <button
              onClick={() => {
                setActiveCategory('semua');
                setActiveCoordinator('semua');
                setCurrentPage(1);
              }}
              className="flex items-center px-4 py-3 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-xl transition-all duration-300 font-bold shadow-md border-2 border-red-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="hidden sm:inline">Reset</span>
            </button>
          )}
        </div>

        {/* Results Summary */}
        {filteredPrograms.length > 0 && (
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Menampilkan <span className="font-semibold">{startIndex + 1}-{Math.min(endIndex, filteredPrograms.length)}</span> dari <span className="font-semibold">{filteredPrograms.length}</span> program
            </p>
          </div>
        )}

        {/* Programs Grid - Updated to 1:2 layout and centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 max-w-5xl w-full">
            {currentPrograms.length > 0 ? (
              currentPrograms.map((program, index) => (
                <div 
                  key={program.id} 
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer transform hover:-translate-y-1 h-80"
                  onClick={() => openModal(program)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  
                  {/* Background Image dengan Text Overlay */}
                  <div className="relative h-full w-full overflow-hidden">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${getDummyImage(program.category)}')`
                      }}
                    ></div>
                    
                    {/* Dark Overlay untuk readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                    
                    {/* Badge Kategori - Top Left */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getCategoryColor(program.category)}`}>
                        {getCategoryLabel(program.category)}
                      </span>
                    </div>

                    {/* Content Overlay - Full Height */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                      
                      {/* Top content (empty space for badge) */}
                      <div></div>
                      
                      {/* Bottom content */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-blue-200 transition-colors">
                          {program.title}
                        </h3>
                        
                        {/* Program description preview */}
                        <p className="text-white/80 text-sm mb-4 line-clamp-2">
                          {program.description}
                        </p>
                        
                        {/* Footer dengan koordinator */}
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-white/80">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="font-medium text-white">
                              {getShortName(program.coordinator)}
                            </span>
                          </div>
                          
                          <div className="flex items-center text-blue-200 font-medium group-hover:text-blue-100">
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
              ))
            ) : (
              // No results found
              <div className="col-span-full text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Tidak Ada Program Ditemukan</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Tidak ada program yang sesuai dengan filter yang dipilih.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('semua');
                    setActiveCoordinator('semua');
                    setCurrentPage(1);
                  }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reset Semua Filter
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Pagination */}
        {renderPagination()}

        {/* Modal Detail - Same as before */}
        {showModal && selectedProgram && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            ></div>
            
            <div className="flex items-center justify-center min-h-screen p-4">
              <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
                
                {/* Modal Header dengan Background */}
                <div className="relative h-32 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${getDummyImage(selectedProgram.category)}')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
                  
                  <div className="relative p-6 flex items-center justify-between text-white">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                          {getCategoryLabel(selectedProgram.category)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{selectedProgram.title}</h3>
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
                  
                  {/* Program Overview */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {selectedProgram.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-xl p-4 text-center">
                        <div className="text-lg font-bold text-blue-700">{selectedProgram.duration}</div>
                        <div className="text-sm text-blue-600">Durasi</div>
                      </div>
                      <div className="bg-emerald-50 rounded-xl p-4 text-center">
                        <div className="text-lg font-bold text-emerald-700">{selectedProgram.target}</div>
                        <div className="text-sm text-emerald-600">Target</div>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-4 text-center">
                        <div className="text-sm font-bold text-purple-700">{selectedProgram.location}</div>
                        <div className="text-sm text-purple-600">Lokasi</div>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4 text-center">
                        <div className="text-sm font-bold text-orange-700">{selectedProgram.budget || 'Tersedia'}</div>
                        <div className="text-sm text-orange-600">Budget</div>
                      </div>
                    </div>

                    {/* Coordinator */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {selectedProgram.coordinator.split(' ').map(n => n[0]).slice(0, 2).join('')}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Koordinator Program</h4>
                          <p className="text-blue-600 font-semibold">{selectedProgram.coordinator}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Program Details */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Rincian Kegiatan</h4>
                    <div className="space-y-3">
                      {selectedProgram.details.map((detail, index) => (
                        <div key={index} className="flex items-start bg-gray-50 rounded-xl p-4">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <div className="text-gray-700">{detail}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                      Bergabung Program
                    </button>
                    <button className="flex-1 bg-white text-gray-700 border border-gray-300 py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors font-semibold">
                      Kontak Koordinator
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Close dropdowns when clicking outside */}
        {(showCategoryDropdown || showCoordinatorDropdown) && (
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => {
              setShowCategoryDropdown(false);
              setShowCoordinatorDropdown(false);
            }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default DesaProgramSection;
