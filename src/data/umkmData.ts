export interface UMKM {
  id: number;
  name: string;
  category: string;
  description: string;
  owner: string;
  location: string;
  contact: {
    phone: string;
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
  };
  image: string;
  products: string[];
  priceRange: string;
  operational: string;
  speciality: string;
  rating?: number;
  established?: string;
}

export interface DesaUmkmData {
  categories: string[];
  description: string;
  umkms: UMKM[];
}

export const umkmData: Record<string, DesaUmkmData> = {
  'Karangduwet': {
    categories: ['semua', 'makanan', 'kerajinan', 'pertanian', 'jasa'],
    description: 'UMKM di Desa Karangduwet fokus pada produk pertanian dan kerajinan tradisional yang berkualitas tinggi.',
    umkms: [
      {
        id: 1,
        name: 'Warung Gudeg Bu Sari',
        category: 'makanan',
        description: 'Gudeg tradisional dengan cita rasa autentik menggunakan bahan-bahan segar dari kebun sendiri',
        owner: 'Ibu Sari Wahyuni',
        location: 'Jl. Raya Karangduwet No. 15',
        contact: {
          phone: '08123456789',
          whatsapp: '08123456789',
          instagram: '@gudeg_busari'
        },
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
        products: ['Gudeg Ayam', 'Gudeg Telur', 'Sambal Krecek', 'Es Teh Manis'],
        priceRange: 'Rp 15.000 - Rp 25.000',
        operational: 'Senin - Minggu (07:00 - 16:00)',
        speciality: 'Resep turun temurun 3 generasi',
        rating: 4.8,
        established: '1998'
      },
      {
        id: 2,
        name: 'Kerajinan Bambu Pak Joko',
        category: 'kerajinan',
        description: 'Kerajinan bambu berkualitas tinggi dengan desain modern dan tradisional',
        owner: 'Bapak Joko Susilo',
        location: 'Dusun Krajan RT 02/01',
        contact: {
          phone: '08987654321',
          whatsapp: '08987654321',
          instagram: '@bambu_pakjoko',
          facebook: 'Kerajinan Bambu Karangduwet'
        },
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        products: ['Tas Bambu', 'Tempat Pensil', 'Keranjang Hias', 'Lampu Hias'],
        priceRange: 'Rp 25.000 - Rp 150.000',
        operational: 'Senin - Sabtu (08:00 - 17:00)',
        speciality: 'Desain eksklusif dan ramah lingkungan',
        rating: 4.6,
        established: '2010'
      },
      {
        id: 3,
        name: 'Tani Organik Sejahtera',
        category: 'pertanian',
        description: 'Produk pertanian organik tanpa pestisida untuk kesehatan keluarga',
        owner: 'Kelompok Tani Sejahtera',
        location: 'Area Persawahan Karangduwet',
        contact: {
          phone: '08111222333',
          whatsapp: '08111222333',
          instagram: '@organik_sejahtera'
        },
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
        products: ['Beras Organik', 'Sayuran Organik', 'Jagung Manis', 'Kacang Hijau'],
        priceRange: 'Rp 12.000 - Rp 18.000/kg',
        operational: 'Setiap hari (06:00 - 18:00)',
        speciality: 'Sertifikat organik resmi',
        rating: 4.9,
        established: '2015'
      },
      {
        id: 4,
        name: 'Laundry Express Karang',
        category: 'jasa',
        description: 'Layanan laundry cepat dan bersih dengan harga terjangkau',
        owner: 'Ibu Rina Sartika',
        location: 'Jl. Masjid No. 8',
        contact: {
          phone: '08555666777',
          whatsapp: '08555666777',
          facebook: 'Laundry Express Karangduwet'
        },
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        products: ['Cuci Kering', 'Cuci Setrika', 'Dry Clean', 'Cuci Sepatu'],
        priceRange: 'Rp 5.000 - Rp 15.000/kg',
        operational: 'Senin - Sabtu (07:00 - 20:00)',
        speciality: 'Pickup dan delivery gratis',
        rating: 4.7,
        established: '2018'
      },
      {
        id: 5,
        name: 'Tempe Segar Bu Lastri',
        category: 'makanan',
        description: 'Tempe segar berkualitas tinggi dengan kedelai pilihan dan ragi tradisional',
        owner: 'Ibu Lastri Handayani',
        location: 'Jl. Pasar Karangduwet No. 3',
        contact: {
          phone: '08777888999',
          whatsapp: '08777888999',
          instagram: '@tempe_bulastri'
        },
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
        products: ['Tempe Segar', 'Tempe Mendoan', 'Kripik Tempe', 'Tempe Bacem'],
        priceRange: 'Rp 8.000 - Rp 20.000',
        operational: 'Setiap hari (05:00 - 18:00)',
        speciality: 'Proses fermentasi tradisional 48 jam',
        rating: 4.5,
        established: '2006'
      },
      {
        id: 6,
        name: 'Kerajinan Rotan Pak Sutrisno',
        category: 'kerajinan',
        description: 'Furniture dan kerajinan rotan berkualitas dengan desain kontemporer',
        owner: 'Bapak Sutrisno',
        location: 'Dusun Ngemplak RT 03/02',
        contact: {
          phone: '08666555444',
          whatsapp: '08666555444',
          instagram: '@rotan_sutrisno',
          facebook: 'Rotan Karangduwet'
        },
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
        products: ['Kursi Rotan', 'Meja Rotan', 'Rak Buku', 'Ayunan Rotan'],
        priceRange: 'Rp 75.000 - Rp 500.000',
        operational: 'Senin - Sabtu (08:00 - 16:00)',
        speciality: 'Custom design dan furniture set',
        rating: 4.4,
        established: '2013'
      },
      {
        id: 7,
        name: 'Hidroponik Modern Karang',
        category: 'pertanian',
        description: 'Sayuran hidroponik segar tanpa pestisida dengan teknologi modern',
        owner: 'Kelompok Tani Muda',
        location: 'Greenhouse Karangduwet',
        contact: {
          phone: '08333222111',
          whatsapp: '08333222111',
          instagram: '@hidroponik_karang'
        },
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
        products: ['Selada Hidroponik', 'Pakcoy', 'Kangkung', 'Bayam Merah'],
        priceRange: 'Rp 8.000 - Rp 15.000/pak',
        operational: 'Senin - Sabtu (07:00 - 17:00)',
        speciality: 'Teknologi NFT dan media tanam steril',
        rating: 4.6,
        established: '2019'
      },
      {
        id: 8,
        name: 'Service Motor Budi',
        category: 'jasa',
        description: 'Bengkel motor profesional dengan teknisi berpengalaman dan sparepart original',
        owner: 'Bapak Budi Santoso',
        location: 'Jl. Raya Karangduwet No. 45',
        contact: {
          phone: '08444333222',
          whatsapp: '08444333222',
          facebook: 'Bengkel Budi Motor'
        },
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d2e?w=400&h=300&fit=crop',
        products: ['Service Rutin', 'Ganti Oli', 'Service Rem', 'Tune Up Mesin'],
        priceRange: 'Rp 25.000 - Rp 200.000',
        operational: 'Senin - Sabtu (08:00 - 17:00)',
        speciality: 'Garansi service dan pick up gratis',
        rating: 4.3,
        established: '2014'
      },
      {
        id: 9,
        name: 'Warung Pecel Bu Ning',
        category: 'makanan',
        description: 'Pecel Jawa tradisional dengan bumbu rahasia dan lalapan segar',
        owner: 'Ibu Suning',
        location: 'Jl. Desa Karangduwet No. 22',
        contact: {
          phone: '08111000999',
          whatsapp: '08111000999',
          instagram: '@pecel_buning'
        },
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
        products: ['Pecel Lele', 'Pecel Ayam', 'Gado-gado', 'Tahu Tempe Bacem'],
        priceRange: 'Rp 12.000 - Rp 18.000',
        operational: 'Setiap hari (06:00 - 14:00)',
        speciality: 'Bumbu pecel racikan sendiri',
        rating: 4.7,
        established: '2001'
      }
    ]
  },
  'Grogol': {
    categories: ['semua', 'makanan', 'fashion', 'teknologi', 'seni'],
    description: 'UMKM di Desa Grogol mengembangkan produk kreatif dan inovatif dengan sentuhan budaya lokal.',
    umkms: [
      {
        id: 1,
        name: 'Batik Grogol Heritage',
        category: 'fashion',
        description: 'Batik eksklusif dengan motif khas Grogol yang memadukan tradisi dan modernitas',
        owner: 'Ibu Endang Sulistyo',
        location: 'Jl. Batik Indah No. 12',
        contact: {
          phone: '08222333444',
          whatsapp: '08222333444',
          instagram: '@batik_grogol',
          facebook: 'Batik Grogol Heritage'
        },
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop',
        products: ['Kemeja Batik', 'Dress Batik', 'Selendang', 'Tas Batik'],
        priceRange: 'Rp 85.000 - Rp 350.000',
        operational: 'Senin - Sabtu (09:00 - 18:00)',
        speciality: 'Motif original karya desainer lokal',
        rating: 4.8,
        established: '2012'
      },
      {
        id: 2,
        name: 'Kopi Robusta Grogol',
        category: 'makanan',
        description: 'Kopi premium dari kebun rakyat dengan cita rasa yang khas dan aromatic',
        owner: 'Bapak Ahmad Fauzi',
        location: 'Dusun Ngudi Mulyo',
        contact: {
          phone: '08333444555',
          whatsapp: '08333444555',
          instagram: '@kopi_grogol'
        },
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop',
        products: ['Kopi Bubuk', 'Kopi Biji', 'Cold Brew', 'Kopi Susu'],
        priceRange: 'Rp 45.000 - Rp 120.000',
        operational: 'Setiap hari (06:00 - 22:00)',
        speciality: 'Single origin dan fair trade',
        rating: 4.9,
        established: '2016'
      },
      {
        id: 3,
        name: 'Grogol Creative Studio',
        category: 'teknologi',
        description: 'Jasa desain grafis dan pengembangan website untuk UMKM lokal',
        owner: 'Tim Kreatif Grogol',
        location: 'Balai Desa Grogol',
        contact: {
          phone: '08444555666',
          whatsapp: '08444555666',
          instagram: '@grogol_creative',
          facebook: 'Grogol Creative Studio'
        },
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
        products: ['Logo Design', 'Website', 'Social Media Content', 'Branding Package'],
        priceRange: 'Rp 150.000 - Rp 2.500.000',
        operational: 'Senin - Jumat (09:00 - 17:00)',
        speciality: 'Konsultasi gratis dan revisi unlimited',
        rating: 4.7,
        established: '2020'
      },
      {
        id: 4,
        name: 'Seni Lukis Kanvas Tradisional',
        category: 'seni',
        description: 'Lukisan kanvas dengan tema budaya dan alam Grogol yang menginspirasi',
        owner: 'Bapak Bambang Artomo',
        location: 'Sanggar Seni Grogol',
        contact: {
          phone: '08555666777',
          whatsapp: '08555666777',
          instagram: '@lukis_grogol'
        },
        image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop',
        products: ['Lukisan Kanvas', 'Portrait Custom', 'Lukisan Miniatur', 'Kelas Melukis'],
        priceRange: 'Rp 200.000 - Rp 1.500.000',
        operational: 'Selasa - Minggu (10:00 - 16:00)',
        speciality: 'Karya original dan custom order',
        rating: 4.6,
        established: '2008'
      },
      {
        id: 5,
        name: 'Fashion Tenun Ikat Grogol',
        category: 'fashion',
        description: 'Pakaian tenun ikat tradisional dengan sentuhan fashion modern untuk segala usia',
        owner: 'Ibu Sri Handayani',
        location: 'Kampung Tenun Grogol',
        contact: {
          phone: '08777666555',
          whatsapp: '08777666555',
          instagram: '@tenun_grogol',
          facebook: 'Tenun Ikat Grogol'
        },
        image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&h=300&fit=crop',
        products: ['Blouse Tenun', 'Rok Tenun', 'Scarf Tenun', 'Outer Tenun'],
        priceRange: 'Rp 150.000 - Rp 450.000',
        operational: 'Senin - Sabtu (08:00 - 17:00)',
        speciality: 'Motif tenun khas Grogol turun temurun',
        rating: 4.5,
        established: '2009'
      },
      {
        id: 6,
        name: 'Bakery Roti Manis Grogol',
        category: 'makanan',
        description: 'Toko roti dan kue dengan resep tradisional dan modern yang lezat',
        owner: 'Bapak Wahyu Nugroho',
        location: 'Jl. Pasar Grogol No. 18',
        contact: {
          phone: '08888777666',
          whatsapp: '08888777666',
          instagram: '@bakery_grogol'
        },
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
        products: ['Roti Tawar', 'Roti Manis', 'Cake Custom', 'Donat Gula'],
        priceRange: 'Rp 8.000 - Rp 150.000',
        operational: 'Setiap hari (06:00 - 20:00)',
        speciality: 'Roti tanpa pengawet dan fresh daily',
        rating: 4.4,
        established: '2017'
      },
      {
        id: 7,
        name: 'Grogol Tech Repair',
        category: 'teknologi',
        description: 'Service laptop, komputer, dan gadget dengan teknisi bersertifikat',
        owner: 'Bapak Agus Setiawan',
        location: 'Ruko Grogol Center No. 5',
        contact: {
          phone: '08555444333',
          whatsapp: '08555444333',
          instagram: '@grogoltech_repair'
        },
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
        products: ['Service Laptop', 'Instal Software', 'Recovery Data', 'Upgrade Hardware'],
        priceRange: 'Rp 50.000 - Rp 500.000',
        operational: 'Senin - Sabtu (09:00 - 18:00)',
        speciality: 'Garansi service dan data recovery expert',
        rating: 4.6,
        established: '2018'
      },
      {
        id: 8,
        name: 'Keramik Seni Grogol',
        category: 'seni',
        description: 'Keramik hias dan fungsional dengan teknik tradisional dan desain kontemporer',
        owner: 'Ibu Dewi Sartika',
        location: 'Studio Keramik Grogol',
        contact: {
          phone: '08666333222',
          whatsapp: '08666333222',
          instagram: '@keramik_grogol',
          facebook: 'Keramik Seni Grogol'
        },
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        products: ['Vas Bunga', 'Piring Hias', 'Mug Custom', 'Patung Keramik'],
        priceRange: 'Rp 35.000 - Rp 300.000',
        operational: 'Selasa - Minggu (10:00 - 17:00)',
        speciality: 'Workshop keramik dan custom order',
        rating: 4.7,
        established: '2015'
      },
      {
        id: 9,
        name: 'Sate Kambing Pak Hasan',
        category: 'makanan',
        description: 'Sate kambing bakar dengan bumbu kacang spesial dan daging pilihan',
        owner: 'Bapak Hasan Basri',
        location: 'Alun-alun Grogol',
        contact: {
          phone: '08222111000',
          whatsapp: '08222111000',
          instagram: '@sate_pakhasan'
        },
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
        products: ['Sate Kambing', 'Sate Ayam', 'Tongseng Kambing', 'Gulai Kambing'],
        priceRange: 'Rp 20.000 - Rp 45.000',
        operational: 'Selasa - Minggu (17:00 - 23:00)',
        speciality: 'Kambing muda pilihan dan bumbu rahasia',
        rating: 4.8,
        established: '2005'
      }
    ]
  },
  'Pampang': {
    categories: ['semua', 'makanan', 'wisata', 'organik', 'kerajinan'],
    description: 'UMKM di Desa Pampang memanfaatkan kekayaan alam untuk menghasilkan produk berkualitas dan ramah lingkungan.',
    umkms: [
      {
        id: 1,
        name: 'Madu Hutan Pampang',
        category: 'organik',
        description: 'Madu murni dari hutan Pampang yang dipanen secara tradisional dan sustainable',
        owner: 'Kelompok Peternak Lebah',
        location: 'Hutan Lindung Pampang',
        contact: {
          phone: '08666777888',
          whatsapp: '08666777888',
          instagram: '@madu_pampang'
        },
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop',
        products: ['Madu Murni', 'Propolis', 'Royal Jelly', 'Lilin Lebah'],
        priceRange: 'Rp 65.000 - Rp 250.000',
        operational: 'Setiap hari (07:00 - 19:00)',
        speciality: 'Madu wild honey dengan sertifikat organik',
        rating: 4.9,
        established: '2014'
      },
      {
        id: 2,
        name: 'Homestay Pampang Asri',
        category: 'wisata',
        description: 'Penginapan ramah lingkungan dengan pemandangan alam pegunungan yang menakjubkan',
        owner: 'Ibu Sulastri',
        location: 'Bukit Pampang Indah',
        contact: {
          phone: '08777888999',
          whatsapp: '08777888999',
          instagram: '@homestay_pampang',
          facebook: 'Homestay Pampang Asri'
        },
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
        products: ['Kamar Standard', 'Kamar Deluxe', 'Paket Wisata', 'Catering Lokal'],
        priceRange: 'Rp 125.000 - Rp 350.000/malam',
        operational: '24 jam (reservasi H-1)',
        speciality: 'View sunrise terbaik di Paliyan',
        rating: 4.8,
        established: '2017'
      },
      {
        id: 3,
        name: 'Olahan Singkong Ibu Yati',
        category: 'makanan',
        description: 'Aneka olahan singkong tradisional dengan cita rasa modern yang memanjakan lidah',
        owner: 'Ibu Yati Sumarni',
        location: 'Jl. Pasar Pampang No. 5',
        contact: {
          phone: '08888999000',
          whatsapp: '08888999000',
          instagram: '@singkong_yati'
        },
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
        products: ['Keripik Singkong', 'Getuk Singkong', 'Tape Ketan', 'Es Cendol'],
        priceRange: 'Rp 8.000 - Rp 35.000',
        operational: 'Senin - Minggu (08:00 - 20:00)',
        speciality: 'Resep turun temurun tanpa pengawet',
        rating: 4.7,
        established: '2005'
      },
      {
        id: 4,
        name: 'Anyaman Pandan Pampang',
        category: 'kerajinan',
        description: 'Kerajinan anyaman pandan yang eco-friendly dan multifungsi untuk kebutuhan sehari-hari',
        owner: 'Kelompok Anyaman Ibu-ibu',
        location: 'Balai RW 03 Pampang',
        contact: {
          phone: '08999000111',
          whatsapp: '08999000111',
          instagram: '@anyaman_pampang',
          facebook: 'Anyaman Pandan Pampang'
        },
        image: 'https://images.unsplash.com/photo-1610375461369-d613b564ad2d?w=400&h=300&fit=crop',
        products: ['Tas Anyaman', 'Tikar Pandan', 'Tempat Nasi', 'Souvenir Unik'],
        priceRange: 'Rp 15.000 - Rp 85.000',
        operational: 'Senin - Sabtu (09:00 - 16:00)',
        speciality: 'Pewarna alami dan ramah lingkungan',
        rating: 4.6,
        established: '2011'
      },
      {
        id: 5,
        name: 'Kopi Arabika Pegunungan',
        category: 'organik',
        description: 'Kopi arabika premium dari kebun pegunungan Pampang dengan proses organik',
        owner: 'Bapak Suharto',
        location: 'Kebun Kopi Pampang',
        contact: {
          phone: '08777555333',
          whatsapp: '08777555333',
          instagram: '@kopi_pampang',
          facebook: 'Kopi Arabika Pampang'
        },
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
        products: ['Kopi Arabika Bubuk', 'Kopi Biji Sangrai', 'Kopi Drip Bag', 'Cold Brew'],
        priceRange: 'Rp 55.000 - Rp 150.000',
        operational: 'Setiap hari (06:00 - 20:00)',
        speciality: 'Single origin altitude 1200 mdpl',
        rating: 4.8,
        established: '2016'
      },
      {
        id: 6,
        name: 'Wisata Tracking Pampang',
        category: 'wisata',
        description: 'Paket wisata tracking dan adventure di hutan dan pegunungan Pampang',
        owner: 'Kelompok Sadar Wisata',
        location: 'Basecamp Pampang Hill',
        contact: {
          phone: '08555777999',
          whatsapp: '08555777999',
          instagram: '@tracking_pampang',
          facebook: 'Adventure Pampang'
        },
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
        products: ['Paket Tracking 1 Hari', 'Camping 2D1N', 'Bird Watching', 'Fotografi Alam'],
        priceRange: 'Rp 75.000 - Rp 300.000/orang',
        operational: 'Sabtu - Minggu (06:00 - 18:00)',
        speciality: 'Pemandu lokal bersertifikat',
        rating: 4.5,
        established: '2019'
      },
      {
        id: 7,
        name: 'Emping Melinjo Pampang',
        category: 'makanan',
        description: 'Emping melinjo renyah dengan kualitas premium dari pohon melinjo lokal',
        owner: 'Ibu Warni',
        location: 'Dusun Melinjo Pampang',
        contact: {
          phone: '08444666888',
          whatsapp: '08444666888',
          instagram: '@emping_pampang'
        },
        image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=300&fit=crop',
        products: ['Emping Goreng', 'Emping Mentah', 'Keripik Melinjo', 'Dodol Melinjo'],
        priceRange: 'Rp 25.000 - Rp 60.000',
        operational: 'Senin - Sabtu (08:00 - 17:00)',
        speciality: 'Proses tradisional tanpa bahan kimia',
        rating: 4.4,
        established: '2010'
      },
      {
        id: 8,
        name: 'Kerajinan Kayu Jati',
        category: 'kerajinan',
        description: 'Furniture dan kerajinan kayu jati berkualitas tinggi dengan desain eksklusif',
        owner: 'Bapak Mulyono',
        location: 'Workshop Kayu Pampang',
        contact: {
          phone: '08333888444',
          whatsapp: '08333888444',
          instagram: '@kayu_pampang',
          facebook: 'Kayu Jati Pampang'
        },
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
        products: ['Mebel Jati', 'Ukiran Kayu', 'Miniatur Jati', 'Custom Furniture'],
        priceRange: 'Rp 200.000 - Rp 5.000.000',
        operational: 'Senin - Sabtu (08:00 - 16:00)',
        speciality: 'Kayu jati premium dan custom design',
        rating: 4.7,
        established: '2012'
      },
      {
        id: 9,
        name: 'Herbal Organik Pampang',
        category: 'organik',
        description: 'Produk herbal organik dari tanaman obat lokal untuk kesehatan alami',
        owner: 'Ibu Siti Nurjanah',
        location: 'Kebun Herbal Pampang',
        contact: {
          phone: '08222777555',
          whatsapp: '08222777555',
          instagram: '@herbal_pampang'
        },
        image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=300&fit=crop',
        products: ['Jamu Tradisional', 'Teh Herbal', 'Minyak Kayu Putih', 'Kapsul Herbal'],
        priceRange: 'Rp 15.000 - Rp 85.000',
        operational: 'Setiap hari (07:00 - 18:00)',
        speciality: 'Resep jamu turun temurun dan organik',
        rating: 4.6,
        established: '2013'
      }
    ]
  }
};