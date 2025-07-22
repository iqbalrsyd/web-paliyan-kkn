"use client";

import React from 'react';
import DesaCarousel from './DesaCarousel';

// Data desa yang bisa digunakan di komponen lain
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
            'https://res.cloudinary.com/dvngobmdi/image/upload/c_crop,w_6000,h_4000,y_500,g_north/v1753172615/n9evarylj2rg2yjwbfjk.jpg',
            'https://res.cloudinary.com/dvngobmdi/image/upload/c_crop,w_6000,h_4000,y_500,g_north/v1753172565/eg3vgpu0sf5prlj7s13f.jpg'
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
            {/* Modern Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Layered gradient backgrounds for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 via-transparent to-purple-100/20"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-indigo-100/30 via-transparent to-pink-100/20"></div>
                
                {/* Modern geometric shapes */}
                <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-indigo-300/10 rounded-3xl transform rotate-12 animate-float blur-sm"></div>
                <div className="absolute top-20 right-16 w-32 h-32 bg-gradient-to-tr from-purple-200/25 to-pink-200/15 rounded-full animate-float-delayed blur-sm"></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-200/30 to-blue-300/20 rounded-2xl transform -rotate-45 animate-bounce-slow blur-sm"></div>
                <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-gradient-to-tl from-pink-200/20 to-purple-300/25 rounded-full animate-pulse blur-sm"></div>
                
                {/* Modern mesh gradient overlay */}
                <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-radial from-blue-300/10 via-indigo-200/5 to-transparent rounded-full animate-float-slow blur-xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-purple-300/15 via-pink-200/8 to-transparent rounded-full animate-float-reverse blur-xl"></div>
                
                {/* Floating particles with modern style */}
                <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                        <div 
                            key={i}
                            className={`absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400/60 to-purple-400/60 rounded-full animate-float-particle-${i % 3 + 1} blur-[0.5px]`}
                            style={{
                                left: `${15 + (i * 10)}%`,
                                top: `${25 + (i * 7)}%`,
                                animationDelay: `${i * 0.7}s`
                            }}
                        ></div>
                    ))}
                </div>
                
                {/* Modern grid pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Enhanced Header with Animation */}
                <div className="text-center mb-8 sm:mb-12">
                    {/* Main Title with Gradient and Animation */}
                    <div className="relative">
                        {/* Background blur effect behind title */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl transform scale-110 opacity-60"></div>
                        
                        <div className="relative py-8 px-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
                                Tim KKN-PPM UGM Paliyan 2025
                            </h2>
                            
                            {/* Modern decorative elements */}
                            <div className="flex justify-center items-center space-x-4 mb-6">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400 animate-expand-width"></div>
                                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-expand-width-delayed"></div>
                                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full animate-pulse-delayed"></div>
                                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent animate-expand-width"></div>
                            </div>
                            
                            {/* Subtitle with modern styling */}
                            <div className="relative">
                                <p className="text-blue-700 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed animate-fade-in-up-delayed font-medium">
                                    Mahasiswa KKN-PPM UGM yang bertugas di 3 desa di Kecamatan Paliyan, 
                                    Kabupaten Gunung Kidul untuk periode 2025.
                                </p>
                                
                                {/* Modern accent line under subtitle */}
                                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-indigo-300 to-transparent animate-fade-in-scale"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <DesaCarousel desaList={desaData} />
            </div>

            {/* Custom CSS for animations */}
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
                
                @keyframes wiggle {
                    0%, 100% { transform: rotate(-12deg); }
                    25% { transform: rotate(-15deg); }
                    75% { transform: rotate(-9deg); }
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
                
                @keyframes float-particle-1 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.3; }
                    33% { transform: translate(10px, -15px); opacity: 0.7; }
                    66% { transform: translate(-5px, -8px); opacity: 0.4; }
                }
                
                @keyframes float-particle-2 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.4; }
                    50% { transform: translate(-8px, -20px); opacity: 0.8; }
                }
                
                @keyframes float-particle-3 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.2; }
                    25% { transform: translate(15px, -10px); opacity: 0.6; }
                    75% { transform: translate(-10px, -25px); opacity: 0.3; }
                }
                
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
                .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
                .animate-spin-slow { animation: spin-slow 20s linear infinite; }
                .animate-wiggle { animation: wiggle 5s ease-in-out infinite; }
                .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
                .animate-fade-in-up-delayed { animation: fade-in-up-delayed 2s ease-out; }
                .animate-fade-in-scale { animation: fade-in-scale 2.5s ease-out; }
                .animate-expand-width { animation: expand-width 1.5s ease-out; }
                .animate-float-particle-1 { animation: float-particle-1 8s ease-in-out infinite; }
                .animate-float-particle-2 { animation: float-particle-2 10s ease-in-out infinite; }
                .animate-float-particle-3 { animation: float-particle-3 12s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

export default DesaSection;