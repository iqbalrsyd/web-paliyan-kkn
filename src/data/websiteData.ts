export interface WebsiteData {
  id: number;
  name: string;
  description: string;
  url: string;
  screenshot: string;
  category: string;
  features: string[];
  launchDate: string;
  status: 'aktif' | 'maintenance' | 'development';
}

export interface DesaWebsiteData {
  description: string;
  totalWebsites: number;
  websites: WebsiteData[];
}

export const websiteData: Record<string, DesaWebsiteData> = {
  'Karangduwet': {
    description: 'Platform digital Desa Karangduwet fokus pada layanan publik dan pemberdayaan UMKM lokal melalui teknologi modern.',
    totalWebsites: 3,
    websites: [
      {
        id: 1,
        name: 'Portal Desa Karangduwet',
        description: 'Website resmi dengan layanan administrasi online dan informasi terkini tentang pemerintahan desa.',
        url: 'https://karangduwet-desa.id',
        screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        category: 'Portal Resmi',
        features: ['Profil Desa', 'Berita Terkini', 'Layanan Online'],
        launchDate: '2023',
        status: 'aktif'
      },
      {
        id: 2,
        name: 'E-Commerce UMKM Karangduwet',
        description: 'Platform jual beli online khusus produk UMKM lokal untuk memperluas jangkauan pasar.',
        url: 'https://umkm-karangduwet.com',
        screenshot: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        category: 'E-Commerce',
        features: ['Katalog Produk', 'Sistem Pembayaran', 'Review Produk'],
        launchDate: '2024',
        status: 'aktif'
      },
      {
        id: 3,
        name: 'Sistem Informasi Desa',
        description: 'Manajemen data penduduk dan administrasi desa secara digital terintegrasi.',
        url: 'https://sid-karangduwet.id',
        screenshot: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
        category: 'Sistem Informasi',
        features: ['Data Penduduk', 'Surat Online', 'Dashboard Admin'],
        launchDate: '2023',
        status: 'maintenance'
      }
    ]
  },
  'Grogol': {
    description: 'Desa Grogol mengembangkan ekosistem digital smart village dengan integrasi IoT dan platform pariwisata modern.',
    totalWebsites: 2,
    websites: [
      {
        id: 1,
        name: 'Grogol Smart Village',
        description: 'Platform digital terintegrasi dengan IoT monitoring untuk smart farming dan layanan desa cerdas.',
        url: 'https://smartvillage-grogol.id',
        screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        category: 'Smart Village',
        features: ['IoT Dashboard', 'Smart Farming', 'Real-time Monitor'],
        launchDate: '2024',
        status: 'aktif'
      },
      {
        id: 2,
        name: 'Wisata Digital Grogol',
        description: 'Platform promosi destinasi wisata dengan virtual tour dan sistem booking online.',
        url: 'https://wisata-grogol.com',
        screenshot: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop',
        category: 'Pariwisata',
        features: ['Virtual Tour', 'Booking Online', 'Guide Digital'],
        launchDate: '2024',
        status: 'development'
      }
    ]
  },
  'Pampang': {
    description: 'Platform digital Desa Pampang mengusung konsep sustainable tourism dan organic marketplace dengan fokus edukasi lingkungan.',
    totalWebsites: 3,
    websites: [
      {
        id: 1,
        name: 'Pampang Eco Tourism',
        description: 'Platform promosi ekowisata dan konservasi alam berkelanjutan dengan program edukasi lingkungan.',
        url: 'https://ecotourism-pampang.id',
        screenshot: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
        category: 'Ekowisata',
        features: ['Eco Programs', 'Nature Guide', 'Conservation Info'],
        launchDate: '2023',
        status: 'aktif'
      },
      {
        id: 2,
        name: 'Pampang Organic Market',
        description: 'Marketplace online produk organik dan hasil pertanian berkelanjutan dari petani lokal.',
        url: 'https://organic-pampang.com',
        screenshot: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
        category: 'Organic Market',
        features: ['Produk Organik', 'Farm to Table', 'Subscription Box'],
        launchDate: '2024',
        status: 'aktif'
      },
      {
        id: 3,
        name: 'Pampang Learning Hub',
        description: 'Platform edukasi online untuk pelatihan pertanian organik dan konservasi lingkungan.',
        url: 'https://learning-pampang.id',
        screenshot: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
        category: 'Edukasi',
        features: ['Online Courses', 'Digital Certificate', 'Community'],
        launchDate: '2024',
        status: 'development'
      }
    ]
  }
};

// Helper functions untuk mengambil data
export const getWebsitesByDesa = (desaName: string): WebsiteData[] => {
  return websiteData[desaName]?.websites || [];
};

export const getDesaWebsiteInfo = (desaName: string): DesaWebsiteData | null => {
  return websiteData[desaName] || null;
};

export const getAllWebsites = (): WebsiteData[] => {
  return Object.values(websiteData).flatMap(desa => desa.websites);
};

export const getWebsitesByStatus = (status: 'aktif' | 'maintenance' | 'development'): WebsiteData[] => {
  return getAllWebsites().filter(website => website.status === status);
};

export const getWebsitesByCategory = (category: string): WebsiteData[] => {
  return getAllWebsites().filter(website => website.category === category);
};