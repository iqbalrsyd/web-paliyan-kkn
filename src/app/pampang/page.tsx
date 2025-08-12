import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import DesaHeroSection from '../../components/desa/DesaHeroSection';
import DesaProgramSection from '../../components/desa/DesaProgramSection';
import DesaUmkmSection from '../../components/desa/DesaUmkmSection';
import DesaWebsiteCarousel from '../../components/desa/DesaWebsiteCarousel';

const PampangPage = () => {
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <main className="w-full">
        <DesaHeroSection desaName="Pampang" />
        <DesaProgramSection desaName="Pampang" />
        <DesaUmkmSection desaName="Pampang" />
        <DesaWebsiteCarousel desaName="Pampang" />
      </main>
      <Footer />
    </div>
  );
};

export default PampangPage;
