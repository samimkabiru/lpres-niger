import FAQS from '@/components/FAQS';
import FrameworkSection from '@/components/FrameworkSection';
import HeroSection from '@/components/HeroSection';
import ValueChainsSection from '@/components/ValueChainsSection';
import 'aos/dist/aos.css';
import { FaArrowUp } from 'react-icons/fa';

const Homepage = () => {
  return (
    <div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="inline-flex w-8 h-8 justify-center items-center fixed bottom-5 right-5 z-20 cursor-pointer rounded-full text-white bg-green-900 hover:bg-green-800 transition-colors"
      >
        <FaArrowUp />
      </button>
      <HeroSection />
      <ValueChainsSection />
      <FrameworkSection />
      <FAQS />
    </div>
  );
};

export default Homepage;
