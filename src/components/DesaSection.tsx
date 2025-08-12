"use client";

import React from 'react';
import DesaCarousel from './DesaCarousel';

// Data untuk DPL dan Kormanit - Side by side cards
export const pimpinanData = {
    dpl: {
        nama: 'Prof. Dr. Ir. Fatchan Nurrochmad, M.Agr',
        jabatan: 'Dosen Pembimbing Lapangan',
        fakultas: 'Fakultas Teknik',
        foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1755022486/yf8lrydjz4mkb7ythlay.mp4',
        isVideo: true
    },
    kormanit: {
        nama: 'Berliana Ayu Iriyanti',
        jabatan: 'Koordinator Mahasiswa Unit',
        prodi: 'Teknik Geodesi',
        nim: '22/504960/TK/55240',
        foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088322/fxuvljgh0bjr4ux1nxkf.mp4',
        isVideo: true
    }
};

// Komponen untuk section Pimpinan - Side by side cards
const PimpinanSection: React.FC = () => {
    return (
        <div className="mb-16 relative">
            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 text-sm font-semibold mb-4">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Struktur Kepemimpinan
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                    Pembimbing & Koordinator
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Tim pembimbing dan koordinator yang memimpin pelaksanaan KKN-PPM UGM di Kecamatan Paliyan
                </p>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                
                {/* DPL Card */}
                <div className="group relative">
                    <div className="text-center mb-6">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-bold uppercase tracking-wider shadow-sm mb-4">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                            </svg>
                            Dosen Pembimbing
                        </div>
                        
                        {/* Info di atas card */}
                        <div className="mb-6">
                            <h4 className="font-bold text-gray-900 text-xl mb-2">
                                {pimpinanData.dpl.nama}
                            </h4>
                            <p className="text-blue-600 font-semibold text-base mb-2">
                                {pimpinanData.dpl.jabatan}
                            </p>
                            <p className="text-gray-600 text-sm">
                                {pimpinanData.dpl.fakultas}
                            </p>
                        </div>
                    </div>

                    {/* Photo Card */}
                    <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group-hover:scale-105 max-w-[280px] mx-auto">
                        <div className="aspect-square p-4">
                            {pimpinanData.dpl.isVideo ? (
                                <div className="relative w-full h-full overflow-hidden rounded-xl">
                                    <video 
                                        autoPlay 
                                        muted 
                                        loop 
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover"
                                    >
                                        <source src={pimpinanData.dpl.foto} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="absolute bottom-3 right-3 bg-white rounded-full p-1.5 shadow-sm">
                                        <svg className="w-3 h-3 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM8 14.5V5.5L14 10L8 14.5Z" />
                                        </svg>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative w-full h-full rounded-xl overflow-hidden border-3 border-white shadow-lg">
                                    <img
                                        src={pimpinanData.dpl.foto}
                                        alt={pimpinanData.dpl.nama}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            )}
                        </div>
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>

                {/* Kormanit Card */}
                <div className="group relative">
                    <div className="text-center mb-6">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-bold uppercase tracking-wider shadow-sm mb-4">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            Koordinator Unit
                        </div>
                        
                        {/* Info di atas card */}
                        <div className="mb-6">
                            <h4 className="font-bold text-gray-900 text-xl mb-2">
                                {pimpinanData.kormanit.nama}
                            </h4>
                            <p className="text-indigo-600 font-semibold text-base mb-2">
                                {pimpinanData.kormanit.jabatan}
                            </p>
                            <p className="text-gray-600 text-sm mb-1">
                                {pimpinanData.kormanit.prodi}
                            </p>
                            <p className="text-gray-500 text-sm">
                                {pimpinanData.kormanit.nim}
                            </p>
                        </div>
                    </div>

                    {/* Photo Card */}
                    <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group-hover:scale-105 max-w-[280px] mx-auto">
                        <div className="aspect-square p-4">
                            {pimpinanData.dpl.isVideo ? (
                                <div className="relative w-full h-full overflow-hidden rounded-xl">
                                    <video 
                                        autoPlay 
                                        muted 
                                        loop 
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover"
                                    >
                                        <source src={pimpinanData.kormanit.foto} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="absolute bottom-3 right-3 bg-white rounded-full p-1.5 shadow-sm">
                                        <svg className="w-3 h-3 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM8 14.5V5.5L14 10L8 14.5Z" />
                                        </svg>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-white shadow-lg">
                                    <img
                                        src={pimpinanData.kormanit.foto}
                                        alt={pimpinanData.kormanit.nama}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            )}
                        </div>
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>

            {/* Simple Decorative Separator */}
            <div className="mt-16 flex items-center justify-center">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
                </div>
            </div>
        </div>
    );
};

