import NavBar from '../components/NavBar';
import DesaSection from '../components/DesaSection';
import HeroSection from '@/components/HeroSection';
import InformasiGeografisSection from '@/components/InformasiGeografisSection';
import LogoSection from '@/components/LogoSection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <main className="w-full">
        <HeroSection />
        <InformasiGeografisSection />
        <LogoSection />
        <DesaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;