import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import DesaHeroSection from '../../components/desa/DesaHeroSection';
import DesaInfoSection from '../../components/desa/DesaInfoSection';
import DesaProgramSection from '../../components/desa/DesaProgramSection';
import DesaUmkmSection from '../../components/desa/DesaUmkmSection';
import DesaWebsiteCarouselProps from '../../components/desa/DesaWebsiteCarousel';

const GrogolPage = () => {
  const desaData = {
    nama: "Grogol",
    deskripsi: "Desa Grogol adalah desa yang kaya akan budaya dan tradisi, dengan berbagai potensi ekonomi kreatif dan UMKM yang berkembang.",
    // Data spesifik untuk Grogol akan ditambahkan di sini
  };

  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <main className="w-full">
        <DesaHeroSection desaName="Grogol" />
        <DesaProgramSection desaName="Grogol" />
        <DesaUmkmSection desaName="Grogol" />
        <DesaWebsiteCarouselProps desaName="Pampang" />

      </main>
      <Footer />
    </div>
  );
};

export default GrogolPage;