// Data desa yang sudah ada (tetap sama)
export const desaData = [
    {
        id: 1,
        namaDesa: "Desa Karangduwet",
        deskripsi: "Tim KKN yang bertugas di Desa Karangduwet dengan fokus pemberdayaan masyarakat dan pengembangan UMKM lokal",
        deskripsiGeografis: "Desa Karangduwet terletak di bagian utara Kecamatan Paliyan dengan karakteristik wilayah yang didominasi oleh area pertanian dan pemukiman. Desa ini memiliki potensi wisata alam yang menarik dengan panorama persawahan yang hijau dan udara yang sejuk.",
        fotoGeografis: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
        reverse: false,
        color: "blue",
        icon: "🌾",
        highlight: "Wisata Alam & Pertanian",
        programCount: 35,
        umkmCount: 3,
        isMultipleKoordinator: false,
        koordinator: {
            nama: 'Aldi Donila Putra',
            jabatan: 'Koordinator Sub Unit 1 Karangduwet',
            foto: 'https://res.cloudinary.com/dvngobmdi/image/upload/v1753172779/w0oigb2p7xozup4mq0vn.jpg',
            prodi: 'Ekonomika dan Bisnis',
            nim: '22/492543/SV/20544'
        },
            fotoBersama: [
            'https://res.cloudinary.com/dvngobmdi/image/upload/v1753172659/f0o187d4dxudifwdad1b.jpg',
            'https://res.cloudinary.com/dvngobmdi/image/upload/v1753172615/n9evarylj2rg2yjwbfjk.jpg',
            'https://res.cloudinary.com/dvngobmdi/image/upload/v1753172565/eg3vgpu0sf5prlj7s13f.jpg'
        ],
            anggota: [
                {
                    id: 1,
                    nama: 'Aldi Donila Putra',
                    nim: '22/492543/SV/20544',
                    prodi: 'Ekonomika dan Bisnis',
                    jabatan: 'Kormasit & Logistik',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753082796/naiozkcww1ev7e0zulxs.mp4',
                    isVideo: true
                },
                {
                    id: 2,
                    nama: 'Roselina Maitri Adi Acintya',
                    nim: '22/496212/PS/23052',
                    prodi: 'Psikologi',
                    jabatan: 'Anggota & Koor PDD',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753086151/d2mdhwqukrubhmq0zdip.mp4',
                    isVideo: true
                },
                {
                    id: 3,
                    nama: 'Selestino Barthanso Barasa',
                    nim: '22/492482/PN/17590',
                    prodi: 'Perikanan',
                    jabatan: 'Koor Logistik',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753086152/gm9hnu1oiiidh5zbx8a5.mp4',
                    isVideo: true
                },
                {
                    id: 4,
                    nama: 'Sabrinna Mifthania',
                    nim: '22/494667/KH/11250',
                    prodi: 'Kedokteran Hewan',
                    jabatan: 'Sekretaris',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753086148/nwvpxdo1g0g8ahmstwmb.mp4',
                    isVideo: true
                },
                {
                    id: 5,
                    nama: 'Raihan Ichlasul Akmal',
                    nim: '22/506144/SV/22082',
                    prodi: 'Teknologi Rekayasa Internet',
                    jabatan: 'Kormater',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753086492/lqb12mshz9qlc4nra77b.mp4',
                    isVideo: true
                },
                {
                    id: 6,
                    nama: 'Nur Rafika Hakiki',
                    nim: '22/496964/PA/21380',
                    prodi: 'Fisika',
                    jabatan: 'Humas',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753086150/bz6tjfqlilbqvyxyy52d.mp4',
                    isVideo: true
                },
                {
                    id: 7,
                    nama: 'Nastiti Dita Rianti',
                    nim: '22/494079/PS/23013',
                    prodi: 'Psikologi',
                    jabatan: 'Anggota',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753086149/rvk9mjunpr4twegda23p.mp4',
                    isVideo: true
                }
            ]
        },
        {
            id: 2,
            namaDesa: "Desa Grogol - Sub Unit 2",
            deskripsi: "Tim KKN Sub Unit 2 yang bertugas di Desa Grogol dengan program unggulan pengembangan wisata dan budaya lokal",
            deskripsiGeografis: "Desa Grogol berada di wilayah tengah Kecamatan Paliyan dengan topografi yang relatif datar. Desa ini dikenal dengan tradisi budaya yang masih kental dan masyarakat yang ramah. Mata pencaharian utama penduduk adalah bertani dan berternak.",
            fotoGeografis: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
            reverse: true,
            color: "teal",
            icon: "🏛️",
            highlight: "Budaya & Tradisi",
            programCount: 35,
            umkmCount: 12,
            isMultipleKoordinator: false,
            koordinator: {
                nama: 'Izzatullah Ahmad Muqaffa',
                jabatan: 'Koordinator Sub Unit 2 Grogol',
                foto: 'https://res.cloudinary.com/dvngobmdi/image/upload/v1753181890/fgrjqb8ltujnq2bojyks.jpg',
                prodi: 'Arsitektur',
                nim: '22/498772/TK/54722'
            },
            fotoBersama: [
                'https://res.cloudinary.com/dvngobmdi/image/upload/v1753180147/nwjmwwh4mcpg6ayay444.jpg',
                'https://res.cloudinary.com/dvngobmdi/image/upload/v1753180156/wnjmzd19eodthfaajdy8.jpg',
                'https://res.cloudinary.com/dvngobmdi/image/upload/v1753180157/bgfkwpybq8o119l66sl2.jpg',
                'https://res.cloudinary.com/dvngobmdi/image/upload/v1753180157/dxge2funv5hmchtnw5bh.jpg'
            ],
            anggota: [
                {
                    id: 8,
                    nama: 'Izzatullah Ahmad Muqaffa',
                    nim: '22/498772/TK/54722',
                    prodi: 'Arsitektur',
                    jabatan: 'Kormasit',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088162/sqzlhhcge2vj5lnelmyq.mp4',
                    isVideo: true
                },
                {
                    id: 9,
                    nama: 'Safira Wahda Widyaputri',
                    nim: '22/505542/TK/55328',
                    prodi: 'Teknik Fisika',
                    jabatan: 'Anggota',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088162/lotrzsq74fh1bmkbnu2w.mp4',
                    isVideo: true
                },
                {
                    id: 10,
                    nama: 'Vincentius Gavin Alvaro Sitorus',
                    nim: '22/496156/EK/23905',
                    prodi: 'Ilmu Ekonomi',
                    jabatan: 'Anggota',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088163/sraevonk6r5qcr8cab8b.mp4',
                    isVideo: true
                },
                {
                    id: 11,
                    nama: 'Nashifa Sekar Listyandani',
                    nim: '22/505271/KH/11389',
                    prodi: 'Kedokteran Hewan',
                    jabatan: 'Sekretaris',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088164/jvlpbwndexpykg8aeman.mp4',
                    isVideo: true
                },
                {
                    id: 12,
                    nama: 'Reffa Anggelyar Vindia S.',
                    nim: '22/494151/SA/21427',
                    prodi: 'Bahasa dan Kebudayaan Jepang',
                    jabatan: 'Anggota',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088169/igh19rl5pjd658wmpipw.mp4',
                    isVideo: true
                },
                {
                    id: 13,
                    nama: 'Sugesti Yeni Prastiwi',
                    nim: '22/492436/SV/20494',
                    prodi: 'Ekonomika dan Bisnis',
                    jabatan: 'Logistik',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088161/olhlc979kpmeb3zvp4xz.mp4',
                    isVideo: true
                }
            ]
        },
        {
            id: 3,
            namaDesa: "Desa Grogol - Sub Unit 3",
            deskripsi: "Tim KKN Sub Unit 3 yang bertugas di Desa Grogol dengan fokus program pengembangan UMKM dan ekonomi masyarakat",
            deskripsiGeografis: "Desa Grogol berada di wilayah tengah Kecamatan Paliyan dengan topografi yang relatif datar. Desa ini dikenal dengan tradisi budaya yang masih kental dan masyarakat yang ramah. Mata pencaharian utama penduduk adalah bertani dan berternak.",
            fotoGeografis: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
            reverse: false,
            color: "purple",
            icon: "🏪",
            highlight: "UMKM & Ekonomi",
            programCount: 35,
            umkmCount: 13,
            isMultipleKoordinator: false,
            koordinator: {
                nama: 'Ahmad Lutfi Alfajar',
                jabatan: 'Koordinator Sub Unit 3 Grogol',
                foto: 'https://res.cloudinary.com/dvngobmdi/image/upload/v1753179816/khfhmj6ja4iduhgsarzq.jpg',
                prodi: 'Hukum',
                nim: '22/497895/HK/23298'
            },
            fotoBersama: [
                'https://res.cloudinary.com/dvngobmdi/image/upload/v1753174103/aowhuyhtosj6yzh6pp7t.jpg',
                'https://res.cloudinary.com/dvngobmdi/image/upload/v1753174075/kvivntk2chu2c6je7fwj.jpg',
                'https://res.cloudinary.com/dvngobmdi/image/upload/v1753174091/rs9f0jisyrp639wrpyos.jpg'
            ],
            anggota: [
                {
                    id: 14,
                    nama: 'Ahmad Lutfi Alfajar',
                    nim: '22/497895/HK/23298',
                    prodi: 'Hukum',
                    jabatan: 'Kormasit & PDD',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088271/jiqpf7fomu0tllqdfj6s.mp4',
                    isVideo: true
                },
                {
                    id: 15,
                    nama: 'Berliana Ayu Iriyanti',
                    nim: '22/504960/TK/55240',
                    prodi: 'Teknik Geodesi',
                    jabatan: 'Kormanit',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088322/fxuvljgh0bjr4ux1nxkf.mp4',
                    isVideo: true
                },
                {
                    id: 16,
                    nama: 'Don Domenico Darmawan',
                    nim: '22/506139/EK/24189',
                    prodi: 'Akuntansi',
                    jabatan: 'Anggota',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088268/pdlni0w9zrrfjfifx3x0.mp4',
                    isVideo: true
                },
                {
                    id: 17,
                    nama: 'Luthfi Salma Hamidah',
                    nim: '22/500092/TP/13541',
                    prodi: 'Teknik Pertanian dan Biosistem',
                    jabatan: 'Kormater',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088278/dtt8anwbncsolbwbzmjf.mp4',
                    isVideo: true
                },
                {
                    id: 18,
                    nama: 'Arsy Mahanani',
                    nim: '22/498027/SP/30914',
                    prodi: 'Ilmu Hubungan Internasional',
                    jabatan: 'Bendahara',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088317/mzk3fmobstn2km9gj2ob.mp4',
                    isVideo: true
                },
                {
                    id: 19,
                    nama: 'Intan Ayuningtyas',
                    nim: '22/492839/HK/23135',
                    prodi: 'Hukum',
                    jabatan: 'Bendahara',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088271/zn1hjv9mmc7r0kqkifwm.mp4',
                    isVideo: true
                },
                {
                    id: 20,
                    nama: 'Diny Wahida Sumarny',
                    nim: '22/493317/SV/20687',
                    prodi: 'Teknologi Kebumian',
                    jabatan: 'Korbid Humas',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088274/sfy9xsshmao3x4n3dsyt.mp4',
                    isVideo: true
                }
            ]
        },
        {
            id: 4,
            namaDesa: "Desa Pampang",
            deskripsi: "Tim KKN yang bertugas di Desa Pampang dengan fokus program kesehatan masyarakat dan lingkungan",
            deskripsiGeografis: "Desa Pampang terletak di bagian selatan Kecamatan Paliyan dengan kondisi geografis yang unik karena berbatasan langsung dengan kawasan karst Gunung Kidul. Desa ini memiliki potensi wisata gua dan sumber mata air alami yang jernih.",
            fotoGeografis: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
            reverse: false,
            color: "emerald",
            icon: "🏔️",
            highlight: "Karst & Mata Air",
            programCount: 38,
            umkmCount: 20,
            isMultipleKoordinator: false,
            koordinator: {
                nama: 'Iqbal Hidayat Rasyad',
                jabatan: 'Koordinator Sub Unit Pampang',
                foto: 'https://res.cloudinary.com/dvngobmdi/image/upload/v1753176260/myxdwclmrumw10zhpyy6.jpg',
                prodi: 'Teknologi Informasi',
                nim: '22/506066/TK/55425'
            },
            fotoBersama: [
                'https://res.cloudinary.com/dvngobmdi/image/upload/v1753176285/qfqjxoa5dqbogly5cnjb.jpg',
                'https://res.cloudinary.com/dvngobmdi/image/upload/v1753176287/hpcftk6rvjnaqu3d3ftx.jpg',
                'https://res.cloudinary.com/dvngobmdi/image/upload/v1753176287/nracclbqxbvi7tkqfzs7.jpg',
                'https://res.cloudinary.com/dvngobmdi/image/upload/v1753176278/yyq0oolcdfifnlj8uddg.jpg'
            ],
            anggota: [
                {
                    id: 21,
                    nama: 'Iqbal Hidayat Rasyad',
                    nim: '22/506066/TK/55425',
                    prodi: 'Teknologi Informasi',
                    jabatan: 'Kormasit & Humas',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088357/rldfqr6yprlxjpcabmwi.mp4',
                    isVideo: true
                },
                {
                    id: 22,
                    nama: 'Della Nurhaliza',
                    nim: '22/496590/EK/23943',
                    prodi: 'Akuntansi',
                    jabatan: 'Humas',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088359/hdv8tqwwu9pqufc1vogw.mp4',
                    isVideo: true
                },
                {
                    id: 23,
                    nama: 'Alvanza Daniswara Haryadi',
                    nim: '22/497630/TK/54544',
                    prodi: 'Teknik Geologi',
                    jabatan: 'Anggota',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088372/hdov4oq2bbxldwf6m2n9.mp4',
                    isVideo: true
                },
                {
                    id: 24,
                    nama: 'Aimee Suuze Niode',
                    nim: '22/506190/SA/22078',
                    prodi: 'Bahasa dan Kebudayaan Korea',
                    jabatan: 'Kormater',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088370/lexkkeu8e3cy41kvoxpf.mp4',
                    isVideo: true
                },
                {
                    id: 25,
                    nama: 'Shalmiah Aegesti',
                    nim: '22/493488/SV/20702',
                    prodi: 'Pengelolaan Hutan',
                    jabatan: 'Logistik',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088369/rvulyd6ogazzeexg3c5w.mp4',
                    isVideo: true
                },
                {
                    id: 26,
                    nama: 'Aulia Nabilah M',
                    nim: '22/497404/KG/12782',
                    prodi: 'Kedokteran Gigi',
                    jabatan: 'Anggota',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088372/viogmppg3mnusegqh81p.mp4',
                    isVideo: true
                },
                {
                    id: 27,
                    nama: 'Sonya Clara A. Winokan Mendes',
                    nim: '22/492382/BI/10915',
                    prodi: 'Fisiologi Tumbuhan',
                    jabatan: 'Logistik',
                    foto: 'https://res.cloudinary.com/dvngobmdi/video/upload/v1753088366/otjonhz0grojofxouazp.mp4',
                    isVideo: true
                }
            ]
        }
];

