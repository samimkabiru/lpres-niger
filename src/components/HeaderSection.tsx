import HeroSection from './HeroSection';
import NavBar from './NavBar';

const HeaderSection = () => {
  return (
    <header className="bg-green-50 relative z-0">
      <div className="animate-blob circle animation-delay-0 absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-green-200 opacity-80 mix-blend-multiply blur-3xl filter"></div>
      <div className="animate-blob circle animation-delay-2000 absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-green-200 opacity-80 mix-blend-multiply blur-3xl filter"></div>
      <div className="animate-blob circle animation-delay-4000 absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200 opacity-80 mix-blend-multiply blur-3xl filter"></div>
      <NavBar />
      <HeroSection />
    </header>
  );
};

export default HeaderSection;
