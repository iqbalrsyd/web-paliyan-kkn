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
                    nama: 'Aldi Donila Putra',
                    nim: '22/492543/SV/20544',
                    prodi: 'Ekonomika dan Bisnis',
                    jabatan: 'Kormasit & Logistik',
                    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 2,
                    nama: 'Roselina Maitri Adi Acintya',
                    nim: '22/496212/PS/23052',
                    prodi: 'Psikologi',
                    jabatan: 'Anggota & Koor PDD',
                    foto: 'https://images.unsplash.com/photo-1494790108755-2616c96e0e3f?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 3,
                    nama: 'Selestino Barthanso Barasa',
                    nim: '22/492482/PN/17590',
                    prodi: 'Perikanan',
                    jabatan: 'Koor Logistik',
                    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 4,
                    nama: 'Sabrinna Mifthania',
                    nim: '22/494667/KH/11250',
                    prodi: 'Kedokteran Hewan',
                    jabatan: 'Sekretaris',
                    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 5,
                    nama: 'Raihan Ichlasul Akmal',
                    nim: '22/506144/SV/22082',
                    prodi: 'Teknologi Rekayasa Internet',
                    jabatan: 'Kormater',
                    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 6,
                    nama: 'Nur Rafika Hakiki',
                    nim: '22/496964/PA/21380',
                    prodi: 'Fisika',
                    jabatan: 'Humas',
                    foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face'
                },
                    {
                    id: 7,
                    nama: 'Nastiti Dita Rianti',
                    nim: '22/494079/PS/23013',
                    prodi: 'Psikologi',
                    jabatan: 'Anggota',
                    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face'
                }
            ]
        },
        {
            id: 2,
            namaDesa: "Desa Grogol",
            deskripsi: "Tim KKN yang bertugas di Desa Grogol dengan program unggulan pengembangan wisata dan budaya lokal",
            deskripsiGeografis: "Desa Grogol berada di wilayah tengah Kecamatan Paliyan dengan topografi yang relatif datar. Desa ini dikenal dengan tradisi budaya yang masih kental dan masyarakat yang ramah. Mata pencaharian utama penduduk adalah bertani dan berternak.",
            fotoGeografis: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
            reverse: true,
            color: "teal",
            icon: "🏛️",
            highlight: "Budaya & Tradisi",
            programCount: 70,
            umkmCount: 25,
            isMultipleKoordinator: true,
            koordinator: {
                nama: 'Ahmad Lutfi Alfajar dan Izzatullah Ahmad Muqaffa',
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
                    id: 8,
                    nama: 'Izzatullah Ahmad Muqaffa',
                    nim: '22/498772/TK/54722',
                    prodi: 'Teknik Arsitektur dan Perancangan',
                    jabatan: 'Kormasit',
                    foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 9,
                    nama: 'Safira Wahda Widyaputri',
                    nim: '22/505542/TK/55328',
                    prodi: 'Teknik Fisika',
                    jabatan: 'Anggota',
                    foto: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 10,
                    nama: 'Vincentius Gavin Alvaro Sitorus',
                    nim: '22/496156/EK/23905',
                    prodi: 'Ilmu Ekonomi',
                    jabatan: 'Anggota',
                    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 11,
                    nama: 'Nashifa Sekar Listyandani',
                    nim: '22/505271/KH/11389',
                    prodi: 'Kedokteran Hewan',
                    jabatan: 'Sekretaris 2',
                    foto: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 12,
                    nama: 'Reffa Anggelyar Vindia S.',
                    nim: '22/494151/SA/21427',
                    prodi: 'Bahasa dan Kebudayaan Jepang',
                    jabatan: 'Anggota',
                    foto: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 13,
                    nama: 'Sugesti Yeni Prastiwi',
                    nim: '22/492436/SV/20494',
                    prodi: 'Ekonomika dan Bisnis',
                    jabatan: 'Logistik',
                    foto: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 14,
                    nama: 'Ahmad Lutfi Alfajar',
                    nim: '22/497895/HK/23298',
                    prodi: 'Hukum',
                    jabatan: 'Kormasit & PDD',
                    foto: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 15,
                    nama: 'Berliana Ayu Iriyanti',
                    nim: '22/504960/TK/55240',
                    prodi: 'Teknik Geodesi',
                    jabatan: 'Kormanit',
                    foto: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 16,
                    nama: 'Don Domenico Darmawan',
                    nim: '22/506139/EK/24189',
                    prodi: 'Akuntansi',
                    jabatan: 'Anggota',
                    foto: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 17,
                    nama: 'Luthfi Salma Hamidah',
                    nim: '22/500092/TP/13541',
                    prodi: 'Teknik Pertanian dan Biosistem',
                    jabatan: 'Kormater',
                    foto: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 18,
                    nama: 'Arsy Mahanani',
                    nim: '22/498027/SP/30914',
                    prodi: 'Ilmu Hubungan Internasional',
                    jabatan: 'Bendahara',
                    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 19,
                    nama: 'Intan Ayuningtyas',
                    nim: '22/492839/HK/23135',
                    prodi: 'Hukum',
                    jabatan: 'Bendahara',
                    foto: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 20,
                    nama: 'Diny Wahida Sumarny',
                    nim: '22/493317/SV/20687',
                    prodi: 'Teknologi Kebumian',
                    jabatan: 'Korbid Humas',
                    foto: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face'
                }
            ]
        },
        {
            id: 3,
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
                foto: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=face',
                prodi: 'Teknologi Informasi',
                nim: '22/506066/TK/55425'
            },
            fotoBersama: [
                'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop'
            ],
            anggota: [
                {
                    id: 21,
                    nama: 'Iqbal Hidayat Rasyad',
                    nim: '22/506066/TK/55425',
                    prodi: 'Teknologi Informasi',
                    jabatan: 'Kormasit & Humas',
                    foto: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 22,
                    nama: 'Della Nurhaliza',
                    nim: '22/496590/EK/23943',
                    prodi: 'Akuntansi',
                    jabatan: 'Humas',
                    foto: 'https://images.unsplash.com/photo-1488508872907-592763824245?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 23,
                    nama: 'Alvanza Daniswara Haryadi',
                    nim: '22/497630/TK/54544',
                    prodi: 'Teknik Geologi',
                    jabatan: 'Anggota',
                    foto: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 24,
                    nama: 'Aimee Suuze Niode',
                    nim: '22/506190/SA/22078',
                    prodi: 'Bahasa dan Kebudayaan Korea',
                    jabatan: 'Kormater',
                    foto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 25,
                    nama: 'Shalmiah Aegesti',
                    nim: '22/493488/SV/20702',
                    prodi: 'Pengelolaan Hutan',
                    jabatan: 'Logistik',
                    foto: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 26,
                    nama: 'Aulia Nabilah M',
                    nim: '22/497404/KG/12782',
                    prodi: 'Kedokteran Gigi',
                    jabatan: 'Anggota',
                    foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face'
                },
                {
                    id: 27,
                    nama: 'Sonya Clara A. Winokan Mendes',
                    nim: '22/492382/BI/10915',
                    prodi: 'Fisiologi Tumbuhan',
                    jabatan: 'Logistik',
                    foto: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face'
                }
            ]
        }
];

const DesaSection = () => {
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