const DesaSection = () => {
    return (
        <section id="profil" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 w-full relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-200/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200/15 to-pink-200/10 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-200/20 to-blue-200/10 rounded-full blur-2xl animate-bounce-slow"></div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Enhanced Header */}
                <div className="text-center mb-16">
                    <div className="relative">
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl transform scale-110 opacity-60"></div>
                        <div className="relative py-8 px-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
                                Tim KKN-PPM UGM Paliyan 2025
                            </h2>
                            
                            <div className="flex justify-center items-center space-x-4 mb-6">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400 animate-expand-width"></div>
                                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-expand-width-delayed"></div>
                                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full animate-pulse-delayed"></div>
                                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent animate-expand-width"></div>
                            </div>
                            
                            <div className="relative">
                                <p className="text-blue-700 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed animate-fade-in-up-delayed font-medium">
                                    Mahasiswa KKN-PPM UGM yang bertugas di 3 desa di Kecamatan Paliyan, 
                                    Kabupaten Gunung Kidul untuk periode 2025.
                                </p>
                                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-indigo-300 to-transparent animate-fade-in-scale"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Section Pimpinan */}
                <PimpinanSection />
                
                {/* Header untuk Sub Unit */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 text-sm font-semibold mb-4">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V8z" clipRule="evenodd" />
                        </svg>
                        Sub Unit KKN
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-900 bg-clip-text text-transparent">
                        Tim Sub Unit Desa
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Tim mahasiswa yang bertugas di setiap desa dengan program kerja yang spesifik dan terukur
                    </p>
                </div>
                
                <DesaCarousel desaList={desaData} />
            </div>

            {/* Custom CSS untuk animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(45deg); }
                    to { transform: rotate(405deg); }
                }
                
                @keyframes fade-in-up {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                @keyframes fade-in-up-delayed {
                    0% { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    50% { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                @keyframes fade-in-scale {
                    0% { 
                        opacity: 0; 
                        transform: scale(0.8); 
                    }
                    70% { 
                        opacity: 0; 
                        transform: scale(0.8); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: scale(1); 
                    }
                }
                
                @keyframes expand-width {
                    from { width: 0; }
                    to { width: 6rem; }
                }
                
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
                .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
                .animate-spin-slow { animation: spin-slow 20s linear infinite; }
                .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
                .animate-fade-in-up-delayed { animation: fade-in-up-delayed 2s ease-out; }
                .animate-fade-in-scale { animation: fade-in-scale 2.5s ease-out; }
                .animate-expand-width { animation: expand-width 1.5s ease-out; }
            `}</style>
        </section>
    );
};

export default DesaSection;