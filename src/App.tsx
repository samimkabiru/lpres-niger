import AOS from 'aos';
import 'aos/dist/aos.css';
import FrameworkSection from './components/FrameworkSection';
import HeaderSection from './components/HeaderSection';
import ValueChainsSection from './components/ValueChainsSection';
import FooterSection from './components/FooterSection';
import { FaArrowUp } from 'react-icons/fa';

const App = () => {
  AOS.init({
    duration: 500,
    once: false,
    easing: 'ease-in',
  });

  return (
    <div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="inline-flex w-8 h-8 justify-center items-center fixed bottom-5 right-5 z-20 cursor-pointer rounded-full text-white bg-green-900 hover:bg-green-800 transition-colors"
      >
        <FaArrowUp />
      </button>
      <HeaderSection />
      <ValueChainsSection />
      <FrameworkSection />
      <FooterSection />
    </div>
  );
};

export default App;
