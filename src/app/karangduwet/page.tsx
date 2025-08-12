import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import DesaHeroSection from '../../components/desa/DesaHeroSection';
import DesaInfoSection from '../../components/desa/DesaInfoSection';
import DesaProgramSection from '../../components/desa/DesaProgramSection';
import DesaUmkmSection from '../../components/desa/DesaUmkmSection';
import DesaWebsiteCarouselProps from '../../components/desa/DesaWebsiteCarousel';

const KarangduwetPage = () => {
  const desaData = {
    nama: "Karangduwet",
    deskripsi: "Desa Karangduwet merupakan salah satu desa di Kecamatan Paliyan yang memiliki potensi pertanian dan pariwisata yang menarik.",
    // Data spesifik untuk Karangduwet akan ditambahkan di sini
  };

  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <main className="w-full">
        <DesaHeroSection desaName="Karangduwet" />
        <DesaProgramSection desaName="Karangduwet" />
        <DesaUmkmSection desaName="Karangduwet" />
        <DesaWebsiteCarouselProps desaName="Karangduwet" />

      </main>
      <Footer />
    </div>
  );
};

export default KarangduwetPage;
