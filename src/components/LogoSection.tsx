import React from 'react';
import Image from 'next/image';

const LogoSection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background Wave */}
      <div className="absolute inset-0">
        {/* Top white area */}
        <div className="h-2/3 bg-white"></div>
        {/* Bottom teal area with wave */}
        <div className="h-1/3 bg-teal-700 relative">
          {/* Wave shape using CSS clip-path or SVG */}
          <div className="absolute inset-0 bg-teal-700">
            <svg 
              className="absolute bottom-0 w-full h-32" 
              viewBox="0 0 1440 320" 
              preserveAspectRatio="none"
            >
              <path 
                fill="#0f766e" 
                d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,165.3C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight">
            DESAIN LOGO
          </h2>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-20">
          
          {/* Left Labels - Hidden on mobile, positioned absolutely on desktop */}
          <div className="hidden lg:block relative">
            <div className="absolute -left-32 top-8">
              <div className="flex items-center gap-4">
                <span className="text-2xl xl:text-4xl font-bold text-gray-900 whitespace-nowrap">
                  Langit Biru
                </span>
                {/* Arrow 1 */}
                <div className="w-16 xl:w-20 h-0.5 bg-gray-900 transform -rotate-12"></div>
              </div>
            </div>
          </div>

          {/* Logo Container */}
          <div className="relative">
            {/* Logo Background */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[470px] xl:h-[461px] mx-auto">
              <Image
                src="/logo-kkn.png"
                alt="Logo Paliyan Menawan"
                fill
                className="object-contain"
              />
              {/* Placeholder gradient if image not available */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-orange-300 to-green-700 rounded-full opacity-30"></div>
            </div>

            {/* Right Labels - Desktop */}
            <div className="hidden lg:block">
              {/* Matahari Arrow */}
              <div className="absolute -right-32 xl:-right-40 top-12">
                <div className="flex items-center gap-4">
                  <div className="w-16 xl:w-20 h-0.5 bg-gray-900 transform -rotate-12"></div>
                  <span className="text-2xl xl:text-4xl font-bold text-gray-900 whitespace-nowrap">
                    Matahari
                  </span>
                </div>
              </div>

              {/* 3 Pegunungan Arrow */}
              <div className="absolute -right-40 xl:-right-48 bottom-16">
                <div className="flex items-center gap-4">
                  <div className="w-20 xl:w-24 h-0.5 bg-gray-900 transform rotate-12"></div>
                  <span className="text-2xl xl:text-4xl font-bold text-gray-900 whitespace-nowrap">
                    3 Pegunungan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Labels - Visible only on mobile */}
          <div className="lg:hidden w-full max-w-sm space-y-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Elemen Logo
              </h3>
              <div className="space-y-3">
                <div className="text-lg sm:text-xl font-bold text-gray-900">
                  Langit Biru
                </div>
                <div className="text-lg sm:text-xl font-bold text-gray-900">
                  Matahari
                </div>
                <div className="text-lg sm:text-xl font-bold text-gray-900">
                  3 Pegunungan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="relative z-20 text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 tracking-tight">
            Filosofi Logo
          </h3>
          <div className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
            <p className="mb-4">
              Logo Paliyan Menawan menggambarkan keindahan alam Kecamatan Paliyan yang terdiri dari langit biru yang cerah melambangkan harapan dan optimisme untuk masa depan yang lebih baik.
            </p>
            <p className="mb-4">
              Matahari yang bersinar melambangkan semangat dan energi positif yang dimiliki oleh tim KKN-PPM UGM dalam menjalankan program pemberdayaan masyarakat.
            </p>
            <p>
              Tiga pegunungan menggambarkan tiga desa sasaran KKN-PPM UGM yaitu Karangduwet, Grogol, dan Pampang yang saling bersinergi dalam pembangunan berkelanjutan dan pemberdayaan masyarakat.
            </p>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-600 to-transparent opacity-30"></div>
    </section>
  );
};

export default LogoSection;