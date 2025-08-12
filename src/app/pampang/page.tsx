import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import DesaHeroSection from '../../components/desa/DesaHeroSection';
import DesaInfoSection from '../../components/desa/DesaInfoSection';
import DesaProgramSection from '../../components/desa/DesaProgramSection';
import DesaUmkmSection from '../../components/desa/DesaUmkmSection';
import DesaWebsiteCarouselProps from '../../components/desa/DesaWebsiteCarousel';

const PampangPage = () => {
  const desaData = {
    nama: "Pampang",
    deskripsi: "Desa Pampang memiliki keindahan alam yang memukau dan potensi wisata yang menarik, serta UMKM yang berfokus pada produk lokal.",
    // Data spesifik untuk Pampang akan ditambahkan di sini
  };

  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <main className="w-full">
        <DesaHeroSection desaName="Pampang" />
        <DesaProgramSection desaName="Pampang" />
        <DesaUmkmSection desaName="Pampang" />
        <DesaWebsiteCarouselProps desaName="Pampang" />
      </main>
      <Footer />
    </div>
  );
};

export default PampangPage;
