import React from 'react';
import DesaCarousel from './DesaCarousel';

const DesaSection = () => {
    // Data 3 desa dengan koordinator, foto bersama, dan anggota
    const desaData = [
        {
            id: 1,
            namaDesa: "Desa Karangduwet",
            deskripsi: "Tim KKN yang bertugas di Desa Karangduwet",
            koordinator: {
                nama: 'Bro',
                jabatan: 'Koordinator Sub Unit 1 Karangduwet',
                foto: '/images/koordinator/bro.jpg',
                prodi: 'Teknik Elektro',
                nim: '20/123456/TK/78901'
            },
            fotoBersama: '/images/foto-bersama/karangduwet.jpg',
            anggota: [
                {
                    id: 1,
                    nama: 'Ahmad Rizki Pratama',
                    jabatan: 'Ketua Tim',
                    prodi: 'Teknik Informatika',
                    foto: '/images/anggota/ahmad.jpg',
                    nim: '20/463721/TK/51234'
                },
                {
                    id: 2,
                    nama: 'Siti Nurhaliza',
                    jabatan: 'Wakil Ketua',
                    prodi: 'Ilmu Komunikasi',
                    foto: '/images/anggota/siti.jpg',
                    nim: '20/456789/SO/12345'
                },
                {
                    id: 3,
                    nama: 'Budi Santoso',
                    jabatan: 'Sekretaris',
                    prodi: 'Manajemen',
                    foto: '/images/anggota/budi.jpg',
                    nim: '20/123456/EB/67890'
                },
                {
                    id: 4,
                    nama: 'Maya Indira Sari',
                    jabatan: 'Bendahara',
                    prodi: 'Akuntansi',
                    foto: '/images/anggota/maya.jpg',
                    nim: '20/789123/EB/45678'
                }
            ]
        },
        {
            id: 2,
            namaDesa: "Desa Grogol",
            deskripsi: "Tim KKN yang bertugas di Desa Grogol",
            koordinator: {
                nama: 'Dewi Sartika',
                jabatan: 'Koordinator Sub Unit Grogol',
                foto: '/images/koordinator/dewi-sartika.jpg',
                prodi: 'Ilmu Pemerintahan',
                nim: '20/234567/SO/89012'
            },
            fotoBersama: '/images/foto-bersama/grogol.jpg',
            anggota: [
                {
                    id: 5,
                    nama: 'Andi Wijaya',
                    jabatan: 'Ketua Tim',
                    prodi: 'Teknik Sipil',
                    foto: '/images/anggota/andi.jpg',
                    nim: '20/345678/TK/91234'
                },
                {
                    id: 6,
                    nama: 'Dewi Kartika',
                    jabatan: 'Wakil Ketua',
                    prodi: 'Psikologi',
                    foto: '/images/anggota/dewi.jpg',
                    nim: '20/567890/PSI/23456'
                },
                {
                    id: 7,
                    nama: 'Reza Firmansyah',
                    jabatan: 'Sekretaris',
                    prodi: 'Desain Komunikasi Visual',
                    foto: '/images/anggota/reza.jpg',
                    nim: '20/234567/SV/78901'
                }
            ]
        },
        {
            id: 3,
            namaDesa: "Desa Pampang",
            deskripsi: "Tim KKN yang bertugas di Desa Pampang",
            koordinator: {
                nama: 'Ahmad Fadli Rahman',
                jabatan: 'Koordinator Sub Unit Pampang',
                foto: '/images/koordinator/ahmad-fadli.jpg',
                prodi: 'Kedokteran Hewan',
                nim: '20/345678/KH/90123'
            },
            fotoBersama: '/images/foto-bersama/pampang.jpg',
            anggota: [
                {
                    id: 8,
                    nama: 'Putri Maharani',
                    jabatan: 'Ketua Tim',
                    prodi: 'Farmasi',
                    foto: '/images/anggota/putri.jpg',
                    nim: '20/678901/FA/34567'
                },
                {
                    id: 9,
                    nama: 'Rahman Hakim',
                    jabatan: 'Wakil Ketua',
                    prodi: 'Kedokteran',
                    foto: '/images/anggota/rahman.jpg',
                    nim: '20/890123/FK/67890'
                },
                {
                    id: 10,
                    nama: 'Lestari Indah',
                    jabatan: 'Sekretaris',
                    prodi: 'Biologi',
                    foto: '/images/anggota/lestari.jpg',
                    nim: '20/012345/BI/23456'
                },
                {
                    id: 11,
                    nama: 'Fajar Nugroho',
                    jabatan: 'Bendahara',
                    prodi: 'Ekonomi',
                    foto: '/images/anggota/fajar.jpg',
                    nim: '20/345612/EB/78901'
                },
                {
                    id: 12,
                    nama: 'Indira Sari',
                    jabatan: 'Koordinator',
                    prodi: 'Hukum',
                    foto: '/images/anggota/indira.jpg',
                    nim: '20/567834/HK/12345'
                }
            ]
        }
    ];

    return (
        <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">
                    Tim KKN-PPM UGM Paliyan 2025
                </h2>
                <p className="text-center mb-12 text-blue-700 max-w-2xl mx-auto">
                    Mahasiswa KKN-PPM UGM yang bertugas di 3 desa di Kecamatan Paliyan, 
                    Kabupaten Gunung Kidul untuk periode 2025.
                </p>
                
                <DesaCarousel desaList={desaData} />
            </div>
        </section>
    );
};

export default DesaSection;