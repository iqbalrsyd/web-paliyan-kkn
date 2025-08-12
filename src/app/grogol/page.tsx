import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import DesaHeroSection from '../../components/desa/DesaHeroSection';
import DesaProgramSection from '../../components/desa/DesaProgramSection';
import DesaUmkmSection from '../../components/desa/DesaUmkmSection';
import DesaWebsiteCarouselProps from '../../components/desa/DesaWebsiteCarousel';

const GrogolPage = () => {
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
