export interface Program {
  id: number;   
  title: string;
  category: string;
  description: string;
  status: string;
  duration: string;
  target: string;
  image: string;
  details: string[];
  coordinator: string;
  location: string;
  budget?: string;
}

export const programData = {
  'Karangduwet': {
    categories: ['semua', 'pertanian', 'ekonomi', 'sosial', 'lingkungan'],
    programs: [
      {
        id: 1,
        title: 'Optimalisasi Sistem Irigasi',
        category: 'pertanian',
        description: 'Perbaikan dan pemeliharaan sistem irigasi untuk meningkatkan produktivitas pertanian',
        status: 'Berlangsung',
        duration: '6 bulan',
        target: '150 petani',
        coordinator: 'Aldi Donila Putra',
        location: 'Area persawahan Karangduwet',
        budget: 'Rp 75.000.000',
        image: '/logo-kkn.png',
        details: [
          'Perbaikan saluran irigasi utama sepanjang 2.5 km',
          'Pembuatan saluran irigasi tersier di 5 titik strategis',
          'Pelatihan pengelolaan air untuk 150 petani',
          'Monitoring kualitas air secara berkala setiap minggu',
          'Pembentukan kelompok pengelola irigasi desa'
        ]
      },
      {
        id: 2,
        title: 'Pengembangan UMKM Kerajinan Bambu',
        category: 'ekonomi',
        description: 'Pemberdayaan masyarakat melalui pelatihan dan pemasaran kerajinan bambu',
        status: 'Perencanaan',
        duration: '4 bulan',
        target: '30 pengrajin',
        coordinator: 'Roselina Maitri Adi Acintya',
        location: 'Balai Desa Karangduwet',
        budget: 'Rp 45.000.000',
        image: '/logo-kkn.png',
        details: [
          'Pelatihan teknik kerajinan bambu modern selama 2 minggu',
          'Penyediaan alat dan bahan baku untuk 30 pengrajin',
          'Workshop desain produk yang marketable',
          'Bantuan pemasaran online melalui marketplace',
          'Pembentukan koperasi pengrajin bambu'
        ]
      },
      {
        id: 3,
        title: 'Program Posyandu Balita Sehat',
        category: 'sosial',
        description: 'Peningkatan kualitas kesehatan balita melalui program posyandu terintegrasi',
        status: 'Berlangsung',
        duration: '12 bulan',
        target: '85 balita',
        coordinator: 'Sabrinna Mifthania',
        location: 'Posyandu Mawar & Melati',
        budget: 'Rp 25.000.000',
        image: '/logo-kkn.png',
        details: [
          'Pemeriksaan kesehatan rutin balita setiap bulan',
          'Penyuluhan gizi dan pola makan sehat untuk ibu',
          'Imunisasi lengkap sesuai jadwal Kemenkes',
          'Monitoring tumbuh kembang anak berkala',
          'Pelatihan kader posyandu'
        ]
      },
      {
        id: 4,
        title: 'Bank Sampah Desa Hijau',
        category: 'lingkungan',
        description: 'Pengelolaan sampah berbasis masyarakat untuk lingkungan yang bersih dan sehat',
        status: 'Berlangsung',
        duration: '8 bulan',
        target: '200 KK',
        coordinator: 'Selestino Barthanso Barasa',
        location: 'Bank Sampah Desa Karangduwet',
        budget: 'Rp 35.000.000',
        image: '/logo-kkn.png',
        details: [
          'Pembentukan kelompok pengelola sampah di 4 RT',
          'Pelatihan pemilahan dan pengolahan sampah organik',
          'Pembuatan kompos dari sampah organik',
          'Sistem reward point untuk peserta aktif',
          'Penjualan hasil daur ulang ke industri'
        ]
      },
      {
        id: 5,
        title: 'Sekolah Lapang Pertanian Terpadu',
        category: 'pertanian',
        description: 'Program pelatihan petani untuk meningkatkan produktivitas dan kualitas hasil panen',
        status: 'Berlangsung',
        duration: '8 bulan',
        target: '75 petani',
        coordinator: 'Aldi Donila Putra',
        location: 'Lahan demplot Karangduwet',
        budget: 'Rp 50.000.000',
        image: '/logo-kkn.png',
        details: [
          'Pelatihan teknik budidaya modern dan organik',
          'Pembuatan demplot tanaman unggulan',
          'Penyuluhan pengendalian hama ramah lingkungan',
          'Pelatihan pasca panen dan pengolahan',
          'Bantuan bibit dan pupuk organik'
        ]
      },
      {
        id: 6,
        title: 'Pasar Digital Karangduwet',
        category: 'ekonomi',
        description: 'Platform digital untuk memasarkan produk lokal UMKM Karangduwet',
        status: 'Perencanaan',
        duration: '5 bulan',
        target: '50 UMKM',
        coordinator: 'Roselina Maitri Adi Acintya',
        location: 'Online dan Balai Desa',
        budget: 'Rp 40.000.000',
        image: '/logo-kkn.png',
        details: [
          'Pembuatan website e-commerce lokal',
          'Pelatihan digital marketing untuk UMKM',
          'Integrasi dengan media sosial dan marketplace',
          'Sistem pembayaran digital',
          'Promosi dan branding produk lokal'
        ]
      },
      {
        id: 7,
        title: 'Gerakan 1000 Hari Pertama Kehidupan',
        category: 'sosial',
        description: 'Program kesehatan ibu hamil dan balita untuk mencegah stunting',
        status: 'Berlangsung',
        duration: '24 bulan',
        target: '120 ibu dan balita',
        coordinator: 'Sabrinna Mifthania',
        location: 'Puskesdes Karangduwet',
        budget: 'Rp 60.000.000',
        image: '/logo-kkn.png',
        details: [
          'Pemeriksaan kesehatan ibu hamil rutin',
          'Penyuluhan gizi seimbang 1000 HPK',
          'Monitoring pertumbuhan balita intensif',
          'Pemberian makanan tambahan bergizi',
          'Pelatihan kader kesehatan masyarakat'
        ]
      },
      {
        id: 8,
        title: 'Kampung Tangguh Bencana',
        category: 'lingkungan',
        description: 'Pembentukan sistem siaga bencana berbasis masyarakat',
        status: 'Perencanaan',
        duration: '6 bulan',
        target: 'Seluruh RT',
        coordinator: 'Selestino Barthanso Barasa',
        location: 'Seluruh wilayah Karangduwet',
        budget: 'Rp 45.000.000',
        image: '/logo-kkn.png',
        details: [
          'Pelatihan tim relawan tanggap bencana',
          'Pemetaan risiko bencana desa',
          'Pembuatan jalur evakuasi dan titik kumpul',
          'Penyediaan alat komunikasi darurat',
          'Simulasi tanggap bencana rutin'
        ]
      },
      {
        id: 9,
        title: 'Koperasi Simpan Pinjam Karang Sejahtera',
        category: 'ekonomi',
        description: 'Pembentukan koperasi untuk meningkatkan akses permodalan UMKM',
        status: 'Berlangsung',
        duration: '12 bulan',
        target: '100 anggota',
        coordinator: 'Roselina Maitri Adi Acintya',
        location: 'Kantor Koperasi Karangduwet',
        budget: 'Rp 85.000.000',
        image: '/logo-kkn.png',
        details: [
          'Pembentukan badan hukum koperasi',
          'Rekrutmen dan pelatihan pengurus',
          'Sistem simpan pinjam digital',
          'Program kredit mikro untuk UMKM',
          'Edukasi literasi keuangan'
        ]
      }
    ]
  },
  'Grogol': {
    categories: ['semua', 'budaya', 'ekonomi', 'teknologi', 'sosial'],
    programs: [
      {
        id: 1,
        title: 'Festival Budaya Grogol Heritage',
        category: 'budaya',
        description: 'Pelestarian dan promosi budaya lokal melalui festival tahunan',
        status: 'Perencanaan',
        duration: '3 bulan',
        target: '500 pengunjung',
        coordinator: 'Izzatullah Ahmad Muqaffa',
        location: 'Lapangan Desa Grogol',
        budget: 'Rp 85.000.000',
        image: '/logo-kkn.png',
        details: [
          'Pementasan seni tradisional Jawa',
          'Pameran produk budaya lokal dan kerajinan',
          'Workshop kesenian untuk generasi muda',
          'Dokumentasi budaya digital dan video',
          'Lomba budaya antar desa'
        ]
      },
      {
        id: 2,
        title: 'Inkubator UMKM Digital',
        category: 'ekonomi',
        description: 'Pemberdayaan UMKM melalui platform digital dan e-commerce',
        status: 'Berlangsung',
        duration: '6 bulan',
        target: '25 UMKM',
        coordinator: 'Ahmad Lutfi Alfajar',
        location: 'Balai Desa Grogol',
        budget: 'Rp 55.000.000',
        image: '/logo-kkn.png',
        details: [
          'Pelatihan digital marketing untuk UMKM',
          'Pembuatan website dan media sosial bisnis',
          'Integrasi dengan platform e-commerce populer',
          'Mentoring bisnis berkelanjutan',
          'Workshop fotografi produk'
        ]
      },
      {
        id: 3,
        title: 'Smart Village Grogol',
        category: 'teknologi',
        description: 'Implementasi teknologi untuk meningkatkan pelayanan publik',
        status: 'Berlangsung',
        duration: '12 bulan',
        target: 'Seluruh warga',
        coordinator: 'Vincentius Gavin Alvaro Sitorus',
        location: 'Kantor Desa Grogol',
        budget: 'Rp 125.000.000',
        image: '/logo-kkn.png',
        details: [
          'Sistem informasi desa berbasis web',
          'Aplikasi mobile untuk layanan warga',
          'WiFi gratis di 10 titik area publik',
          'Pelatihan literasi digital untuk warga',
          'CCTV keamanan desa'
        ]
      },
      {
        id: 4,
        title: 'Gerakan Literasi Komunitas',
        category: 'sosial',
        description: 'Peningkatan minat baca dan budaya literasi di kalangan masyarakat',
        status: 'Berlangsung',
        duration: '10 bulan',
        target: '300 warga',
        coordinator: 'Nashifa Sekar Listyandani',
        location: 'Taman Baca Grogol',
        budget: 'Rp 30.000.000',
        image: '/logo-kkn.png',
        details: [
          'Pendirian taman baca masyarakat modern',
          'Program dongeng untuk anak-anak setiap weekend',
          'Pelatihan menulis kreatif untuk remaja',
          'Kompetisi karya tulis tingkat desa',
          'Perpustakaan keliling'
        ]
      },
      {
        id: 5,
        title: 'Sanggar Seni Kreatif Grogol',
        category: 'budaya',
        description: 'Pembentukan sanggar seni untuk mengembangkan kreativitas generasi muda',
        status: 'Berlangsung',
        duration: '8 bulan',
        target: '80 remaja',
        coordinator: 'Izzatullah Ahmad Muqaffa',
        location: 'Sanggar Seni Grogol',
        budget: 'Rp 40.000.000',
        image: '/logo-kkn.png',
        details: [
          'Kelas tari tradisional dan modern',
          'Workshop musik dan vokal',
          'Pelatihan teater dan drama',
          'Kelas melukis dan seni rupa',
          'Pertunjukan rutin setiap bulan'
        ]
      },
      {
        id: 6,
        title: 'Grogol StartUp Incubator',
        category: 'ekonomi',
        description: 'Program inkubasi startup teknologi dan bisnis digital untuk pemuda',
        status: 'Perencanaan',
        duration: '12 bulan',
        target: '20 startup',
        coordinator: 'Ahmad Lutfi Alfajar',
        location: 'Co-working Space Grogol',
        budget: 'Rp 75.000.000',
        image: '/logo-kkn.png',
        details: [
          'Bootcamp entrepreneurship dan business plan',
          'Mentoring dari praktisi startup berpengalaman',
          'Akses funding dan investor network',
          'Workshop teknis product development',
          'Demo day dan pitching competition'
        ]
      },
      {
        id: 7,
        title: 'Internet of Things (IoT) Desa',
        category: 'teknologi',
        description: 'Implementasi teknologi IoT untuk monitoring dan automasi desa',
        status: 'Berlangsung',
        duration: '10 bulan',
        target: '15 titik monitoring',
        coordinator: 'Vincentius Gavin Alvaro Sitorus',
        location: 'Area strategis Grogol',
        budget: 'Rp 90.000.000',
        image: '/logo-kkn.png',
        details: [
          'Sensor monitoring kualitas air real-time',
          'Sistem peringatan dini cuaca ekstrem',
          'Smart lighting jalan desa otomatis',
          'Monitoring traffic dan keamanan',
          'Dashboard monitoring terpusat'
        ]
      },
      {
        id: 8,
        title: 'Akademi Digital Grogol',
        category: 'sosial',
        description: 'Program pelatihan digital skills untuk meningkatkan employability warga',
        status: 'Berlangsung',
        duration: '6 bulan',
        target: '150 peserta',
        coordinator: 'Nashifa Sekar Listyandani',
        location: 'Lab Komputer Grogol',
        budget: 'Rp 35.000.000',
        image: '/logo-kkn.png',
        details: [
          'Kelas basic computer dan internet',
          'Training Microsoft Office dan Google Workspace',
          'Workshop content creation dan social media',
          'Pelatihan freelancing dan remote work',
          'Sertifikasi digital skills'
        ]
      },
      {
        id: 9,
        title: 'Museum Digital Grogol Heritage',
        category: 'budaya',
        description: 'Digitalisasi warisan budaya dan sejarah Grogol dalam platform virtual',
        status: 'Perencanaan',
        duration: '8 bulan',
        target: 'Dokumentasi lengkap',
        coordinator: 'Izzatullah Ahmad Muqaffa',
        location: 'Museum Virtual Grogol',
        budget: 'Rp 65.000.000',
        image: '/logo-kkn.png',
        details: [
          'Digitalisasi artefak dan dokumen sejarah',
          'Pembuatan virtual tour interaktif',
          'Recording oral history dari tetua desa',
          'Pembuatan aplikasi mobile museum',
          'Workshop digital archiving'
        ]
      }
    ]
  },
  'Pampang': {
    categories: ['semua', 'wisata', 'lingkungan', 'ekonomi', 'konservasi'],
    programs: [
      {
        id: 1,
        title: 'Pampang Eco-Tourism Development',
        category: 'wisata',
        description: 'Pengembangan destinasi ekowisata berkelanjutan dengan konsep ramah lingkungan',
        status: 'Berlangsung',
        duration: '8 bulan',
        target: '1000 wisatawan/tahun',
        coordinator: 'Iqbal Hidayat Rasyad',
        location: 'Area wisata Pampang',
        budget: 'Rp 95.000.000',
        image: '/logo-kkn.png',
        details: [
          'Pembangunan jalur tracking alam sepanjang 3 km',
          'Pelatihan pemandu wisata lokal bersertifikat',
          'Fasilitas homestay ramah lingkungan',
          'Promosi wisata digital dan media sosial',
          'Pengembangan spot foto instagramable'
        ]
      },
      {
        id: 2,
        title: 'Konservasi Hutan Desa',
        category: 'konservasi',
        description: 'Program pelestarian hutan dan keanekaragaman hayati dengan partisipasi masyarakat',
        status: 'Berlangsung',
        duration: '12 bulan',
        target: '50 ha hutan',
        coordinator: 'Shalmiah Aegesti',
        location: 'Hutan Desa Pampang',
        budget: 'Rp 65.000.000',
        image: '/logo-kkn.png',
        details: [
          'Reboisasi area hutan gundul dengan 5000 bibit',
          'Monitoring flora dan fauna langka',
          'Pembentukan kelompok pelestari hutan',
          'Edukasi konservasi untuk generasi muda',
          'Patrol hutan rutin untuk mencegah illegal logging'
        ]
      },
      {
        id: 3,
        title: 'Produk Organik Pampang',
        category: 'ekonomi',
        description: 'Pengembangan pertanian organik dan produk olahan lokal berkualitas',
        status: 'Perencanaan',
        duration: '10 bulan',
        target: '40 petani',
        coordinator: 'Aulia Nabilah M',
        location: 'Lahan pertanian Pampang',
        budget: 'Rp 70.000.000',
        image: '/logo-kkn.png',
        details: [
          'Sertifikasi pertanian organik nasional',
          'Pelatihan teknik budidaya organik modern',
          'Pengembangan produk olahan organik',
          'Branding dan packaging produk premium',
          'Kerjasama dengan supermarket organik'
        ]
      },
      {
        id: 4,
        title: 'Kampung Ramah Lingkungan',
        category: 'lingkungan',
        description: 'Transformasi desa menjadi kampung model dalam pengelolaan lingkungan',
        status: 'Berlangsung',
        duration: '6 bulan',
        target: 'Seluruh RT',
        coordinator: 'Sonya Clara A. Winokan Mendes',
        location: 'Seluruh wilayah Pampang',
        budget: 'Rp 80.000.000',
        image: '/logo-kkn.png',
        details: [
          'Program zero waste household di setiap RT',
          'Instalasi panel surya komunal 20 kW',
          'Sistem pengelolaan air bersih berkelanjutan',
          'Taman organik di setiap RT',
          'Program biopori dan lubang resapan air'
        ]
      },
      {
        id: 5,
        title: 'Pampang Adventure Park',
        category: 'wisata',
        description: 'Pembangunan taman petualangan alam untuk wisata keluarga',
        status: 'Perencanaan',
        duration: '12 bulan',
        target: '2000 pengunjung/tahun',
        coordinator: 'Iqbal Hidayat Rasyad',
        location: 'Hutan Wisata Pampang',
        budget: 'Rp 120.000.000',
        image: '/logo-kkn.png',
        details: [
          'Flying fox sepanjang 500 meter',
          'Canopy bridge dan tree house',
          'Area camping ground dengan fasilitas lengkap',
          'Outbound training center',
          'Visitor center dan souvenir shop'
        ]
      },
      {
        id: 6,
        title: 'Suaka Satwa Pampang',
        category: 'konservasi',
        description: 'Pembentukan kawasan konservasi untuk melindungi satwa langka lokal',
        status: 'Berlangsung',
        duration: '18 bulan',
        target: '25 spesies satwa',
        coordinator: 'Shalmiah Aegesti',
        location: 'Kawasan Hutan Pampang',
        budget: 'Rp 85.000.000',
        image: '/logo-kkn.png',
        details: [
          'Penelitian dan inventarisasi fauna lokal',
          'Pembangunan fasilitas penelitian satwa',
          'Program breeding satwa langka',
          'Edukasi konservasi untuk sekolah',
          'Patrol anti perburuan dan perdagangan ilegal'
        ]
      },
      {
        id: 7,
        title: 'Agro-Tourism Pampang Organic',
        category: 'ekonomi',
        description: 'Pengembangan wisata agro berbasis pertanian organik dan edukasi',
        status: 'Berlangsung',
        duration: '8 bulan',
        target: '500 wisatawan edukasi',
        coordinator: 'Aulia Nabilah M',
        location: 'Kebun Organik Pampang',
        budget: 'Rp 55.000.000',
        image: '/logo-kkn.png',
        details: [
          'Farm tour dan edukasi pertanian organik',
          'Workshop pengolahan produk organik',
          'Paket harvest experience untuk wisatawan',
          'Penjualan produk organik direct selling',
          'Kafe organik dengan view pegunungan'
        ]
      },
      {
        id: 8,
        title: 'Smart Forest Management',
        category: 'lingkungan',
        description: 'Sistem monitoring hutan pintar menggunakan teknologi IoT dan drone',
        status: 'Perencanaan',
        duration: '10 bulan',
        target: '100 ha monitoring',
        coordinator: 'Sonya Clara A. Winokan Mendes',
        location: 'Hutan Pampang',
        budget: 'Rp 95.000.000',
        image: '/logo-kkn.png',
        details: [
          'Instalasi sensor monitoring suhu dan kelembaban',
          'Sistem early warning kebakaran hutan',
          'Drone patrol untuk monitoring illegal logging',
          'Database digital kehutanan',
          'Training teknisi monitoring hutan'
        ]
      },
      {
        id: 9,
        title: 'Pampang Green Energy Village',
        category: 'ekonomi',
        description: 'Pengembangan desa mandiri energi terbarukan berbasis komunitas',
        status: 'Berlangsung',
        duration: '15 bulan',
        target: '80% kebutuhan energi',
        coordinator: 'Sonya Clara A. Winokan Mendes',
        location: 'Seluruh wilayah Pampang',
        budget: 'Rp 150.000.000',
        image: '/logo-kkn.png',
        details: [
          'Instalasi solar panel komunal 50 kW',
          'Pembangunan micro-hydro power plant',
          'Biogas plant dari limbah ternak',
          'Pelatihan teknisi energi terbarukan',
          'Smart grid management system'
        ]
      }
    ]
  }
};