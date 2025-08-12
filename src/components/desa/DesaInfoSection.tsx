"use client";

import React from 'react';

interface DesaInfoSectionProps {
  desaName: string;
}

const DesaInfoSection: React.FC<DesaInfoSectionProps> = ({ desaName }) => {
  // Data informasi untuk setiap desa
  const infoData = {
    'Karangduwet': {
      sejarah: 'Desa Karangduwet memiliki sejarah panjang sebagai daerah pertanian yang subur. Nama "Karangduwet" berasal dari bahasa Jawa yang berarti "tempat yang manis", menggambarkan kesuburan tanah dan kehidupan masyarakat yang harmonis.',
      geografis: {
        lokasi: 'Terletak di bagian timur Kecamatan Paliyan',
        batasBatas: {
          utara: 'Desa Grogol',
          selatan: 'Desa Katongan',
          timur: 'Kecamatan Nglipar',
          barat: 'Desa Pampang'
        },
        topografi: 'Daerah dataran dengan kemiringan landai, cocok untuk pertanian',
        iklim: 'Iklim tropis dengan curah hujan sedang'
      },
      demografi: {
        jumlahPenduduk: '2.150 jiwa',
        jumlahKK: '650 KK',
        kepadatan: '512 jiwa/km²',
        komposisiUsia: {
          balita: '8%',
          anakAnak: '15%',
          remaja: '18%',
          dewasa: '45%',
          lansia: '14%'
        }
      },
      potensi: [
        {
          title: 'Pertanian',
          description: 'Lahan sawah yang luas dengan sistem irigasi yang baik',
          icon: '🌾'
        },
        {
          title: 'Peternakan',
          description: 'Budidaya kambing dan sapi dengan populasi yang stabil',
          icon: '🐄'
        },
        {
          title: 'Kerajinan',
          description: 'Kerajinan bambu dan anyaman tradisional',
          icon: '🎋'
        }
      ]
    },
    'Grogol': {
      sejarah: 'Desa Grogol dikenal sebagai pusat budaya dan perdagangan lokal. Nama "Grogol" diambil dari kata "grogol" yang berarti tempat berkumpul, mencerminkan karakteristik desa sebagai pusat aktivitas masyarakat.',
      geografis: {
        lokasi: 'Terletak di bagian tengah Kecamatan Paliyan',
        batasBatas: {
          utara: 'Kecamatan Ngawen',
          selatan: 'Desa Karangduwet',
          timur: 'Desa Tambakromo',
          barat: 'Desa Pampang'
        },
        topografi: 'Daerah perbukitan dengan lembah yang subur',
        iklim: 'Iklim tropis dengan variasi suhu yang nyaman'
      },
      demografi: {
        jumlahPenduduk: '1.980 jiwa',
        jumlahKK: '590 KK',
        kepadatan: '521 jiwa/km²',
        komposisiUsia: {
          balita: '9%',
          anakAnak: '16%',
          remaja: '19%',
          dewasa: '42%',
          lansia: '14%'
        }
      },
      potensi: [
        {
          title: 'Ekonomi Kreatif',
          description: 'Pengembangan produk kreatif berbasis budaya lokal',
          icon: '🎨'
        },
        {
          title: 'Wisata Budaya',
          description: 'Tradisi dan ritual adat yang masih lestari',
          icon: '🏛️'
        },
        {
          title: 'UMKM',
          description: 'Beragam usaha mikro dan kecil yang berkembang',
          icon: '🏪'
        }
      ]
    },
    'Pampang': {
      sejarah: 'Desa Pampang terkenal dengan keindahan alamnya yang memukau. Nama "Pampang" berasal dari kata "pampang" yang berarti tepi atau pinggir, menggambarkan lokasi desa yang berada di tepi pegunungan.',
      geografis: {
        lokasi: 'Terletak di bagian barat Kecamatan Paliyan',
        batasBatas: {
          utara: 'Kecamatan Ngawen',
          selatan: 'Samudra Hindia',
          timur: 'Desa Grogol',
          barat: 'Kecamatan Tepus'
        },
        topografi: 'Daerah pegunungan dengan panorama alam yang indah',
        iklim: 'Iklim sejuk dengan udara yang segar'
      },
      demografi: {
        jumlahPenduduk: '1.750 jiwa',
        jumlahKK: '525 KK',
        kepadatan: '343 jiwa/km²',
        komposisiUsia: {
          balita: '7%',
          anakAnak: '14%',
          remaja: '17%',
          dewasa: '48%',
          lansia: '14%'
        }
      },
      potensi: [
        {
          title: 'Ekowisata',
          description: 'Destinasi wisata alam dengan pemandangan menakjubkan',
          icon: '🏔️'
        },
        {
          title: 'Produk Lokal',
          description: 'Hasil bumi khas pegunungan dan produk organik',
          icon: '🥕'
        },
        {
          title: 'Konservasi',
          description: 'Pelestarian alam dan keanekaragaman hayati',
          icon: '🌿'
        }
      ]
    }
  };

  const currentDesa = infoData[desaName as keyof typeof infoData];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Informasi Desa {desaName}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mengenal lebih dekat sejarah, geografis, dan potensi yang dimiliki oleh Desa {desaName}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Sejarah & Geografis */}
          <div className="space-y-12">
            
            {/* Sejarah */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                Sejarah Desa
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {currentDesa.sejarah}
              </p>
            </div>

            {/* Geografis */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                Kondisi Geografis
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Lokasi & Batas Wilayah</h4>
                  <p className="text-gray-600 text-sm mb-3">{currentDesa.geografis.lokasi}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Utara: {currentDesa.geografis.batasBatas.utara}</div>
                    <div>Selatan: {currentDesa.geografis.batasBatas.selatan}</div>
                    <div>Timur: {currentDesa.geografis.batasBatas.timur}</div>
                    <div>Barat: {currentDesa.geografis.batasBatas.barat}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 text-sm mb-1">Topografi</h5>
                    <p className="text-gray-600 text-sm">{currentDesa.geografis.topografi}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 text-sm mb-1">Iklim</h5>
                    <p className="text-gray-600 text-sm">{currentDesa.geografis.iklim}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Demografi & Potensi */}
          <div className="space-y-12">
            
            {/* Demografi */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                Data Demografi
              </h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{currentDesa.demografi.jumlahPenduduk}</div>
                    <div className="text-sm text-gray-600">Total Penduduk</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{currentDesa.demografi.jumlahKK}</div>
                    <div className="text-sm text-gray-600">Kepala Keluarga</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">{currentDesa.demografi.kepadatan}</div>
                    <div className="text-sm text-gray-600">Kepadatan</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Komposisi Usia</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                    <div>Balita: {currentDesa.demografi.komposisiUsia.balita}</div>
                    <div>Anak-anak: {currentDesa.demografi.komposisiUsia.anakAnak}</div>
                    <div>Remaja: {currentDesa.demografi.komposisiUsia.remaja}</div>
                    <div>Dewasa: {currentDesa.demografi.komposisiUsia.dewasa}</div>
                    <div>Lansia: {currentDesa.demografi.komposisiUsia.lansia}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Potensi Desa */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                Potensi Desa
              </h3>
              
              <div className="space-y-4">
                {currentDesa.potensi.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesaInfoSection;
