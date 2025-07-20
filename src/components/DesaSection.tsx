import React from 'react';
import DesaCarousel from './DesaCarousel';

const DesaSection = () => {
    const desaData = [
        {
            id: 1,
            namaDesa: "Desa Karangduwet",
            deskripsi: "Tim KKN yang bertugas di Desa Karangduwet dengan fokus pemberdayaan masyarakat dan pengembangan UMKM lokal",
            koordinator: {
                nama: 'Bro Susanto',
                jabatan: 'Koordinator Sub Unit 1 Karangduwet',
                foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
                prodi: 'Teknik Elektro',
                nim: '20/123456/TK/78901'
            },
            fotoBersama: [
                'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1543269664-647b3eec5d6b?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop'
            ],
            anggota: [
                {
                    id: 1,
                    nama: 'Ahmad Rizki Pratama',
                    jabatan: 'Ketua Tim',
                    prodi: 'Teknik Informatika',
                    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
                    nim: '20/463721/TK/51234'
                },
                {
                    id: 2,
                    nama: 'Siti Nurhaliza',
                    jabatan: 'Wakil Ketua',
                    prodi: 'Ilmu Komunikasi',
                    foto: 'https://images.unsplash.com/photo-1494790108755-2616c96e0e3f?w=200&h=200&fit=crop&crop=face',
                    nim: '20/456789/SO/12345'
                },
                {
                    id: 3,
                    nama: 'Budi Santoso',
                    jabatan: 'Sekretaris',
                    prodi: 'Manajemen',
                    foto: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face',
                    nim: '20/123456/EB/67890'
                },
                {
                    id: 4,
                    nama: 'Maya Indira Sari',
                    jabatan: 'Bendahara',
                    prodi: 'Akuntansi',
                    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
                    nim: '20/789123/EB/45678'
                },
                {
                    id: 13,
                    nama: 'Rizky Fauzi',
                    jabatan: 'Anggota',
                    prodi: 'Ilmu Sejarah',
                    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
                    nim: '20/789456/FIB/12345'
                },
                {
                    id: 14,
                    nama: 'Anisa Rahma',
                    jabatan: 'Anggota',
                    prodi: 'Sastra Indonesia',
                    foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
                    nim: '20/654321/FIB/67890'
                }
            ]
        },
        {
            id: 2,
            namaDesa: "Desa Grogol",
            deskripsi: "Tim KKN yang bertugas di Desa Grogol dengan program unggulan pengembangan wisata dan budaya lokal",
            koordinator: {
                nama: 'Dewi Sartika',
                jabatan: 'Koordinator Sub Unit Grogol',
                foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
                prodi: 'Ilmu Pemerintahan',
                nim: '20/234567/SO/89012'
            },
            fotoBersama: [
                'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=600&h=400&fit=crop'
            ],
            anggota: [
                {
                    id: 5,
                    nama: 'Andi Wijaya',
                    jabatan: 'Ketua Tim',
                    prodi: 'Teknik Sipil',
                    foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face',
                    nim: '20/345678/TK/91234'
                },
                {
                    id: 6,
                    nama: 'Dewi Kartika',
                    jabatan: 'Wakil Ketua',
                    prodi: 'Psikologi',
                    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
                    nim: '20/567890/PSI/23456'
                },
                {
                    id: 7,
                    nama: 'Reza Firmansyah',
                    jabatan: 'Sekretaris',
                    prodi: 'Desain Komunikasi Visual',
                    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
                    nim: '20/234567/SV/78901'
                },
                {
                    id: 15,
                    nama: 'Tania Putri',
                    jabatan: 'Bendahara',
                    prodi: 'Ekonomi Pembangunan',
                    foto: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=200&fit=crop&crop=face',
                    nim: '20/123789/FEB/45678'
                },
                {
                    id: 16,
                    nama: 'Dimas Prasetyo',
                    jabatan: 'Anggota',
                    prodi: 'Geografi',
                    foto: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=200&h=200&fit=crop&crop=face',
                    nim: '20/987654/FMIPA/32109'
                }
            ]
        },
        {
            id: 3,
            namaDesa: "Desa Pampang",
            deskripsi: "Tim KKN yang bertugas di Desa Pampang dengan fokus program kesehatan masyarakat dan lingkungan",
            koordinator: {
                nama: 'Ahmad Fadli Rahman',
                jabatan: 'Koordinator Sub Unit Pampang',
                foto: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=face',
                prodi: 'Kedokteran Hewan',
                nim: '20/345678/KH/90123'
            },
            fotoBersama: [
                'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop'
            ],
            anggota: [
                {
                    id: 8,
                    nama: 'Putri Maharani',
                    jabatan: 'Ketua Tim',
                    prodi: 'Farmasi',
                    foto: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face',
                    nim: '20/678901/FA/34567'
                },
                {
                    id: 9,
                    nama: 'Rahman Hakim',
                    jabatan: 'Wakil Ketua',
                    prodi: 'Kedokteran',
                    foto: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face',
                    nim: '20/890123/FK/67890'
                },
                {
                    id: 10,
                    nama: 'Lestari Indah',
                    jabatan: 'Sekretaris',
                    prodi: 'Biologi',
                    foto: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face',
                    nim: '20/012345/BI/23456'
                },
                {
                    id: 11,
                    nama: 'Fajar Nugroho',
                    jabatan: 'Bendahara',
                    prodi: 'Ekonomi',
                    foto: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop&crop=face',
                    nim: '20/345612/EB/78901'
                },
                {
                    id: 12,
                    nama: 'Indira Sari',
                    jabatan: 'Koordinator Lapangan',
                    prodi: 'Hukum',
                    foto: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=200&fit=crop&crop=face',
                    nim: '20/567834/HK/12345'
                },
                {
                    id: 17,
                    nama: 'Bayu Anggoro',
                    jabatan: 'Anggota',
                    prodi: 'Teknik Lingkungan',
                    foto: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face',
                    nim: '20/246810/TK/13579'
                },
                {
                    id: 18,
                    nama: 'Sari Wulandari',
                    jabatan: 'Anggota',
                    prodi: 'Gizi Kesehatan',
                    foto: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=200&h=200&fit=crop&crop=face',
                    nim: '20/135792/FK/46820'
                }
            ]
        }
    ];

    return (
        <section id="profil" className="py-8 sm:py-12 lg:py-16 bg-blue-50 w-full">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-2 sm:mb-4 text-blue-900">
                    Tim KKN-PPM UGM Paliyan 2025
                </h2>
                <p className="text-center mb-8 sm:mb-12 text-blue-700 max-w-2xl mx-auto text-sm sm:text-base">
                    Mahasiswa KKN-PPM UGM yang bertugas di 3 desa di Kecamatan Paliyan, 
                    Kabupaten Gunung Kidul untuk periode 2025.
                </p>
                
                <DesaCarousel desaList={desaData} />
            </div>
        </section>
    );
};

export default DesaSection;