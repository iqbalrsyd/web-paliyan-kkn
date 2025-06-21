import NavBar from '../components/NavBar';
import DesaSection from '../components/DesaSection';
import HeroSection from '@/components/HeroSection';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-center">
        <HeroSection />
        <DesaSection />
      </main>
    </div>
  );
};

export default HomePage;